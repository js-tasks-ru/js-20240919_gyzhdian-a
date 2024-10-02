/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size == undefined) {return string;}
  let count = 0;
  let prevSymbol = '';
  let result = '';
  for (const symbol of string) {
    if (symbol !== prevSymbol) {
        prevSymbol = symbol;
      count = 0;
    } 
    if (count < size && symbol === prevSymbol) {
      result += symbol;
      count++;
    }
  }
  return result;

}
