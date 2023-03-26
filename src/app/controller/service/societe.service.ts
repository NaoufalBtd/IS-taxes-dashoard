import { Injectable } from '@angular/core';
import {Employe} from "../model/employe.model";
import {Societe} from "../model/societe.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private _societe!: Societe;
  private _societes!: Array<Societe>;
  private _url = "http://localhost:8036/api/v1/societe/";
  constructor(private _http:HttpClient) { }


  get societe(): Societe {
    if (this._societe==null){
      this._societe = new Societe();
    }
    return this._societe;
  }

  set societe(value: Societe) {
    this._societe = value;
  }

  get societes(): Array<Societe> {
    if (this._societes == null){
      this._societes = new Array<Societe>();
    }
    return this._societes;
  }

  set societes(value: Array<Societe>) {
    this._societes = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
