import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * @param {DateTimeInput} [day] - DateTimeInput
 * @returns a boolean value.
 *  If the day is a weekday, it returns true.
 *  If the day is a weekend, it returns false.
 */
export const isWeekday = (day?: DateTimeInput): boolean => {
  let dayToBeChecked = new Date().getDay(); // 0 - sunday, 6 - saturday
  if(day) {
    try {
      const validDate = getValidDate(day);
      dayToBeChecked = validDate.getDay();
    } catch {
      // TODO: handler for invalid date needed.
      return false;
    }
  }

  if(dayToBeChecked % 6 === 0) { 
    return false;
  }
  return true;
}