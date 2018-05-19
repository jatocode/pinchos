import { Enhet } from "./enhet";
import {HttpClient, json} from 'aurelia-fetch-client';

const SERVERURL = 'http://192.168.0.15:8090/orders';
//const SERVERURL = 'http://pinchosbe.helentobias.se/orders';

export class Order {

  static async hamtaOrder() {
    return new Promise((resolve, reject) => {
      let client = new HttpClient();
      client.fetch(SERVERURL)
        .then(response => response.json())
        .then(data => {
          resolve(data.reverse());
      })
    });
  }

  static async bestall(order) {
    return new Promise((resolve, reject) => {
      let client = new HttpClient();
      client.fetch(SERVERURL, {
        method: 'post',
        body: json(order)
      })
      .then(response => response.json())
      .then(data => {
        resolve(true);
      })
      .catch(error => reject(error));
    });  
  }

}
