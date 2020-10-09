import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import {Router} from '@angular/router';
import { MainComponent } from './main/main.component';
import { ShareComponent } from './share/share.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './product/cart/cart.component';
import { DetailComponent } from './product/detail/detail.component';
import { ListItemComponent } from './product/list-item/list-item.component';
import { SearchComponent } from './search/search.component';
import { ModalComponent } from './share/modal/modal.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AboutComponent } from './about/about.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    MainComponent,

    ShareComponent,

    ProductComponent,

    CartComponent,

    DetailComponent,

    ListItemComponent,

    SearchComponent,

    ModalComponent,

    LoginComponent,

    CheckoutComponent,

    MyaccountComponent,

    AboutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
