import { Weekdays } from '../enums/weekdays.enum';
import { isValid, isString } from '../helpers/type.helper';

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
   * If the year is a valid date, return it. Otherwise, return a new Date object
   * @param {number | Date | string} year - The year to check.
   * @returns Nothing.
   */
  public static getValidDate(year: number | Date | string): Date {
    let validDate = new Date();
    if(year instanceof Date) {
      validDate = year;
    } else if(isString(year) || typeof year === 'string') {
      isValid(year);
    } else if(!isNaN(year)) {
      isValid(year);
    }
    return validDate;
  }

  /**
   * Given a year, return true if it is a leap year, false otherwise
   * @param {number} year - The year to check.
   * @returns A boolean value.
   */
  public static isLeapYear(year?: number | Date | string): boolean { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
    let yearToBeChecked = new Date().getFullYear();
    if(year) {
      try {
        this.getValidDate(year);
      } catch {
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
}


export {
  DateTime
};
