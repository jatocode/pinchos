import { Enhet } from "./enhet";
import {HttpClient, json} from 'aurelia-fetch-client';

const SERVERURL = 'http://localhost:8090/orders';

export class Order {

  static async hamtaOrder() {
    return new Promise((resolve, reject) => {
      let client = new HttpClient();
      client.fetch(SERVERURL)
        .then(response => response.json())
        .then(data => {
          resolve(data);
      })
    });
  }

  static async hamtaSenasteOrder() {
    return new Promise((resolve, reject) => {
      let client = new HttpClient();
      client.fetch(SERVERURL)
        .then(response => response.json())
        .then(data => {
          resolve(data[data.length -1]);
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
