/**
 *
 * @param {number[]} listNumbers
 * @returns {number}
 */
export function sumListNums (listNumbers = []) {
  return listNumbers.reduce((prev, current) => prev + current, 0);
}
