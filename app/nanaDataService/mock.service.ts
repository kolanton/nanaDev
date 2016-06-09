import {TestService} from './test.service';
import {Inject} from '@angular/core';

/**
 * (description)
 * 
 * @export
 * @class MockWrapperService
 */
export class MockWrapperService {

    /**
     * Creates an instance of MockWrapperService.
     * 
     * @param {TestService} ts (description)
     */
    constructor( @Inject(TestService) private ts: TestService) {
        console.log('injected: ' + JSON.stringify(ts.getService()));
    }
    /**
     * (description)
     * 
     * @returns (description)
     */
    getService() {
        return this.ts.getService();
    }
}
