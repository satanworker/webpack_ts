import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from "@angular/router";

@Component({
    selector: 'header',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {
    constructor () {}
}