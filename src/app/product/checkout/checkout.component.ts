import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  items: any;
  total: any;
  public hoadonForm: FormGroup;

  ngOnInit(): void {
    this.hoadonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      note: new FormControl(''),
    });
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for (let x of this.items) {
        x.id_product = this.items.id_product;
        x.quantity_sale = +x.quantity_sale;
        x.money = x.quantity_sale * x.unit_price;
        this.total += x.quantity_sale * x.unit_price;


        console.log(x.id_product);
      }
    });
  }
  onSubmit(value: any) {
    let hoadon = {
      name: value.name,
      address: value.address,
      email: value.email,
      phone: value.phone,
      note: value.note,
      total: this.total,
      listjson_chitiet: this.items,
    };
    this._api
      .post('api/hoadon/create-hoa-don', hoadon)
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          alert('Đặt hàng thành công!');
        },
        (err) => {}
      );
  }
}
