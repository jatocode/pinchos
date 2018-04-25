import { Enhet } from "./enhet";
export class App {
  message = 'Tyras Pinchos!';
  namn = "";
  orders = [];

  drycker = ["Mjölk", "Vatten", "Saft", "Coca cola", "Sprite"];
  matratter = ["Pizza", "Minihamburgare","Köttbullar", "Kycklingspett", "Risotto", "Soppa", "Enchiladas", "Nachos"];

  dryckenheter = this.drycker.map(x => new Enhet(x));
  matenheter = this.matratter.map(x => new Enhet(x));

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
    this.orders.push(order);

    //this.dryckenheter.forEach(x => x.antal = 0);
    //this.matenheter.forEach(x => x.antal = 0);
    this.namn = "";
  }

}
