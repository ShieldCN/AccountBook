import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryItemPage } from '../category/category-item';

@Component({
    selector: 'page-category',
    templateUrl: 'category.html'
})
export class CategoryPage {
    list: any;
    constructor(public navCtrl: NavController) {
        // If we navigated to this page, we will have an item available as a nav param

        this.list = [
            {
                id:"1",
                name: "食品",
                options: ["蔬菜","水果","肉类","调料","零食","蔬菜","水果","肉类","调料","零食"]
            },
            {
                id:"2",
                name: "电器",
                options: ["电饭煲","电蚊香"]
            }
        ];

    }

    edit(item) {
        this.navCtrl.push(CategoryItemPage, {
            id: item.id
        });
    }
}