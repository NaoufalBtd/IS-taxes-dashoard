import { Injectable } from '@angular/core';
import { Notification, NotificationSeverityLevel } from 'src/types/models';

@Injectable({
  providedIn: 'root',
})
export class NotificationIsService {
  private _notifications: Notification[] = [
    {
      id: '1',
      date: new Date(),
      message: 'tax of 2 trimester 2023 is available for payment.',
      severityLevel: NotificationSeverityLevel.info,
    },
    {
      id: '2',
      date: new Date(),
      message: "Tax of 1 trimester 2023 didn't payed yet.",
      severityLevel: NotificationSeverityLevel.warning,
    },
    {
      id: '3',
      date: new Date(),
      message:
        'tax of trimester 4 2022 will get increased by 10% if not paid before 31/12/2022.',
      severityLevel: NotificationSeverityLevel.danger,
    },
  ];

  constructor() {}

  get notificationsIs(): Notification[] {
    return this._notifications;
  }
}
