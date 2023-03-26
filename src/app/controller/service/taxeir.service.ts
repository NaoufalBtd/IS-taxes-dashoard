import { Injectable } from '@angular/core';
import {Tauxis} from "../model/tauxis.model";
import {Taxeir} from "../model/taxeir.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaxeirService {
  private _taxeir!: Taxeir;
  private _taxeirs!: Array<Taxeir>;
  private _url = "http://localhost:8036/api/v1/taxeIr/";
  constructor(private _http: HttpClient) { }

  get taxeir(): Taxeir {
    if (this._taxeir==null){
      this._taxeir = new Taxeir();
    }
    return this._taxeir;
  }

  set taxeir(value: Taxeir) {
    this._taxeir = value;
  }

  get taxeirs(): Array<Taxeir> {
    if (this._taxeirs==null){
      this._taxeirs = new Array<Taxeir>();
    }
    return this._taxeirs;
  }

  set taxeirs(value: Array<Taxeir>) {
    this._taxeirs = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
