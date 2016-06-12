import {Component, Input} from "@angular/core";
@Component({
    selector: 'radio-styled',
    template: require('./radio_styled.component.html'),
    styles: [require('./radio_styled.component.scss')]
})
export class RadioStyled {
    @Input() name:string;
    @Input() title:string;
    constructor() {}
}