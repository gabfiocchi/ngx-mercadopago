# ngx-mercadopago

An Angular wrapper for Mercado Pago SDK for JavaScript.

[MercadoPago Docs](https://www.mercadopago.com.ar/developers/es/guides/sdks/official/js)

## 💡 Requirements

Angular 6 or higher.

**To go to production it is necessary that you have an SSL certificate and that the payment form be made available on an HTTPS page.**

## 📲 Installation 

First time using Mercado Pago? Create your [Mercado Pago account](https://www.mercadopago.com), if you don’t have one already.

First you need to install the npm module:

```sh
npm install ngx-mercadopago --save
```

Copy the public key in the [credentials](https://www.mercadopago.com.ar/developers/panel/credentials) section of the page.



## Usage

#### 1. Import the `NgxMercadopagoModule`:

Finally, you can use ngx-mercadopago in your Angular project. You have to import `NgxMercadoPago.forRoot()` in the root NgModule of your application.

The [`forRoot`](https://angular.io/api/router/RouterModule#forroot) static method is a convention that provides and configures services at the same time.
Make sure you only call this method in the root module of your application, most of the time called `AppModule`.
This method allows you to configure the `NgxMercadoPago` by specifying a publish key and/or a path for JS SDK.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMercadopagoModule } from 'ngx-mercadopago';

@NgModule({
    imports: [
        BrowserModule,
        NgxMercadopagoModule.forRoot({
            publishKey: 'Your Publish Key',
            pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Import the `NgxMercadopagoService`:
```ts
...
import { NgxMercadopagoService } from 'ngx-mercadopago';
...

export class MpPaymentPage implements OnInit {
    constructor(
        private ngxMpService: NgxMercadopagoService
    ) { }
    
    ngOnInit() {
        await this.ngxMpService.initialize();
    }

    getPaymentMethods() {
        const PaymentMethods = this.ngxMpService.getPaymentMethods();
    }

    async createToken() {
        const cardToken = await this.ngxMpService.createToken(form).toPromise();
    }

    async getInstallments() {
        const issuer = await this.ngxMpService.getInstallments({
          payment_type_id: 'XX',
          payment_method_id: 0,
          bin: 000000
        }).toPromise();
    }
    async getPaymentMethod() {
        const paymentMethod = await this.ngxMpService.getPaymentMethod({
            bin: 0000 
        }).toPromise();
    }
}
```

## Cordova / Ionic
```xml
<platform name="android">
    <preference name="Scheme" value="https" />
</platform>

<platform name="ios">
    <preference name="Hostname" value="myName" />
</platform>
```

## Capacitor
```json
{
    "server": {
        "androidScheme": "https",
        "iosScheme": "myName"
    }
}
```

## Issues

Please, open an [issue](https://github.com/gabfiocchi/ngx-mercadopago/issues) following one of the issues templates. We will do our best to fix them.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/gabfiocchi/ngx-mercadopago/blob/master/LICENSE) for more information.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.
