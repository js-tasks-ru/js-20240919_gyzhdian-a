/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const array = Array.from(arr);
  
  if (param == 'desc') {return array.sort((a, b) => b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper' }));}
  else {return array.sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));}
}
