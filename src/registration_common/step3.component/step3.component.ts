import {Component, Input} from "@angular/core";
@Component({
    selector: 'step3',
    template: require('./step3.component.html')
})
export class Step3Component{
    @Input() data;
    constructor(){}
}