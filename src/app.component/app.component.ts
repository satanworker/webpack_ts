import {Component, OnInit} from "@angular/core";
import {Router, ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS} from "@angular/router";
import {IndexPage} from "../index.component/index.component";
import {HeaderComponent} from "../common_components/header.component/header.component";
import {NavComponent} from "../common_components/nav.component/nav.component";
import {AccountsNav} from "../common_components/accounts_nav.component/accounts_nav.component";
import {GlobalService} from "../global.service/gloval.service";
import {RegTest} from "../reg_test.component/reg_test.component";
import {RegistrationComponent} from "../registration_common/registration.component/registration.component";
require('../scss/app.scss');

@Routes([
    { path: '/', component: IndexPage},
    {path: '/reg', component: RegistrationComponent }
    //{path: '/reg', component: RegTest}
])


@Component({
    selector: 'app',
    template: require('./app.template.html'),
    directives: [ROUTER_DIRECTIVES, HeaderComponent, NavComponent, AccountsNav],
    providers: [ROUTER_PROVIDERS],
})
export class AppComponent implements OnInit {
    private templateVariable:string = 'initial';
    constructor(
        private router: Router,
        private globalService:GlobalService
    ) {}
    ngOnInit () {
        this.globalService.templateChange.subscribe (
            res => {this.templateVariable = res},
            err => console.log(err)
        )
    }
}