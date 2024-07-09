/**
 * Check if passed object is a Promise
 *
 * @param  {*}  object - object to check
 * @returns {boolean}
 */
export default function isPromise(object: any): object is Promise<any> {
  return object && typeof object.then === 'function';
}
