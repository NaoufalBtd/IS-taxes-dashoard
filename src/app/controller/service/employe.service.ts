import { Injectable } from '@angular/core';
import {Employe} from "../model/employe.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private _employe!: Employe;
  private _employes!: Array<Employe>;
  private _url = "http://localhost:8036/api/v1/employe/";


  constructor(private _http:HttpClient) { }
  public findAll():Observable<Array<Employe>>{
    return this._http.get<Array<Employe>>(this.url);
  }
  public save(employe: Employe):Observable<Employe>{
    return this._http.post<Employe>(this.url , employe);
  }
  public  deleteByCin(cin: string): Observable<number>{
    return this._http.delete<number>(this.url+'cin/'+cin);
  }
  public  findByCin(cin: string): Observable<Employe>{
    return this._http.get<Employe>(this.url+'cin/'+cin);
  }
  public  findBySocieteIce(ice: string): Observable<Employe>{
    return this._http.get<Employe>(this.url+'societe/ice/'+ice);
  }
  public  findBySalaire(salaire: number): Observable<Employe>{
    return this._http.get<Employe>(this.url+'salaire/'+salaire);
  }
  get employe(): Employe {
    if (this._employe == null){
      this._employe = new Employe();
    }
    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }

  get employes(): Array<Employe> {
    if (this._employes == null){
      this._employes = new Array<Employe>();
    }
    return this._employes;
  }

  set employes(value: Array<Employe>) {
    this._employes = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
