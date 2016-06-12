/**
 * Created by satanworker on 10/06/16.
 */
import {Component, Input, OnInit, EventEmitter, Output, OnChanges, ElementRef} from "@angular/core";
import * as $ from 'jquery';
import {RadioStyled} from "../../common_components/radio_styled.component/radio_styled.component";
//import {RadioControlValueAccessor} from "@angular/common/esm/src/forms/directives/radio_control_value_accessor";
import {FORM_DIRECTIVES, Validators, FormBuilder} from "@angular/common";

export interface Profile{
    title: string,
    first_name: string;
    last_name: string;
    email: string;
    main_no: string;
    mobile_no: string;
    level: string;
    street: string;
    borough: string;
    city: string;
    postCode: string;
    country: string;
    photo: any;
}

@Component({
    selector: 'reg-first',
    template: require('./first_step.component.html'),
    styles: [require('./first_step.component.scss')],
    directives: [FORM_DIRECTIVES, RadioStyled]
})
export class RegFirst implements OnInit{
    @Input() data;
    private model: Profile;
    private checker;
    private form: any;
    private gotPhoto: boolean;
    constructor(private fb: FormBuilder, private element: ElementRef){
        // this.answerCheck = new EventEmitter();
    }

    ngOnInit(){
        this.gotPhoto = false;
        this.model = this.data.data;
        this.checker = this.data.complete;
        this.form = this.fb.group({
            title: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', Validators.compose([Validators.pattern("^(.+?)@(.+?)\.[A-Za-z0-9]{2,}$"), Validators.required])],
            main_no: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{12}')])],
            mobile_no: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{12}')])],
            level: ['', Validators.required],
            street: ['', Validators.required],
            borough: ['', Validators.required],
            city: ['', Validators.required],
            postCode: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{2}[0-9]{3}[A-Za-z]{2}')])],
            country: ['', Validators.required]
        });
        //
        // this.checker.subscribe(
        //     res => {
        //         this.answerCheck.emit(true);
        //     }
        // )

    }

    checkAvailability(){
        if(this.form.status=='INVALID' || !this.gotPhoto)
            this.data.complete = false;
        else
            this.data.complete = true;
        console.log('checkAvail', this.form, this.model);
    }

    uploadFile(event){
        var reader = new FileReader();
        console.log(event.srcElement.files);
        var image = this.element.nativeElement.querySelector('#avatar');

        reader.onload = function(e) {
            var src = reader.result;
            image.src = src;
        };
        this.model.photo = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
        this.gotPhoto = true;
    }

    initiateFileUpload(){
        $('#fileUploadInput').trigger('click');
    }

    //this is workaround for angular2 not supporting anything then <input> yet
    changeModel(type, value){
        this.model[type]=value;
        this.checkAvailability();
    }
}