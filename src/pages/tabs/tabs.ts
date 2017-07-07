import {Component, ViewChild} from '@angular/core';

import {HomePage} from '../home/home';
import {Tabs} from "ionic-angular";
import {ItemPage} from "../item/item";
import {CategoryPage} from "../category/category";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  itemRoot: any = ItemPage;
  homeRoot: any = HomePage;
  categoryRoot: any = CategoryPage;

  constructor() {

  }
}
