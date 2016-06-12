import {Component, Input} from "@angular/core";
@Component({
    selector: 'step2',
    template: require('./step2.component.html')
})
export class Step2Component{
    @Input() data;
    videosrc: string;

        // videosrc: string;
        // constructor(){
        //
        // setTimeout(() => {}, 2000);
        //
        // navigator.getUserMedia({video: true},(stream) => {
        //     this.videosrc= URL.createObjectURL(stream);
        // }, (err) => console.log(err));
    // }

}

