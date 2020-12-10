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
          this.adidas = res[0].filter((s) => s.catergory_id == 'ACA02F36-D58A-4779-ACC4-B6E8362385D3').slice(0, 10);
          console.log(this.adidas);
           this.balenciaga = this.list_item.filter((s) => s.catergory_id == "987267D4-8B98-4141-B403-9910939CFDE9").slice(0, 10);
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
