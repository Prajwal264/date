import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given a date and a date to compare it to, return true if the date is before the date to compare it
 * to
 * @param {DateTimeInput} date - The date to compare to dateToCompare.
 * @param {DateTimeInput} dateToCompare - The date to compare to the date passed in.
 * @returns A boolean value.
 */
export const isBefore = (date: DateTimeInput, dateToCompare: DateTimeInput) => {
  const validateDate = getValidDate(date);
  const validateDateToCompare = getValidDate(dateToCompare);
  return validateDate.getTime() < validateDateToCompare.getTime()
}