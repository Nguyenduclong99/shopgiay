import { BaseComponent } from './../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent extends BaseComponent implements OnInit {
  list_item: any;
 adidas: any;
  balenciaga: any;
  moinhat: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(this._api.get('api/item/get-all'))
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          this.list_item = res[0];
          this.moinhat = res[0].sort(function(a,b){
            var c = new Date(a.date).getTime();
            var d = new Date(b.date).getTime();
            return c - d;
            }).slice(0, 8);
          this.adidas = res[0].filter((s) => s.catergory_id == '2BF5E39C-866E-40B3-B769-A6411AB02FF9').slice(0, 8);
          // this.adidas.Percent_discount == (this.adidas.unit_price/this.adidas.promotion_price)*10;
          // console.log("percent_discount:", this.adidas.Percent_discount);
          console.log(this.adidas);
           this.balenciaga = this.list_item.filter((s) => s.catergory_id == "E6337A22-630A-4618-90B6-C4C6A1728FBB").slice(0, 8);
          // setTimeout(() => {
          //   this.loadScripts();
          // });
        },
        (err) => {}
      );
  }
  addToCart(it) {
    this._cart.addToCart(it);
  }
}
