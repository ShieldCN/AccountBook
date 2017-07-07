import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Response, Http } from "@angular/http";
import {TabsPage} from "../tabs/tabs";

import {APP_SERVE_URL} from "../../providers/Constants";
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    loginForm: any;

    constructor(
        public http: Http,
        private storage: Storage,
        public navCtrl: NavController
    ) {
        this.loginForm = {
            username: 'admin',
            password: '1'
        };
    }
    login(user) {
        console.log(user)
        //this.http.get(`${APP_SERVE_URL}category`, user).map((res: Response) => res.json()).subscribe((res) => {
        //    console.log(res)
            //this.storage.set('UserInfo', userInfo);
            this.navCtrl.setRoot(TabsPage);
        //});
    }



}
