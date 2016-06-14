import {BaseRequestOptions, Http, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ReflectiveInjector} from '@angular/core';
import {provide, Injector } from '@angular/core';
import {NanaDal} from './dal.service';
import {MockNanaDal} from './dal.service.mock';

describe('DAL Tests with MockObj', () => {
    let injector: ReflectiveInjector;
    beforeEach(() => {
        injector = ReflectiveInjector.resolveAndCreate([
            provide(NanaDal, { useClass: MockNanaDal })
        ]);

    });
    it('fake injection should work', () => {
        expect(injector.get(NanaDal) instanceof MockNanaDal).toBe(true);
    });
    it('GetItems() on fake Obj should work', () => {
        let sut: NanaDal = injector.get(NanaDal);
        sut.getItems().subscribe(data => {
            expect(data).toEqual({ NavigateID: 1, NavigateName: 'name1' });
        });
    });
    describe('getFactory stab', () => {

    });
    describe('getItems stab', () => {

    });
});
describe('DAL is Singletone', () => {
    it('should pass instance match', () => {
        let sut = new NanaDal(null);
        expect(NanaDal.getInstance() === sut).toBeTruthy();
    });
});

