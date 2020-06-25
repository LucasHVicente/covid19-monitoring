import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabs = [
    {
      name: 'Estados',
      route: 'tab1',
      icon: 'map-outline'
    },
    {
      name: 'Países',
      route: 'tab2',
      icon: 'earth-outline'
    },
    {
      name: 'Recomendações',
      route: 'tab3',
      icon: 'fitness-outline'
    }
  ]

  constructor() {}
}
