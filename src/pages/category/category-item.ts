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
                    value: name
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
                        this.saveCategoryName(data.name);
                    }
                }
            ]
        });
        prompt.present();
    }
    openOptionModal(item) {
        let prompt = this.alertCtrl.create({
            title: '修改',
            inputs: [
                {
                    name: 'name',
                    placeholder: '小类别名称',
                    value: item.name
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
                        this.saveSmallCategoryName(item.id, data.name);
                    }
                }
            ]
        });
        prompt.present();
    }
    saveCategoryName(name) {
        this.itemData.name = name;
    }
    saveSmallCategoryName(id, name) {
        var idx = this.itemData.options.findIndex(item => {
            return item.id == id;
        });
        this.itemData.options[idx].name = name;
    }
    openConfirm(item) {
        let confirm = this.alertCtrl.create({
            title: '删除?',
            message: `确定删除【${item.name}】?`,
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        console.log('delete');
                    }
                }
            ]
        });
        confirm.present();
    }
}