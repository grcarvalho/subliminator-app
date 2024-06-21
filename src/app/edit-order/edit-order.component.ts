// src/app/edit-order/edit-order.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService, Order } from '../order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent implements OnInit {
  order: Order | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = +this.route.snapshot.paramMap.get('id')!;
    this.loadOrder(orderId);
  }

  async loadOrder(id: number): Promise<void> {
    try {
      this.order = await this.orderService.getOrder(id);
    } catch (err) {
      //this.errorMessage = `Error: ${err.message}`;
      console.error(err);
    }
  }

  async saveOrder(): Promise<void> {
    if (!this.order) {
      return;
    }

    try {
      await this.orderService.updateOrder(this.order);
      this.router.navigate(['/']);
    } catch (err) {
      //this.errorMessage = `Error: ${err.message}`;
      console.error(err);
    }
  }
}
