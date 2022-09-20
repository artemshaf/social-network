import { format } from 'date-fns';
export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('ru', { dateStyle: 'medium' })
    .format(new Date(date))
    .toString();

export const formatDateInput = (date: Date) =>
  date ? format(new Date(date), 'yyyy-MM-dd') : undefined;
