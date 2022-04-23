import moment from 'moment';

export const getDateInSeconds = (date) => {
  return moment(date).valueOf() / 1000;
};

export const getMilisecondsFromDate = (value) => {
  return value
    ? value * 1000
    : undefined;
};

export const dateFormat = 'dd.MM.yyyy';
