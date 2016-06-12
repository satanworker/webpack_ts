import {Injectable} from "@angular/core";
import {EventEmitter} from "@angular/compiler/src/facade/async";
@Injectable()
export class GlobalService {
    public templateChange: EventEmitter<string>;
    constructor() {
        this.templateChange = new EventEmitter();
    }
}