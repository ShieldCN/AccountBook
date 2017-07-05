import {Injectable} from '@angular/core';
import {HttpService} from "../../providers/HttpService";
import {Response,Http} from "@angular/http";
// import {Observable} from "rxjs";
// import {UserInfo} from "../../model/UserInfo";

@Injectable()
export class LoginService {
  constructor(public http: Http,private httpService: HttpService) {
  }

  getJson() {
    return this.httpService.get('./assets/data/test.json').map((res: Response) => res.json());
  }
  login(user) {
    // return this.httpService.get('http://localhost:2436/category', user).map((res: Response) =>  res.json());
    return this.http.get('http://localhost:2436/category', user).map((res: Response) =>  res.json());
    // let userInfo = {
    //   id: 1,
    //   username: user.username,
    //   name: '小军',
    //   email: 'yanxiaojun617@163.com',
    //   phone: '18688498342',
    //   avatarId: '',
    //   description: '有图有真相，一本正经的胡说八道..'
    // };
    // return Observable.create((observer) => {
    //   observer.next(userInfo);
    // });
  }

}
