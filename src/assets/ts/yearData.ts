/*
 * Module that returns the number of days in each week of the current year as arrays,
 * including a property for the month of each day.
 */

// Get the current date
const date = new Date();
const year = date.getFullYear();

// Get the first and last day of the current year
const firstDayOfYear: any = new Date(year, 0, 1);
const lastDayOfYear: any = new Date(year, 11, 31);

// Date shorterner
const shortDate_ = (date: Date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
}

/**
 * Helper function that returns the start of the week for a given date.
 * @param day The date for which to find the start of the week.
 * @returns The start of the week for the given date.
 */
const startOfWeek = (day: Date) => {
  const dayOfWeek = day.getDay();
  return new Date(day.getFullYear(), day.getMonth(), day.getDate() - dayOfWeek);
};

/**
 * Helper function that returns the end of the week for a given date.
 * @param day The date for which to find the end of the week.
 * @returns The end of the week for the given date.
 */
const endOfWeek = (day: Date) => {
  const dayOfWeek = day.getDay();
  return new Date(day.getFullYear(), day.getMonth(), day.getDate() + (6 - dayOfWeek));
};

/**
 * Helper function that returns an array of objects, each representing a day in a week.
 * @param start The start date of the week.
 * @param end The end date of the week.
 * @returns An array of objects, each representing a day in the week.
 */
const daysInWeek = (start: Date, end: Date) => {
  const days = [];
  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    const day = new Date(d);
    
    days.push({
      date: shortDate_(day),
      month: day.getMonth() + 1
    });
  }
  return days;
};

// Calculate the number of weeks in the current year
const weeksInYear = Math.ceil((lastDayOfYear - firstDayOfYear) / (7 * 24 * 60 * 60 * 1000));

// Create an array of arrays, where each inner array represents a week and its corresponding days
const weeks_ = [];
for (let i = 0; i < weeksInYear; i++) {
  const start = startOfWeek(new Date(firstDayOfYear.getFullYear(), firstDayOfYear.getMonth(), firstDayOfYear.getDate() + (i * 7)));
  const end = endOfWeek(new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6));
  weeks_.push(daysInWeek(start, end));
}

/**
 * The number of days in each week of the current year, represented as arrays of objects,
 * where each object includes a `date` property for the day and a `month` property for the month.
 */
export const daysInWeeks = weeks_;
export const weeks: number = weeksInYear;
export const currentYear: number = year;
export const shortDate: any = shortDate_;
