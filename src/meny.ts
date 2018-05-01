import { Order } from './order';
import { Enhet } from "./enhet";
import {HttpClient, json} from 'aurelia-fetch-client';

export class Meny {
  message = 'TYRAS PINCHOSKALAS!';
  namn = "";
  order;

  drycker = ["Mjölk", "Vatten"];
  matratter = ["Chips", "Pizza", "Kycklingspett", "Enchiladas"];

  dryckenheter = this.drycker.map(x => new Enhet(x));
  matenheter = this.matratter.map(x => new Enhet(x));

  public oka(en:Enhet) {
    en.antal < 5? en.antal++: en.antal=5;
  }

  public minska(en:Enhet) {
    en.antal == 0? en.antal = 0: en.antal--;
  }

  public async bestall() {
    this.order = {"namn": this.namn,
                 "dryck": this.dryckenheter.filter(x => x.antal > 0),
                 "mat": this.matenheter.filter(x => x.antal > 0) 
                };
                
    await Order.bestall(this.order);
    
    this.namn = "";
    this.dryckenheter = this.drycker.map(x => new Enhet(x));
    this.matenheter = this.matratter.map(x => new Enhet(x));

    return true;
  }

}
