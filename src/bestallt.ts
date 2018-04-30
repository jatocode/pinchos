import {HttpClient, json} from 'aurelia-fetch-client';

export class Bestallt {
  order;

  attached() {
    this.hamtaOrder();
  }

  hamtaOrder() {
    let client = new HttpClient();
    client.fetch('http://tobias.local:8090/orders')
    .then(response => response.json())
    .then(data => {
      this.order = data[data.length -1];
    });
  }
}
