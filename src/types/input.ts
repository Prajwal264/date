import { DateTime } from '../index';

type DateTimeInput = Date | string | number | DateTime; 

enum DateCompareUnit {
  // HOUR = 'HOUR',
  // MINUTE = 'MINUTE',
  DAY = 'DAY',
  // WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
};  

export {
  DateTimeInput, 
  DateCompareUnit,
}