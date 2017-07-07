import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-category-item',
    templateUrl: 'category-item.html'
})
export class CategoryItemPage {
    id: any; itemData: any; isAdd: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.id = navParams.get('id');
        this.itemData = {};
        if (this.id) {
            // 编辑
            this.isAdd = false;
            this.getItem(this.id);
        } else {
            this.isAdd = true;
        }
    }
    getItem(id) {
        this.itemData = {
            name: "食品",
            options: [
                {
                    id: 1,
                    name: "蔬菜"
                },
                {
                    id: 2,
                    name: "水果"
                },
                {
                    id: 3,
                    name: "肉食"
                },
                {
                    id: 4,
                    name: "面食"
                }
            ]
        };
    }
    openModal(name) {
        let prompt = this.alertCtrl.create({
            title: '修改',
            inputs: [
                {
                    name: 'name',
                    placeholder: '类别名称',
                    value:name
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: data => {
                    }
                },
                {
                    text: '保存',
                    handler: data => {
                        console.log(data)
                        this.saveCategoryName(data.name);
                    }
                }
            ]
        });
        prompt.present();
    }
    saveCategoryName(name){
        this.itemData.name=name;
    }
}