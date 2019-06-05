/**
 * A function to call a passed function in debounced fashion.
 * @param  {Function} fn     A Function to be debounced
 * @param  {Number}   delay  Time in ms to debounce the passed fn
 * @return {Function}        Debounced function of passed fn
 */
export function debounce(fn, delay = 0) {
  let timer = null;

  return function(...args) {
    window.clearTimeout(timer);

    timer = window.setTimeout(fn.bind(this, ...args), delay);
  };
}

/**
 * A function to call a passed function in throttled fashion, i.e, it's called only once per span of duration since first called
 * @param  {Function} fn     A Function to be throttled
 * @param  {Number}   spanTS Time in ms to until which throttle window is kept open
 * @return {Function}        Throttled function of passed fn
 */
export function throttle(fn, spanTS = 0) {
  let timer = null;

  return function(...args) {
    if (!timer) {
      timer = setTimeout(_ => {
        timer = null;
        fn.call(this, ...args);
      }, spanTS);
    }
  };
}
