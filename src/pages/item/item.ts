import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-item',
	templateUrl: 'item.html'
})
export class ItemPage {
	selectedItem: any;
	itemData:any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param
		let nowDate=new Date();
		this.itemData={
			name:"",
			category:1,
			price:"",
			date:nowDate.toISOString()
		}
		this.selectedItem = navParams.get('item');
	}
	save(){
		
	}
}
