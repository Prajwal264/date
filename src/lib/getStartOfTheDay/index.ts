import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given a date, return a new date with the hours, minutes, seconds, and milliseconds set to zero
 * @param {DateTimeInput} date - DateTimeInput
 * @returns A date object with the time set to 00:00:00:00:00
 */
export const getStartOfTheDate = (date: DateTimeInput) => {
  const validDate = getValidDate(date)
  validDate.setHours(0, 0, 0, 0)
  return validDate;
}