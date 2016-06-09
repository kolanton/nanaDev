import { Observable } from 'rxjs/Rx';
import {Injectable} from '@angular/core';


export class TestService {
    /**
     *
     */
    constructor() {
        console.log('origin used');

    }
    /**
     * gets sample data
     * 
     * @returns {Array<Object>} 2 hardcoded objects
     */
    getService(): Array<Object> {
        console.log('\t origin data');
        return [{ fname: 'vasya', lname: 'pupkin' }, { fname: 'kolya', lname: 'Pupkin' }];
    }
    getObservableService(): Observable<Object> {
        return Observable.of(new TestService().getService());

    }
}

export class MockTestService {
    ts = new TestService();

    constructor() {
        console.log('mock used');
    }
    getService(): Array<Object> {
        console.log('\t mock data');
        return this.ts.getService();
    }
    /**
     * Observable wrapper around TestService
     * 
     * @returns {Observable<Object>} (description)
     */
    getObservableService(): Observable<Object> {
        return this.ts.getObservableService();
    }
}
