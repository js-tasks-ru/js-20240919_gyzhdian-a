/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {return undefined;}
  const entries = Object.entries(obj);
  let result = [];
  for (const [key, value] of entries) {
    result.push([value, key]);
  }
  return Object.fromEntries(result);

}
