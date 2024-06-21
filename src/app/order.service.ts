// src/app/order.service.ts
import { Injectable } from '@angular/core';

export interface Order {
  id: number;
  date: string;
  customer: string;
  address1: string;
  city: string;
  postcode: string;
  country: string;
  amount: number;
  status: string;
  deleted: string;
  last_modified: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8000/api/orders'; // URL da API

  constructor() {}

  async getOrders(page: number = 1): Promise<{ orders: Order[], pagination: any }> {
    const response = await fetch(`${this.apiUrl}?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getOrder(id: number): Promise<Order> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async updateOrder(order: Order): Promise<Order> {
    const response = await fetch(`${this.apiUrl}/${order.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}