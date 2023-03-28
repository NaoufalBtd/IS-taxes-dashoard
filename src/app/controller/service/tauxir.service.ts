import { Injectable } from '@angular/core';
import {Tauxir} from "../model/tauxir.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TauxirService {
  private _tauxir!: Tauxir;
  private _tauxirs!: Array<Tauxir>;
  private _url = "http://localhost:8036/api/v1/tauxIr/";

  constructor(private _http: HttpClient) {
  }

  public findAll():Observable<Array<Tauxir>>{
    return this._http.get<Array<Tauxir>>(this.url);
  }
  public  findBySalaireMaxAndSalaireMin(salaireNet: number): Observable<Tauxir>{
    return this._http.get<Tauxir>(this.url+'salaireNet/'+salaireNet);
  }
  public  saveTauxTaxeIR(tauxtaxeIR: Tauxir): Observable<number>{
    return this._http.post<number>(this.url, tauxtaxeIR);
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
