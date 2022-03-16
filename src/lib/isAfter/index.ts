import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given two dates, return true if the first date is after the second date
 * @param {DateTimeInput} date - The date to check against.
 * @param {DateTimeInput} dateToCompare - The date to compare to the date passed in.
 * @returns A boolean value.
 */
export const isAfter = (date: DateTimeInput, dateToCompare: DateTimeInput) => {
  const validateDate = getValidDate(date);
  const validateDateToCompare = getValidDate(dateToCompare);
  return validateDate.getTime() > validateDateToCompare.getTime()
} 