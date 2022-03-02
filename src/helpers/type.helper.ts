/**
 * Returns true if the object is a string, false otherwise.
 * @param {any} obj - any
 * @returns The return value is a boolean.
 */
const isString  = (obj: any) => {
  return (Object.prototype.toString.call(obj) === '[object String]');
}

/**
 * It checks if the date is valid and if it is, it returns a date object.
 * @param {any} date - The date to be parsed.
 * @returns Nothing, the function is not returning anything.
 */
const isValid = (date: any) => {
  let isDateValid = false;
  const parsedDate = Date.parse(date);
  if (isNaN(date) && !isNaN(parsedDate)) {
      isDateValid = true;
  }
  if(isDateValid) {
    return new Date(date);
  } else {
    throw new TypeError('Invalid Date')
  }
}


export {
  isString,
  isValid,
}