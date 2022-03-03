import { Weekdays } from '../enums/weekdays.enum';
import { isValid, isString } from '../helpers/type.helper';
import type {DateTimeInput} from '../types/input';

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
   * @param {DateTimeInput} year - The year to check.
   * @returns Nothing.
   */
  public static getValidDate(year: DateTimeInput): Date {
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

  /**
   * Given a year, return true if it is a leap year, false otherwise
   * @param {number} year - The year to check.
   * @returns A boolean value.
   */
  public static isLeapYear(year?: DateTimeInput): boolean { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
    let yearToBeChecked = new Date().getFullYear();
    if(year) {
      try {
        const validDate = this.getValidDate(year);
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

  /**
   * @param {DateTimeInput} [day] - DateTimeInput
   * @returns a boolean value.
   *  If the day is a weekday, it returns true.
   *  If the day is a weekend, it returns false.
   */
  public static isWeekday(day?: DateTimeInput): boolean {
    let dayToBeChecked = new Date().getDay(); // 0 - sunday, 6 - saturday
    if(day) {
      try {
        const validDate = this.getValidDate(day);
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
}


export {
  DateTime
};
