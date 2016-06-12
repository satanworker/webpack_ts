import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router";
import {AppComponent} from "./app.component/app.component";
import {GlobalService} from "./global.service/gloval.service";
//common styles
bootstrap( AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    GlobalService
]);
