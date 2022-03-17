import { DateCompareUnit, DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * It checks if two dates are the same day.
 * @param {DateTimeInput} date - DateTimeInput
 * @param {DateTimeInput} dateToCompare - The date to compare to the date passed in.
 * @returns A boolean value.
 */
const isSameDay = (date: DateTimeInput, dateToCompare: DateTimeInput) => {
  const validDate = getValidDate(date);
  const validDateToCompare = getValidDate(dateToCompare);
  if(validDate.getUTCFullYear() === validDateToCompare.getUTCFullYear()) {
    if(validDate.getUTCMonth() === validDateToCompare.getUTCMonth()) {
      if(validDate.getUTCDate() === validDateToCompare.getUTCDate()) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Check if two dates are in the same month.
 * @param {DateTimeInput} date - DateTimeInput
 * @param {DateTimeInput} dateToCompare - The date to compare to the date passed in.
 * @returns A boolean value.
 */
const isSameMonth = (date: DateTimeInput, dateToCompare: DateTimeInput) => {
  const validDate = getValidDate(date);
  const validDateToCompare = getValidDate(dateToCompare);
  if(validDate.getUTCFullYear() === validDateToCompare.getUTCFullYear()) {
    if(validDate.getUTCMonth() === validDateToCompare.getUTCMonth()) {
      return true;
    }
  }
  return false;
}

/**
 * It checks if the year of the two dates are the same.
 * @param {DateTimeInput} date - DateTimeInput
 * @param {DateTimeInput} dateToCompare - The date to compare to the date passed in.
 * @returns A boolean value.
 */
const isSameYear = (date: DateTimeInput, dateToCompare: DateTimeInput) => {
  const validDate = getValidDate(date);
  const validDateToCompare = getValidDate(dateToCompare);
  if(validDate.getUTCFullYear() === validDateToCompare.getUTCFullYear()) {
    return true;
  }
  return false;
}

/**
 * Given a date and a date to compare it to, return true if the date is the same as the date to compare
 * it to
 * @param {DateTimeInput} date - The date to compare to dateToCompare.
 * @param {DateTimeInput} dateToCompare - The date to compare to the date passed in.
 * @param {DateCompareUnit} unit - The unit of time to compare.
 * @returns A boolean value.
 */
export const isSame = (date: DateTimeInput, dateToCompare: DateTimeInput, unit: DateCompareUnit) => {
  switch(unit) {
    case DateCompareUnit.DAY:
      return isSameDay(date, dateToCompare);
    case DateCompareUnit.MONTH: 
      return isSameMonth(date, dateToCompare);
    case DateCompareUnit.YEAR: 
      return isSameYear(date, dateToCompare);
  }
}