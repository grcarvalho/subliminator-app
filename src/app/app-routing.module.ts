import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'edit/:id', component: EditOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
