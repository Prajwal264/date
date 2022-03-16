import { Weekdays } from '../enums/weekdays.enum';
import { isValid, isString } from '../helpers/type.helper';
import { getValidDate } from '../lib/getValidDate/index';
import { getWeekdays } from '../lib/getWeekdays/index';
import { isBefore } from '../lib/isBefore/index';
import { isLeapYear } from '../lib/isLeapYear/index';
import { isWeekday } from '../lib/isWeekday/index';
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
    const weekdays = getWeekdays();
    return weekdays;
  }

  /**
   * If the year is a valid date, return it. Otherwise, return a new Date object
   * @param {DateTimeInput} year - The year to check.
   * @returns Nothing.
   */
  public static getValidDate(year: DateTimeInput): Date {
    return getValidDate(year);
  }

  /**
   * Given a year, return true if it is a leap year, false otherwise
   * @returns A boolean value.
   */
  public isLeapYear(): boolean { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
    return isLeapYear(this)
  }

  /**
   * @returns a boolean value.
   *  If the day is a weekday, it returns true.
   *  If the day is a weekend, it returns false.
   */
  public isWeekday(): boolean {
    return isWeekday(this)
  }

  /**
   * Returns true if the current date is before the date to compare to
   * @param {DateTimeInput} dateToCompare - The date to compare to.
   * @returns A boolean value.
   */
  public isBefore(dateToCompare: DateTimeInput) {
    return isBefore(this, dateToCompare);
  }
}


export {
  DateTime
};
