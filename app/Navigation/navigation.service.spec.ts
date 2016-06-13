import { NanaDal} from '../DAL/dal.service';
import {MockNanaDal} from '../DAL/dal.service.mock';
import {NanaserviceService} from './navigation.service';
import { Navigation} from './Models/navigation';
import {it,
    describe,
    expect,
    beforeEach,
    beforeEachProviders,
    inject} from '@angular/core/testing';
import {provide, ReflectiveInjector} from '@angular/core';
import { BaseRequestOptions,
    RequestMethod,
    Response,
    ResponseOptions,
    Request,
    Http} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('Nana Service', () => {
    it('should work with mock nanaDal', () => {
        let injector = ReflectiveInjector.resolveAndCreate([
            NanaserviceService,
            provide(NanaDal, { useClass: MockNanaDal }),
        ]);
        let res: NanaserviceService = injector.get(NanaserviceService);
        res.getServices();
        let output: Navigation = new Navigation({ NavigateID: 1, NavigateName: 'name1' });
        expect(res.navigations).toEqual(output);
    });
});

describe('MockBackend: TestService', () => {


    it('should return response when subscribed to getItems', () => {
        let injector = ReflectiveInjector.resolveAndCreate([
            MockBackend, BaseRequestOptions,
            provide(Http, {
                useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
                    return new Http(backend, options);
                }, deps: [MockBackend, BaseRequestOptions]
            }),
            provide(NanaDal, {
                useFactory: (http: Http) => {
                    return new NanaDal(http);
                },
                deps: [Http]
            }),
        ]);
        let backEnd: MockBackend = injector.get(MockBackend);
        // let req = new Request({ method: RequestMethod.Get, body: '' });
        // backEnd.createConnection(req);

        backEnd.connections.subscribe((data: MockConnection) => {
            expect(data.request.url).toContain('service/126');
            data.mockRespond(new Response(new ResponseOptions({ body: { NavigateID: 1, NavigateName: 'name1' } })));
        });

        let testService: NanaDal = injector.get(NanaDal);

        expect(testService instanceof (NanaDal)).toBe(true);
        expect(NanaDal.getInstance()).toEqual(testService);
        testService.setFactory('service', 126);

        testService.getItems().subscribe((res: Navigation) => {
            expect(res).toEqual({ NavigateID: 1, NavigateName: 'name1' });
        });
    });
});

xdescribe('', () => {

    beforeEachProviders(() => [
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        }),
        provide(NanaDal, {
            useFactory: (http: Http) => {
                return new NanaDal(http);
            },
            deps: [Http]
        })
    ]);

    beforeEach(inject([MockBackend], (backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions({ body: 'got response' }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));

        backend.createConnection(new Request({
            method: RequestMethod.Get,
            url: 'http://localhost/Nana10MVC/service/126',
            search: 'password=123'
        }));
    }));

    it('should return response when subscribed to getUsers',
        inject([NanaDal], (testService: NanaDal) => {
            testService.getItems().subscribe((res: Response) => {
                expect(res).toBe('got response');
            });
        })
    );


});
