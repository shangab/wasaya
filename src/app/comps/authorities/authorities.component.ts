import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-authorities',
  templateUrl: './authorities.component.html',
  styleUrls: ['./authorities.component.css']
})
export class AuthoritiesComponent implements OnInit {

  public countryname: string = '';
  public cityname: string = 'kasala';
  public items: any[] = [];
  constructor(private _hs: HttpService, private _ss: ShareService) { }

  ngOnInit() {
  }

  search() {
    this._ss.setAppIsBusy(true);
    this._hs.get('authorities', 'filter[]=country,cs,' + this.countryname + '&filter[]=city,cs,' + this.cityname + '&satisfy=all')
      .subscribe(res => {
        this._ss.setAppIsBusy(true);
        this.items = res.json().authorities;
      });
  }
}
