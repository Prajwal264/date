import { isString, isValid } from '../../helpers/type.helper';
import { DateTimeInput } from '../../types/input';

/**
 * Given a date, return a valid date
 * @param {DateTimeInput} year - DateTimeInput
 * @returns A valid date object.
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