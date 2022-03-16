import { isString, isValid } from '../../helpers/type.helper';
import { DateTimeInput } from '../../types/input';

/**
 * If the year is a valid date, return it. Otherwise, return a new Date object
 * @param {DateTimeInput} year - The year to check.
 * @returns Nothing.
 */
  export const getValidDate = (year: DateTimeInput): Date => {
  let validDate = new Date();
  if(year instanceof Date) {
    validDate = year;
  } else if(isString(year) || typeof year === 'string') {
    validDate = isValid(year);
  } else if(!isNaN(year)) {
    validDate = isValid(year);
  }
  return validDate;
}