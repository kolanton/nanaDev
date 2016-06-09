import {TestService} from './test.service';
import {Inject} from '@angular/core';

export class MockWrapperService {
    /**
     *
     */
    constructor( @Inject(TestService) private ts: TestService) {
        console.log('injected: ' + JSON.stringify(ts.getService()));
    }
    getService() {
        return this.ts.getService();
    }
}
