import { Weekdays } from '../../enums/weekdays.enum'

/**
* Return an array of all the values of the Weekdays enum
* @returns An array of Weekdays
*/
export const getWeekdays = (): Weekdays[] => {
 return Object.values(Weekdays)
}