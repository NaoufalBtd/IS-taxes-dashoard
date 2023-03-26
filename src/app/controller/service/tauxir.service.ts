import { Injectable } from '@angular/core';
import {Notificationis} from "../model/notificationis.model";
import {Tauxir} from "../model/tauxir.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TauxirService {
  private _tauxir!: Tauxir;
  private _tauxirs!: Array<Tauxir>;
  private _url = "http://localhost:8036/api/v1/tauxIr/";

  constructor(private _http: HttpClient) {
  }


  get tauxir(): Tauxir {
    if (this._tauxir==null){
      this._tauxir=new Tauxir();
    }
    return this._tauxir;
  }

  set tauxir(value: Tauxir) {
    this._tauxir = value;
  }

  get tauxirs(): Array<Tauxir> {
    if (this._tauxirs==null){
      this._tauxirs = new Array<Tauxir>();
    }
    return this._tauxirs;
  }

  set tauxirs(value: Array<Tauxir>) {
    this._tauxirs = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
