import {Tauxir} from "./tauxir.model";
import {Societe} from "./societe.model";
import {Taxeiremploye} from "./taxeiremploye.model";

export class Taxeir {
  public id: number| undefined;
  public mois: number| undefined;
  public annee: number| undefined;
  public salaireNet: number| undefined;
  public salaireBrute: number| undefined;
  public montantIR: number| undefined;
  public dateDeclaration: Date| undefined;

  public tauxir: Tauxir| undefined ;
  public societe: Societe | undefined;

  private taxeIREmployes: Array<Taxeiremploye> | undefined ;


}
