import { DateTime } from '../../index';
import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given a date, return true if the date is yesterday.
 * @param {DateTimeInput} date - DateTimeInput
 * @returns A boolean value.
 */
export const isYesterday = (date: DateTimeInput) => {
  const validDate = getValidDate(date);
  const now = new DateTime();
  const yesterday = new DateTime(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  if(validDate.getUTCFullYear() === yesterday.getUTCFullYear()) {
    if(validDate.getUTCMonth() === yesterday.getUTCMinutes()) {
      if(validDate.getUTCDate() === yesterday.getUTCDate()) {
        return true;
      }
    }
  }
  return false;
}