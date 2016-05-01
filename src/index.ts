import * as jquery from 'jquery';
import {TestComponent} from "./test.component/test.component";

var test = new TestComponent()

$(document).ready(function() {
    console.log(test.test())
})