import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxMercadopagoConfiguration } from './interfaces/ngx-mercadopago';
import { NgxMercadopagoService, ConfigToken } from './ngx-mercadopago.service';


@NgModule()
export class NgxMercadopagoModule {
  static forRoot(
    libConfiguration: NgxMercadopagoConfiguration
  ): ModuleWithProviders<NgxMercadopagoModule> {
    return {
      ngModule: NgxMercadopagoModule,
      providers: [
        {
          provide: ConfigToken,
          useValue: libConfiguration
        },
        {
          provide: NgxMercadopagoService,
          deps: [ConfigToken]
        }
      ]
    };
  }
}