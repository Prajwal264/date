/**
 * Returns true if the object is a string, false otherwise.
 * @param {any} obj - any
 * @returns The return value is a boolean.
 */
const isString  = (obj: any) => {
  return (Object.prototype.toString.call(obj) === '[object String]');
}

/**
 * Check if the date is a valid date
 * @param {any} date - The date to be tested.
 */
const isValid = (date: any) => {
  var parsedDate = Date.parse(date);
  if (isNaN(date) && !isNaN(parsedDate)) {
      return true;
  }
  return false;
}

export {
  isString,
  isValid,
}