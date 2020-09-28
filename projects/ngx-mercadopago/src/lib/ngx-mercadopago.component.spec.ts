import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMercadopagoComponent } from './ngx-mercadopago.component';

describe('NgxMercadopagoComponent', () => {
  let component: NgxMercadopagoComponent;
  let fixture: ComponentFixture<NgxMercadopagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMercadopagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMercadopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
