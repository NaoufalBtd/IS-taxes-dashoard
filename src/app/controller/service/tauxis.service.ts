import { Injectable } from '@angular/core';
import {Tauxir} from "../model/tauxir.model";
import {Tauxis} from "../model/tauxis.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TauxisService {
  private _tauxis!: Tauxis;
  private _tauxiss!: Array<Tauxis>;
  private _url = "http://localhost:8036/api/v1/tauxIs/";

  constructor(private _http: HttpClient) { }

  get tauxis(): Tauxis {
    if (this._tauxis==null){
      this.tauxis=new Tauxis();
    }
    return this._tauxis;
  }

  set tauxis(value: Tauxis) {
    this._tauxis = value;
  }

  get tauxiss(): Array<Tauxis> {
    if (this._tauxiss==null){
      this._tauxiss = new Array<Tauxis>();
    }
    return this._tauxiss;
  }

  set tauxiss(value: Array<Tauxis>) {
    this._tauxiss = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
