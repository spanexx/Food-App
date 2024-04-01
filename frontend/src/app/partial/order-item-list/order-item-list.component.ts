import { Component, Input } from '@angular/core';
import { Order } from '../../shared/Models/Order';

@Component({
  selector: 'order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.css'
})
export class OrderItemListComponent {
  @Input()
  order!:Order;
  constructor() { }

  ngOnInit(): void {
  }
}
