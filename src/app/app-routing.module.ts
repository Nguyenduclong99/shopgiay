import { NgModule } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { DetailComponent } from './product/detail/detail.component';
import {ItemListComponent } from './product/item-list/item-list.component'
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'myacc',
    component:MyaccountComponent
  },
  {
path:'item-list/:id',
component:ItemListComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
