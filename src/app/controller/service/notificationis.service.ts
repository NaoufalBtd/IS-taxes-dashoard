import { Injectable } from '@angular/core';
import {Employe} from "../model/employe.model";
import {Notificationis} from "../model/notificationis.model";
import {HttpClient} from "@angular/common/http";
//il manque encore les methodes
@Injectable({
  providedIn: 'root'
})
export class NotificationisService {
  private _notificationis!: Notificationis;
  private _notificationsis!: Array<Notificationis>;
  private _url = "http://localhost:8036/api/v1/notificationIs/";
  constructor(private _http:HttpClient) { }

  get notificationis(): Notificationis {
    if (this._notificationis==null){
      this._notificationis =new Notificationis();
    }
    return this._notificationis;
  }

  set notificationis(value: Notificationis) {
    this._notificationis = value;
  }

  get notificationsis(): Array<Notificationis> {
    if (this._notificationis==null){
      this._notificationsis = new Array<Notificationis>();
    }
    return this._notificationsis;
  }

  set notificationsis(value: Array<Notificationis>) {
    this._notificationsis = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
