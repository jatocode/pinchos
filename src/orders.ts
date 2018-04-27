import { Enhet } from "./enhet";
import {HttpClient, json} from 'aurelia-fetch-client';

export class Orders {
  orders = [];

  attached() {
    let client = new HttpClient();
    client.fetch('http://localhost:8090/orders')
    .then(response => response.json())
    .then(data => {
      this.orders = data;
    });
  }
}
