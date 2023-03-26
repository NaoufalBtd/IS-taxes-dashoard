import {Employe} from "./employe.model";
import {Taxeir} from "./taxeir.model";
import {Tauxir} from "./tauxir.model";

export class Taxeiremploye {
  public id: number| undefined;
  public salaireNet: number| undefined;
  public salaireBrute: number| undefined;
  public montantIR: number| undefined;
  public employe: Employe| undefined;
  public taxeir: Taxeir| undefined;
  public tauxir: Tauxir| undefined;

}
