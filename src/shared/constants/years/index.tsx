/**
 *
 * @param minYear Started Year Generated from it
 * @returns Array
 */
const generateYearsArrayUnitNow = (minYear: number): number[] => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year: number = minYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years.reverse();
};

export default generateYearsArrayUnitNow;
