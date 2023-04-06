import { Component, OnInit } from '@angular/core';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faInfo,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { NotificationIsService } from 'src/app/controller/services/notification-is.service';
import {
  Notification,
  NotificationSeverityLevel,
} from 'src/app/shared/types/models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  icons = {
    [NotificationSeverityLevel.info]: { icon: faInfo, color: 'text-info' },
    [NotificationSeverityLevel.warning]: {
      icon: faExclamationCircle,
      color: 'text-warning',
    },
    [NotificationSeverityLevel.danger]: {
      icon: faExclamationTriangle,
      color: 'text-danger',
    },
    default: { icon: faQuestionCircle, color: 'text-muted' },
  };
  private _notifications: Notification[] = [];
  constructor(private notificationIsService: NotificationIsService) {}

  ngOnInit(): void {
    this._notifications = this.notificationIsService.notificationsIs;
  }

  getIconForSeverity(severityLevel: NotificationSeverityLevel | undefined) {
    if (!severityLevel) {
      return this.icons.default.icon;
    }
    const icon = this.icons[severityLevel]?.icon ?? this.icons.default.icon;
    return icon;
  }

  getIconColorForSeverity(
    severityLevel: NotificationSeverityLevel | undefined
  ) {
    if (!severityLevel) {
      return this.icons.default.color;
    }
    const color = this.icons[severityLevel]?.color ?? this.icons.default.color;
    return color;
  }
  get notifications(): Notification[] {
    return this._notifications;
  }
}
