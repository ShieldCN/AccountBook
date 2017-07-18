import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-item',
	templateUrl: 'item.html'
})
export class ItemPage {
	id: any;
	itemData:any;
	title:any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		let nowDate=new Date();
		this.itemData={
			name:"",
			category:1,
			sCategory:1,
			price:"",
			date:nowDate.toISOString()
		}
		this.id = navParams.get('id');
		if(this.id){
			this.title="编辑";
		}else{
			this.title="添加";
		}
	}
	save(){
		
	}
}
