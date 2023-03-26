import {Societe} from "./societe.model";

export class Employe {
  public id: string | undefined;
  public nom: string | undefined;
  public prenom: string | undefined;
  public cin: string | undefined;
  public salaire: string | undefined;

  public societe: Societe | undefined;
}
