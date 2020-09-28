import { TestBed } from '@angular/core/testing';

import { NgxMercadopagoService } from './ngx-mercadopago.service';

describe('NgxMercadopagoService', () => {
  let service: NgxMercadopagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMercadopagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
