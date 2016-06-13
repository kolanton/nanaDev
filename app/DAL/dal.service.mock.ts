import { Observable } from 'rxjs/Rx';
/**
 * (description)
 * 
 * @export
 * @class MockNanaDal
 */
export class MockNanaDal {
    /**
     * (description)
     * 
     * @returns {Observable<Object>} (description)
     */
    getItems(): Observable<Object> {
        return Observable.of({
            NavigateID: 1,
            NavigateName: 'name1'
        });
    }
}