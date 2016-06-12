/**
 * Created by satanworker on 10/06/16.
 */
import {Component, OnInit, OnDestroy, EventEmitter} from "@angular/core";
import * as $ from 'jquery';
import {RegFirst} from "../first_step.component/first_step.component";
import {Step5Component} from "../step5.component/step5.component";
import {Step4Component} from "../step4.component/step4.component";
import {Step2Component} from "../step2.component/step2.component";
import {Step3Component} from "../step3.component/step3.component";
import {GlobalService} from "../../global.service/gloval.service";


@Component({
    selector: 'reg-component',
    template: require('./registration.component.html'),
    styles: [require('./registration.component.scss')],
    directives: [RegFirst, Step2Component, Step3Component, Step4Component, Step5Component]
})
export class RegistrationComponent implements OnInit, OnDestroy {
    private registrationData: any;

    constructor (
        private globalService:GlobalService
    ) {
        this.globalService.templateChange.emit('reg');
        this.registrationData = {
            currentStep: 1,
            allowPrev: false,
            allowNext: true,
            steps:[
                {
                    name: 'Your profile',
                    complete: true,
                    data: {
                    },
                },
                {
                    name: 'Record your interview',
                    complete: false,
                    data: {
                    }
                },
                {
                    name: 'Areas of interest',
                    complete: false,
                    data: {
                    }
                },
                {
                    name: 'Agree to be a member',
                    complete: false,
                    data: {
                    }
                },
                {
                    name: 'Completed profile',
                    complete: false,
                    data: {
                    }
                }
            ]
        }
    }

    ngOnInit() {
        $('.router_container').addClass('registration');
    }
    
    ngOnDestroy() {
        $('.router_container').removeClass('registration');
    }

    nextStep(){
        console.log('nextStep', this.checkStepChange());
        if(this.registrationData.allowNext && this.checkStepChange()){

            this.registrationData.currentStep++;
            this.stepChange();
        }
    }

    prevStep(){
        if(this.registrationData.allowPrev && this.checkStepChange()){
            this.registrationData.currentStep--;
            this.stepChange(); 
        }
    }

    goStep(i){
        if(this.registrationData.steps[i].complete && this.checkStepChange()){
            this.registrationData.currentStep=i+1; 
        }
        this.stepChange();
    }



    stepChange(){
        if(this.registrationData.currentStep==1) this.registrationData.allowPrev=false;
        else this.registrationData.allowPrev=true;

    }

    onSubmit(value){
        console.log('formSubmit', value);

    }

    checkStepChange(){
        if(!this.registrationData.steps[this.registrationData.currentStep-1].complete){
            //TODO: show some error
            return false;
        }
        return true;
    }

    answerCheck(){

    }

}
