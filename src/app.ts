import { Enhet } from "./enhet";
export class App {
  message = 'Tyras Pinchos!';

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
}
