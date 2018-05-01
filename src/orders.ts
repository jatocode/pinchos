import { Order } from './order';
import { Enhet } from "./enhet";
import {HttpClient, json} from 'aurelia-fetch-client';

export class Orders {
  orders;

  async attached() {
    this.orders = await Order.hamtaOrder();
  }
}
