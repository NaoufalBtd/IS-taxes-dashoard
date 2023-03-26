import {Societe} from "./societe.model";
import {Tauxis} from "./tauxis.model";

export class Taxeis {
  public id: number| undefined;
  public annee: number| undefined;
  public trimestre: number| undefined;
  public ChiffreAffaire: number| undefined;
  public charge: number| undefined;
  public resultatAvantImpot: number| undefined;
  public resultatApresImpot: number| undefined;
  public montantIs: number| undefined;
  public societe: Societe| undefined;
  public Tauxis: Tauxis| undefined;



}
