import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';

const routes: Routes = [
  { path: '',component: ShopComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'productDetail', component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
