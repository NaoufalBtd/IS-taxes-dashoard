// get totalIncome from array of invoices for specific month

import * as moment from 'moment';
import { Invoice } from './controller/models/invoice.model';

export const getTotalFromInvoices = (invoices: Invoice[], date: Date) => {
  let total = 0;
  invoices.forEach((invoice) => {
    if (moment(invoice.date).isSame(date, 'month')) {
      total += invoice.montantTtc!;
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

export const getChartData = (invoices: Invoice[]) => {
  const months = getLastSixMonths();
  const labels: string[] = [];
  const data: number[] = [];
  months.forEach((month) => {
    labels.push(moment(month).format('MMM'));
    data.push(getTotalFromInvoices(invoices, month));
  });
  return { data, labels };
};
