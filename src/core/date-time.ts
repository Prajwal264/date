import { Weekdays } from '../enums/weekdays.enum';

class DateTime extends Date {
  public static getWeekdays(): Weekdays[] {
    return Object.values(Weekdays)
  }

  public static isLeapYear(year: number): boolean { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
    if(year % 4 === 0) { 
      if(year % 100 !== 0) { 
        return true;
      }
    }
    if(year % 400 === 0) {
      return true;
    }
    return false;
  }
}


export {
  DateTime
};
