import { InjectionToken } from '@angular/core';
import { MercadopagoSDk, PaymentMethod, PaymentForm, CardInstallment, PaymentMethodSearch, CardToken, Installments, ErrorData } from './interfaces/mercadopago-sdk';
import { NgxMercadopagoConfiguration } from './interfaces/ngx-mercadopago';
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';

/** @hidden */
const pathSDK = 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js';
/** @hidden */
export const ConfigToken = new InjectionToken<NgxMercadopagoConfiguration>('config');

declare var Mercadopago: MercadopagoSDk;
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

  initialize(publishKey?: string): Promise<MercadopagoSDk> {
    return new Promise((resolve, reject) => {
      const sdkMercadoPago = this.loadMPScript(this.config.pathSDK);

      sdkMercadoPago.onload = () => {
        this.initialized = true;
        Mercadopago.setPublishableKey(publishKey || this.config.publishKey);

        return resolve(Mercadopago);
      };
      sdkMercadoPago.onerror = (error) => reject(error);
    });
  }

  loadMPScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
    return script;
  }

  async clearSession() {
    Mercadopago.clearSession();
  };

  getPaymentMethod(card: PaymentMethodSearch) {
    return bindCallback(Mercadopago.getPaymentMethod)(card).pipe(
      map(([status, resp]) => {
        if (status === 200) {
          return { status, data: <PaymentMethod[]>resp, error: <ErrorData>null };
        } else {
          return { status, data: <PaymentMethod[]>null, error: <ErrorData>resp };
        }
      })
    )
  }

  getPaymentMethods(): PaymentMethod[] {
    return Mercadopago.getPaymentMethods();
  }

  getIdentificationTypes() {
    return bindCallback(Mercadopago.getIdentificationTypes)().pipe(
      map(([status, data]) => ({ status, data }))
    )
  }

  getInstallments(card: CardInstallment) {
    return bindCallback(Mercadopago.getInstallments)(card).pipe(
      map(([status, resp]) => {
        if (status === 200) {
          return { status, data: <Installments[]>resp, error: <ErrorData>null };
        } else {
          return { status, data: <Installments[]>null, error: <ErrorData>resp };
        }
      })
    )
  }

  createToken(form: PaymentForm) {
    return bindCallback(Mercadopago.createToken)(form).pipe(
      map(([status, resp]) => {
        if (status === 200) {
          return { status, data: <CardToken>resp, error: <ErrorData>null };
        } else {
          return { status, data: <CardToken>null, error: <ErrorData>resp };
        }
      })
    )
  }

  validateExpiryDate(date: string): boolean {
    return Mercadopago.validateExpiryDate(date);
  }
  validateExpiryMonthYear(month: string, year: string): boolean {
    return Mercadopago.validateExpiryDate(month, year);
  }
}
