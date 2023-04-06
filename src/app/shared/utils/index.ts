// get totalIncome from array of invoices for specific month

import * as moment from 'moment';
import {
  InvoiceStats,
  NotificationSeverityLevel,
} from 'src/app/shared/types/models';
import { Invoice } from '../../controller/models/invoice.model';
import { NotificationIs } from '../../controller/models/notifications.model';

export const getTotalFromInvoices = (invoices: Invoice[], date: Date) => {
  let total = 0;
  invoices.forEach((invoice) => {
    if (moment(invoice.dateFacture).isSame(date, 'month')) {
      total += invoice.montantTTC!;
    }
  });
  return total;
};

//get array of last 6 months
export const getLastSixMonths = () => {
  const months = [];
  for (let i = 0; i < 6; i++) {
    months.push(moment().subtract(i, 'month').toDate());
  }
  return months;
};

export const getChartData = (statistics: InvoiceStats[]) => {
  const labels: string[] = [];
  const data: number[] = [];
  statistics.forEach((el) => {
    labels.push(moment().month(el.month).year(el.year).format('MMM'));
    data.push(el.sum);
  });

  return { data, labels };
};

export const getThisMonthSum = (data: InvoiceStats[]) => {
  const thisMonth = moment().month();
  const thisYear = moment().year();
  const thisMonthSum = data.find(
    (el) => el.month === thisMonth && el.year === thisYear
  );
  return thisMonthSum ? thisMonthSum.sum : 0;
};

// export const getChartData = (invoices: Invoice[]) => {
//   const months = getLastSixMonths();
//   const labels: string[] = [];
//   const data: number[] = [];
//   months.forEach((month) => {
//     labels.push(moment(month).format('MMM'));
//     data.push(getTotalFromInvoices(invoices, month));
//   });
//   return { data, labels };
// };

export const getAlertNotification = (data: NotificationIs[]) => {
  return data.map((notification) => {
    let message = '';
    let severityLevel: NotificationSeverityLevel;
    const dueDate = moment()
      .year(notification.anne)
      .month(notification.trimestre * 3);

    if (dueDate.isSameOrBefore(moment(), 'd')) {
      severityLevel = NotificationSeverityLevel.info;
      message = `Tax of trimester ${notification.trimestre} ${notification.anne} is available for payment.`;
    } else if (dueDate.isSameOrBefore(moment().add(1, 'month'), 'month')) {
      severityLevel = NotificationSeverityLevel.warning;
      message = `Tax of trimester ${notification.trimestre} ${
        notification.anne
      } will get increased by 5% if not paid before ${dueDate
        .add(1, 'month')
        .format('DD/MM/YYYY')}.`;
    } else {
      severityLevel = NotificationSeverityLevel.danger;
      message = `Tax of  trimester ${notification.trimestre} did not payed yet. A fine will be applied`;
    }

    return {
      id: notification.id,
      message,
      severityLevel,
    };
  });
};

// export const formatIrTaxes = (data: IrTax[]) => {
//   return data.map((tax) => {
//     return {
//       id: tax.id,
//       amount: tax.amount,
//       date: moment(tax.year + '-' + tax.month, 'YYYY-MMMM').format(
//         'MMM, DD, YYYY'
//       ),
//     };
//   });
// };