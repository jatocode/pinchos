import { RouterConfiguration, Router } from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Tyra Pinchos!';
    config.map([
      { route: ['', 'home'], name: 'home',   
        moduleId: PLATFORM.moduleName('meny') },
      { route: 'orders',     name: 'orders', 
        moduleId: PLATFORM.moduleName('orders'), nav: true, title: 'Orders' },
      { route: 'bestallt',   name: 'bestallt', 
        moduleId: PLATFORM.moduleName('bestallt') },
    ]);
  }
}
