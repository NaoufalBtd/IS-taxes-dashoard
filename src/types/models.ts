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
