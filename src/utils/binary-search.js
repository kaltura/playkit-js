//@flow
/**
 * @param {Array<any>} list The array to search.
 * @param {Function} comparisonFn
 *      Called and provided a candidate item as the first argument.
 *      Should return:
 *          > -1 if the item should be located at a lower index than the provided item.
 *          > 1 if the item should be located at a higher index than the provided item.
 *          > 0 if the item is the item you're looking for.
 *
 * @return {any} The object if it is found or null otherwise.
 */
export function binarySearch(list: Array<any> = [], comparisonFn: Function = () => 1): any {
  if (list.length === 0 || (list.length === 1 && comparisonFn(list[0]) !== 0)) {
    return null;
  }
  const mid = Math.floor(list.length / 2);
  if (comparisonFn(list[mid]) === 0) {
    return list[mid];
  }
  if (comparisonFn(list[mid]) > 0) {
    return binarySearch(list.slice(0, mid), comparisonFn);
  } else {
    return binarySearch(list.slice(mid + 1), comparisonFn);
  }
}
