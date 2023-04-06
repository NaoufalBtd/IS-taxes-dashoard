export class Employee {
  public id: string = '';
  public prenom: string = '';
  public nom: string = '';
  public cin: string = '';
  public email: string = '';
  public age: string = '';
  public salaire: string = '';

  [key: string]: string | number | boolean | undefined;
}
