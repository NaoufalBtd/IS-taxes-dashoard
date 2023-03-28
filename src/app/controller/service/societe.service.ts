import { Injectable } from '@angular/core';
import {Societe} from "../model/societe.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private _societe!: Societe;
  private _societes!: Array<Societe>;
  private _url = "http://localhost:8036/api/v1/societe/";
  constructor(private _http:HttpClient) { }
  public findAll():Observable<Array<Societe>>{
    return this._http.get<Array<Societe>>(this.url);
  }
  public  deleteByIce(ice: string): Observable<number>{
    return this._http.delete<number>(this.url+'ice/'+ice);
  }
  public  findByIce(ice: string): Observable<Societe>{
    return this._http.get<Societe>(this.url+'ice/'+ice);
  }
  public findByLibelle(libelle: string):Observable<Array<Societe>>{
    return this._http.get<Array<Societe>>(this.url+'libelle/'+libelle);
  }

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
