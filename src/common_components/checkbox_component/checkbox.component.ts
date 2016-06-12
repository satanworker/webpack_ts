import {Component, Input} from "@angular/core";
@Component({
    selector: 'checkbox',
    template: require('./checkbox.component.html')
})
export class CheckboxComponent{
    @Input() name: string;
    @Input() value: boolean;
    constructor() { }
}