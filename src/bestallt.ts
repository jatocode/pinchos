import { Order } from './order';
import {HttpClient, json} from 'aurelia-fetch-client';

export class Bestallt {
  order;

  async attached() {
    this.order = await Order.hamtaSenasteOrder();
  }

}
