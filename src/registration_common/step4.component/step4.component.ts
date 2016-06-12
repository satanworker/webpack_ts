import {Component, Input} from "@angular/core";
@Component({
    selector: 'step4',
    template: require('./step4.component.html')
})
export class Step4Component{
    @Input() data;
    constructor(){}
}