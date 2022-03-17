import { DateTime } from '../../index';
import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given a date, return true if the date is today
 * @param {DateTimeInput} date - DateTimeInput
 * @returns A boolean value.
 */
export const isToday = (date: DateTimeInput) => {
  const validDate = getValidDate(date);
  const now = new DateTime();
  if(validDate.getUTCFullYear() === now.getUTCFullYear()) {
    if(validDate.getUTCMonth() === now.getUTCMonth()) {
      if(validDate.getUTCDate() === now.getUTCDate()) {
        return true;
      }
    }
  }
  return false;
}