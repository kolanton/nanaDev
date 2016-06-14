import {TestService, MockTestService} from '../test.service';
import {MockWrapperService} from '../mock.service';
import {MockNanaDal, NanaDal} from '../DAL/nana.dal';
import {NanaserviceService, Navigation} from '../nanaserviceService/nanaservice.service';
import {it, xit,
    describe,
    expect,
    beforeEach,
    beforeEachProviders,
    inject} from '@angular/core/testing';
import {provide, ReflectiveInjector} from '@angular/core';
import {BaseRequestOptions, Response, ResponseOptions, Http} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('test.service step by step test', () => {


    let ts;
    beforeEach(() => {
        ts = new TestService();
    });
    it('should contain valid properties', () => {
        expect(ts.getService()).toContain({ fname: 'vasya', lname: 'pupkin' });
        expect(ts.getService()).toContain({ fname: 'kolya', lname: 'Pupkin' });
    });

    it('should contain valid observable properties', () => {
        ts.getObservableService().subscribe(data => {
            expect(data).toContain({ fname: 'vasya', lname: 'pupkin' });
            expect(data).toContain({ fname: 'kolya', lname: 'Pupkin' });
        });
    });
});

describe('Injector Tests', () => {
    beforeEachProviders(() => [TestService]);

    it('should contain valid objects', inject([TestService], (service) => {
        expect(service.getService()).toContain({ fname: 'vasya', lname: 'pupkin' });
    }));
    it('should contain valid observable properties', inject([TestService], (service) => {
        service.getObservableService().subscribe(data => {
            expect(data).toContain({ fname: 'vasya', lname: 'pupkin' });
        });
    }));
});

describe('Injector Mock class Tests', () => {
    beforeEachProviders(() => [
        TestService
    ]);

    it('should contain valid  properties', () => {
        let injector = ReflectiveInjector.resolveAndCreate([
            provide('message', { useValue: 'Hello' }),
            provide(TestService, { useClass: MockTestService })
        ]);

        expect(injector.get('message')).toEqual('Hello');

        let service: TestService = injector.get(TestService);
        expect(service.getService()).toContain({ fname: 'vasya', lname: 'pupkin' });
        expect(service.getService()).not.toContain({ fname: 'kolya', lname: 'pupkin' });
        expect(() => injector.get('someBullShit')).toThrowError();
    });
    it('should contain valid observable properties', inject([TestService], (service: TestService) => {
        service.getObservableService().subscribe(data => {
            expect(data).toContain({ fname: 'vasya', lname: 'pupkin' });
        });
    }));
});

describe('DI on ctor', () => {
    it('should work mockWrapper with real DI', () => {
        let injector = ReflectiveInjector.resolveAndCreate([
            TestService, MockWrapperService]);
        expect(injector.get(MockWrapperService) instanceof MockWrapperService).toBe(true);
    });
    it('should work mockWrapper with fakeDI', () => {
        let injector = ReflectiveInjector.resolveAndCreate([
            MockWrapperService,
            provide(TestService, { useClass: MockTestService })]);

        let service = injector.get(MockWrapperService);
        expect(service.getService()).toContain({ fname: 'vasya', lname: 'pupkin' });

    });
});

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
                useFactory: (backend, options) => {
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
        backEnd.connections.subscribe((data: MockConnection) => {
            expect(data.request.url).toContain('service/126');
            data.mockRespond(new Response(new ResponseOptions({ body: { NavigateID: 1, NavigateName: 'name1' } })));
        });

        let sut: NanaDal = injector.get(NanaDal);

        expect(sut instanceof (NanaDal)).toBe(true);
        expect(NanaDal.getInstance()).toEqual(sut);
        sut.setFactory('service', 126);

        sut.getItems().subscribe((res: Navigation) => {
            expect(res).toEqual({ NavigateID: 1, NavigateName: 'name1' });
        });
    });
});

describe('MockBackend: TestService using beforeEach and beforeEachProviders', () => {
    let injector;
    beforeEachProviders(() => [
        injector = ReflectiveInjector.resolveAndCreate(
            [
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
            ])
    ]);

    beforeEach(() => {
        let backend = injector.get(MockBackend);
        const baseResponse = new Response(new ResponseOptions({ body: { res: 'got response' } }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
    });

    it('should return response on any Request', () => {
        let sut = injector.get(Http);
        sut.get('someFakeUrl').subscribe((res: Response) => {
            expect(res).toEqual(new Response(new ResponseOptions({ body: { res: 'got response' } })));
        });
    });

    it('should return response when subscribed to getUsers', () => {
        let sut = injector.get(NanaDal);
        sut.getItems().subscribe((res: Response) => {
            expect(res).toEqual({ res: 'got response' });
        });
    }
    );


});
