import { DateTime } from '../../index';
import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given a date, return true if the date is tomorrow, false otherwise
 * @param {DateTimeInput} date - DateTimeInput
 * @returns A boolean value.
 */
export const isTomorrow = (date: DateTimeInput) => {
  const validDate = getValidDate(date);
  const now = new DateTime();
  const tomorrow = new DateTime(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  if(validDate.getUTCFullYear() === tomorrow.getUTCFullYear()) {
    if(validDate.getUTCMonth() === tomorrow.getUTCMinutes()) {
      if(validDate.getUTCDate() === tomorrow.getUTCDate()) {
        return true;
      }
    }
  }
  return false;
}