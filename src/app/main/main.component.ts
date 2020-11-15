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
            }).slice(0, 10);

          console.log(this.list_item);
          this.adidas = res[0].filter((s) => s.catergory_id == 'A1B75AA1-6EEF-4ED4-8CB8-866255F5F8B1').slice(0, 10);
          console.log(this.adidas);
           this.balenciaga = this.list_item.filter((s) => s.catergory_id == "592E87A8-A38B-47DE-AAE0-506425FCA8AB").slice(0, 10);
           console.log(this.balenciaga);
          // setTimeout(() => {
          //   this.loadScripts();
          // });
          console.log(this.balenciaga);
        },
        (err) => {}
      );
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
