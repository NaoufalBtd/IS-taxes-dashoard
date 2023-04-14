import { Invoice } from './invoice.model';

export class IsTax {
  id = 0;
  annee = 0;
  trimestre = 0;
  charge = 0;
  resultatAvantImpot = 0.0;
  resultatApresImpot = 0.0;
  tauxTaxeIS = null;
  chiffreAffaire = 0.0;
  datePaiement = null;
  dateEcheance = null;
  public factureGagnes: Invoice[] = [];
  public facturePerdus: Invoice[] = [];
}
