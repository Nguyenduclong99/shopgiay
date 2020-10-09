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
import { ListItemComponent } from './product/list-item/list-item.component';
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
path:'listitem',
component:ListItemComponent
  },
  {
    path:'detail',
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
