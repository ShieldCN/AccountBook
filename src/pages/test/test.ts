import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestItemPage } from '../test-item/test-item';

@Component({    
    selector: 'page-test',
    templateUrl: 'test.html'
})
export class TestPage {    selectedItem: any;    icons: string[];    items: Array<{title: string, note: string, icon: string}>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

        this.items = [];        
        for(let i = 1; i < 11; i++) {
            this.items.push({
            title: 'Item ' + i,
            note: 'This is item #' + i,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
    }
 }

    itemTapped(event, item) {
        this.navCtrl.push(TestItemPage, {
            item: item
        });
    }
}