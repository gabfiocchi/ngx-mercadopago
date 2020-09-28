# @ngx-mercadopago

The Angular wrapper for Mercado Pago SDK for JavaScript.

[MercadoPago Docs](https://www.mercadopago.com.ar/developers/es/guides/sdks/official/js)

## 💡 Requirements

Angular 6 or higher.

## 📲 Installation 

First time using Mercado Pago? Create your [Mercado Pago account](https://www.mercadopago.com), if you don’t have one already.

First you need to install the npm module:

```sh
npm install @ngx-mercadopago --save
```

Copy the public key in the [credentials](https://www.mercadopago.com.ar/developers/panel/credentials) section of the page.



## Usage

#### 1. Import the `NgxMercadoPago`:

Finally, you can use @ngx-mercadopago in your Angular project. You have to import `NgxMercadoPago.forRoot()` in the root NgModule of your application.

The [`forRoot`](https://angular.io/api/router/RouterModule#forroot) static method is a convention that provides and configures services at the same time.
Make sure you only call this method in the root module of your application, most of the time called `AppModule`.
This method allows you to configure the `NgxMercadoPago` by specifying a publish key and/or a path for JS SDK.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMercadoPago } from '@ngx-mercadopago';

@NgModule({
    imports: [
        BrowserModule,
        NgxMercadoPago.forRoot({
            publishKey: 'Your Publish Key',
            pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```



## Issues

Please, open an [issue](https://github.com/gabfiocchi/ngx-mercadopago/issues) following one of the issues templates. We will do our best to fix them.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/gabfiocchi/ngx-mercadopago/blob/master/LICENSE) for more information.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.
