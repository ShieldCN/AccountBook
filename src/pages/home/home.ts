import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
// import { Response, Http } from "@angular/http";
import { Http } from "@angular/http";
// import { APP_SERVE_URL } from "../../providers/Constants";
import { ItemPage } from "../item/item";
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    list: any;
    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http,public alertCtrl: AlertController) {
        //this.presentToast()
        this.list = [
            {
                id:1,
                name: "茄子",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            },
            {
                id:2,
                name: "辣椒",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            },
            {
                id:3,
                name: "白菜",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            },
            {
                id:4,
                name: "土豆",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            }
        ]; 
        // this.http.get(`${APP_SERVE_URL}category`,{}).map((res: Response) => res.json()).subscribe((res) => {
        //     if(res.state==0){
        //         this.list=res.data;
        //     }
        //     //this.storage.set('UserInfo', userInfo);
        //     // this.navCtrl.setRoot(TabsPage);
        // });
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000
        });
        toast.present();
    }
    remove(item){
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
    edit(item){
        this.navCtrl.push(ItemPage, {
            id: item.id
        });
    }
}
