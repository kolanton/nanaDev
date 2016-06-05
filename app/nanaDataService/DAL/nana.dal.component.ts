import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

import { NanaDal } from './nana.dal';

@Component({
  selector: 'dal',
  template: '<dal></dal>',
  providers: [
    HTTP_PROVIDERS,
    NanaDal,
    Http
  ]
})
export class NanaDalComponent {}
