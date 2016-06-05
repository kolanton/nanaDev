import {Component} from '@angular/core';
import {NanaDal} from './nanaDataService/DAL/nana.dal';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    /**
     *
     */
    data: any;
    errorMessage: any;
    constructor(_http: Http) {
        console.log(_http);
        new NanaDal( _http);
        let dal = NanaDal.getInstance();
        dal.setFactory('service', 126);
        dal.getItems().subscribe(
                       data => this.print(data),
                       error =>  this.errorMessage = <any>error);
    }

    print(data: any) {
        this.data = data;
        console.log(this.data);
    }

}
