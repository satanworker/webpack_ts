import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
    selector: 'side-nav',
    template: require('./nav.component.html'),
    styles: [require('./nav.component.scss')],
    directives: [ROUTER_DIRECTIVES]
})

export class NavComponent {
    constructor() {}
}