/**
 * Converts a number into abbreviated system
 * @param  {Number} num     The number to be abbreviated
 * @param  {Number} toFixed The decimal upto which number would be abbreviated
 * @return {String}         The abbreviated number with decimals suffixed with Indian numbering system
 */
export function getShortenedNumber(num = null , toFixed = 1) {
  let formattedNum = '';

  if (!num && num !== 0) {
    return;
  }

  if (num >= 10000000) {
    formattedNum = (num / 10000000).toFixed(toFixed) + ' Cr';
  } else if (num >= 100000) {
    formattedNum = (num / 100000).toFixed(toFixed) + ' L';
  } else if (num >= 1000) {
    formattedNum = (num / 1000).toFixed(toFixed) + ' K';
  } else if (num !== Math.floor(num)) {
    // has decimal part
    formattedNum = `${num.toFixed(toFixed)}`;
  } else {
    formattedNum = `${num}`;
  }

  return formattedNum;
}
