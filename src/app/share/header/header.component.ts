import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  total_item: any;
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
   this.loadPage();
  }
  loadPage() {
    this._cart.items.subscribe((res) => {
      this.total_item = res ? res.length : 0;
    });
  }
}
