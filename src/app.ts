import { Enhet } from "./enhet";
import {HttpClient, json} from 'aurelia-fetch-client';

export class App {
  message = 'Tyras Pinchos!';
  namn = "";
  orders = [];
  
  drycker = ["Saft", "Coca cola", "Fanta"];
  matratter = ["Chips", "Pizza", "Kycklingspett", "Enchiladas"];

  dryckenheter = this.drycker.map(x => new Enhet(x));
  matenheter = this.matratter.map(x => new Enhet(x));

  constructor() {
    this.bestallningar();
  }

  public oka(en:Enhet) {
    en.antal++;
  }

  public minska(en:Enhet) {
    en.antal == 0? en.antal = 0: en.antal--;
  }

  public bestall() {
    let order = {"namn": this.namn,
                 "dryck": this.dryckenheter.filter(x => x.antal > 0),
                 "mat": this.matenheter.filter(x => x.antal > 0) 
                };

    let client = new HttpClient();
    client.fetch('http://localhost:8090/orders', {
      method: 'post',
      body: json(order)
    })
    .then(response => response.json())
    .then(data => {
      this.orders = data;
      this.namn = "";
      this.dryckenheter = this.drycker.map(x => new Enhet(x));
      this.matenheter = this.matratter.map(x => new Enhet(x));
    })
    .catch(error => console.log(error));

  }

  public bestallningar() {
    let client = new HttpClient();
    client.fetch('http://localhost:8090/orders')
    .then(response => response.json())
    .then(data => {
      this.orders = data;
    });
  }

}
