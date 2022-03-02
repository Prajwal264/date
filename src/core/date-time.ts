import { Weekdays } from '../enums/weekdays.enum';
import { isString, isValid } from '../helpers/type.helper';

/**
 *
 *
 * @class DateTime
 * @extends {Date}
 */
class DateTime extends Date {
  /**
   * Return an array of all the values of the Weekdays enum
   * @returns An array of Weekdays
   */
  public static getWeekdays(): Weekdays[] {
    return Object.values(Weekdays)
  }

  /**
   * Given a year, return true if it is a leap year, false otherwise
   * @param {number} year - The year to check.
   * @returns A boolean value.
   */
  public static isLeapYear(year?: number | Date | string): boolean { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
    let yearToBeChecked = new Date().getFullYear();
    if(year) {
      if(year instanceof Date) {
        yearToBeChecked = year.getFullYear();
      } else if(isString(year)) {
        if(isValid(year)) {
          yearToBeChecked = new Date(year).getFullYear();
        } else {
          // TODO: invalid date
          return false;
        }
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
}


export {
  DateTime
};
