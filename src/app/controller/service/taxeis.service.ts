import { Injectable } from '@angular/core';
import {Taxeir} from "../model/taxeir.model";
import {Taxeis} from "../model/taxeis.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Societe} from "../model/societe.model";

@Injectable({
  providedIn: 'root'
})
export class TaxeisService {
  private _taxeis!: Taxeis;
  private _taxeiss!: Array<Taxeis>;
  private _url = "http://localhost:8036/api/v1/taxeIs/";
  constructor(private _http: HttpClient) { }
  public findAll():Observable<Array<Taxeis>>{
    return this._http.get<Array<Taxeis>>(this.url);
  }
  public  deleteBySocieteIce(ice: string): Observable<number>{
    return this._http.delete<number>(this.url+'ice/'+ice);
  }
  public  findByAnneeAndTrimestre(annee: number,trimestre: number): Observable<Taxeis>{
    return this._http.get<Taxeis>(this.url+this.url+'annee/'+annee +'trimestre/'+trimestre);
  }
  public  findBySocieteIce(ice: string): Observable<Taxeis>{
    return this._http.get<Taxeis>(this.url+'ice/'+ice);
  }
  public  deleteByAnneeAndTrimestreAndSocieteIce(annee: number,trimestre: number,ice: string): Observable<number>{
    return this._http.delete<number>(this.url+'annee/'+annee +'trimestre/'+trimestre+'ice/'+ice);
  }
  public  findByAnneeAndTrimestreAndSocieteIce(annee: number,trimestre: number,ice: string): Observable<Taxeis>{
    return this._http.delete<Taxeis>(this.url+'annee/'+annee +'trimestre/'+trimestre+'ice/'+ice);
  }

  get taxeis(): Taxeis {
    if (this._taxeis==null){
      this._taxeis = new Taxeis();
    }
    return this._taxeis;
  }

  set taxeis(value: Taxeis) {
    this._taxeis = value;
  }

  get taxeiss(): Array<Taxeis> {
    if (this._taxeiss==null){
      this._taxeiss=new Array<Taxeis>();
    }
    return this._taxeiss;
  }

  set taxeiss(value: Array<Taxeis>) {
    this._taxeiss = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
