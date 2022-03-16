import { DateTimeInput } from '../../types/input';
import { getValidDate } from '../getValidDate/index';

/**
 * Given a year, return true if it is a leap year, false otherwise
 * @param {number} year - The year to check.
 * @returns A boolean value.
 */
export const isLeapYear = (year?: DateTimeInput): boolean => { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
  let yearToBeChecked = new Date().getFullYear();
  if(year) {
    try {
      const validDate = getValidDate(year);
      yearToBeChecked = validDate.getFullYear();
    } catch {
      // TODO: handler for invalid date needed.
      return false;
    }
  }
  if(yearToBeChecked % 4 === 0) { 
    if(yearToBeChecked % 100 !== 0) { 
      return true;
    }
  }
  if(yearToBeChecked % 400 === 0) {
    return true;
  }
  return false;
}