export function sumListItems (listNumbers = []) {
  return listNumbers.reduce((prev, current) => prev + current, 0);
}
