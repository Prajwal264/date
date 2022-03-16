import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Get the end of the day for a given date
 * @param {DateTimeInput} date - DateTimeInput
 * @returns A date object with the time set to 23:59:59:999
 */
export const getEndOfTheDay = (date: DateTimeInput) => {
  const validDate = getValidDate(date)
  validDate.setHours(23, 59, 59, 999)
  return validDate
}