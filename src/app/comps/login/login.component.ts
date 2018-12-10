import { Component, OnInit, Input } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { HttpService } from '../../services/http.service';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any = {id:0};
  constructor(private _ss: ShareService, private _hs: HttpService, private _router: Router, private _ut: UtilsService) { }
  ngOnInit() {
  }
  fastLogin(user) {
    this._ss.setUser(user);
    this._router.navigateByUrl('/');
  }
  login() {
    this.authlogin();
    this.normallogin();
  }

  normallogin() {
    this._ss.setAppIsBusy(true);
    this._hs.get('users', 'filter[]=locked,eq,0&filter[]=username,eq,' + this.user.username + '&filter[]=pwd,eq,' + this.user.pwd + '&satisfy=all')
      .subscribe(res => {
        if (res.json().users.length != 0) {
          this._ss.setAppIsBusy(false);
          var auser = res.json().users[0]
          this._ss.setUser(auser);
          this._router.navigateByUrl('/');

        } else {
          this._ss.setAppIsBusy(false);
          this._ss.setSnackBar("معلومات الدخول غير صحصحه ربما خطأ في كلمه السر أو اسم المستخدم. أو ربما تم منعك من قبل مدير النظام")
        }
      });
  }
  authlogin() {
    this._ss.setAppIsBusy(true);
    this._hs.post('', { username: 'admin', password: 'admin' })
      .subscribe(res => {
        console.log('login res: ', res.text());
        if (res.text().length != 0) {
          this._ss.setAppIsBusy(false);
          var auser = null;
          this._ss.setUser(auser);
          this._router.navigateByUrl('/');
        } else {
          this._ss.setAppIsBusy(false);
          this._ss.setSnackBar("معلومات الدخول غير صحصحه ربما خطأ في كلمه السر أو اسم المستخدم. أو ربما تم منعك من قبل مدير النظام")
        }
      });
  }
}