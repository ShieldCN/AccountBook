import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Response, Http } from "@angular/http";
import { APP_SERVE_URL } from "../../providers/Constants";
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    list: any;
    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http) {
        //this.presentToast()
        this.list = [
            {
                name: "茄子",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            },
            {
                name: "辣椒",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            },
            {
                name: "白菜",
                category: "蔬菜",
                price: 1.5,
                date: "2017-07-07 10:14:12"
            },
            {
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

}
