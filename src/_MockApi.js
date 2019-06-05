/**
 * A promise to mock api
 * @param  {Any}      data      Any data type to be resolved by Promise
 * @param  {Boolean}  toSuccess Tells the function to resolve/reject the Promise
 * @param  {Number}   duration  Duration in ms after which Promise is to be resolved/rejected
 * @return {Promise<Any>}       returns Promise to be resolved/reject
 */
export const mockAPI = (data, toSuccess = true, duration = 1500) =>
  new Promise((res, rej) => {
    setTimeout(_ => {
      toSuccess ? res(data) : rej(data);
    }, duration); // delay to resolve promise
  });
