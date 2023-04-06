import { Employee as Emp } from 'src/app/controller/models/employee.model';

export type Employee = {
  id: string;
  prenom: string;
  nom: string;
  cin: string;
  email: string;
  age: string;
  salary: string;
};

export type Notification = {
  id: string | undefined;
  date: Date | undefined;
  message: string | undefined;
  severityLevel: NotificationSeverityLevel | undefined;
};

export enum NotificationSeverityLevel {
  info = 'info',
  warning = 'warning',
  danger = 'danger',
}

export interface UndeclaredEmployee extends Emp {
  checked: boolean;
  selected: boolean;
}

export interface InvoiceStats {
  month: number;
  year: number;
  sum: number;
}
