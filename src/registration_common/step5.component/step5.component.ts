import {Component, Input} from "@angular/core";
@Component({
    selector: 'step5',
    template: require('./step5.component.html')
})
export class Step5Component{
    @Input() data;
    constructor(){}
}