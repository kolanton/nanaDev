import {BaseRequestOptions, Http, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ReflectiveInjector} from '@angular/core';
import {provide, Injector } from '@angular/core';
//import {Injector} from '@angular/core/src/di';

// let injector = Injector.resolveAndCreate([
//   BaseRequestOptions,
//   MockBackend,
//   provide(Http, {useFactory:
//       function(backend: any, defaultOptions: any) {
//         return new Http(backend, defaultOptions);
//       },
//       deps: [MockBackend, BaseRequestOptions]})
// ]);
// let http = injector.get(Http);
// http.get('http://localhost/Nana10MVC/service').subscribe((res: Response) => console.log('dal test: ' + res));
