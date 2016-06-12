import {Component} from "@angular/core";
import {HeaderComponent} from "../common_components/header.component/header.component";
import {GlobalService} from "../global.service/gloval.service";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from "@angular/router";

@Component({
    selector: 'index-page',
    template: require('./index.component.html'),
    styles: [require('./index.component.scss')],
    directives: [HeaderComponent, ROUTER_DIRECTIVES]
})

export class IndexPage {
    constructor (
        private globalService:GlobalService
    ) {
        this.globalService.templateChange.emit('index');
    }
}