/**
 *
 * @param {number[]} listNumbers
 * @returns {number}
 */
export function sumListNums (listNumbers = []) {
  return listNumbers.reduce(
    (prev, current) => Math.round(prev) + Math.round(current), 0
  );
}
