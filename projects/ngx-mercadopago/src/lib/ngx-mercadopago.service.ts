import { Injectable, InjectionToken } from '@angular/core';
import { MercadopagoSDk, PaymentMethod, PaymentForm } from './interfaces/mercadopago-sdk';
import { NgxMercadopagoConfiguration } from './interfaces/ngx-mercadopago';
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';

/** @hidden */
const pathSDK = 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js';
/** @hidden */
export const ConfigToken = new InjectionToken<NgxMercadopagoConfiguration>('config');

declare var Mercadopago: MercadopagoSDk;

@Injectable({
  providedIn: 'root'
})
export class NgxMercadopagoService {

  initialized: boolean;
  constructor(
    private config: NgxMercadopagoConfiguration,
  ) {
    if (!config.pathSDK) {
      config.pathSDK = pathSDK;
    }

    this.initialized = false;
  }

  initialize(): Promise<MercadopagoSDk> {
    return new Promise((resolve, reject) => {
      this.loadMPScript(this.config.pathSDK).onload = () => {
        this.initialized = true;
        Mercadopago.setPublishableKey(this.config.publishKey);

        return resolve(Mercadopago);
      };

      this.loadMPScript(this.config.pathSDK).onerror = (error) => reject(error);
    });
  }

  loadMPScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
    return script;
  }

  getPaymentMethods(): PaymentMethod[] {
    return Mercadopago.getPaymentMethods();
  }

  getIdentificationTypes() {
    return bindCallback(Mercadopago.getIdentificationTypes)().pipe(
      map(([status, data]) => ({ status, data }))
    )
  }

  createToken(form: PaymentForm) {
    return bindCallback(Mercadopago.createToken)(form).pipe(
      map(([status, data]) => ({ status, data }))
    )
  }
}
