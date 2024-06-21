// src/app/orders/orders.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService, Order } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  pagination: any;
  errorMessage: string | null = null;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  async loadOrders(page: number = 1): Promise<void> {
    try {
      const data = await this.orderService.getOrders(page);
      this.orders = data.orders;
      this.pagination = data.pagination;
    } catch (err) {
      //this.errorMessage = `Error: ${err.message}`;
      console.error(err);
    }
  }

  changePage(page: number): void {
    this.loadOrders(page);
  }

  editOrder(orderId: number): void {
    this.router.navigate(['/edit', orderId]);
  }
}
