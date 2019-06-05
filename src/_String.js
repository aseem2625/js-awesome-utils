/**
* @private
* A function to convert a first char of string to uppercase. Eg: 'hello world this iS' to 'Hello world this iS'
* @param  {String} str A string to be processed
* @return {String}     A string with first char as uppercase
**/
function _titleCase(str = '') {
  str = str.toLowerCase();
  str[0] = str[0].toUpperCase();

  return str;
}

/**
 * A function to convert a string to title-cased string. Eg: 'hello_world_thiS_iS' to 'Hello World This Is'
 * @param  {String} str        A string to be processed
 * @param  {String} splitToken A token on basis of which str is splitted
 * @return {String}            A title-cased string
 * @example 'hello_world_thiS_iS' to 'Hello World This Is'
 */
export function stringToTitleCase(str = '', splitToken = ' ') {
  return str
    .trim()
    .split(splitToken)
    .map(titleCase)
    .join(' ');
}

/**
 * A function to convert snake-cased string to title-cased string. Eg: 'hello_world_thiS_iS' to 'Hello World This Is'
 * @param  {String} str A snake-cased string to be processed
 * @return {String}     A title-cased string
 * @example 'hello_world_thiS_iS' to 'Hello World This Is'
 */
export function snakeCaseToTitleCase(str = '', splitToken = '_') {
  return stringToTitleCase(string, '_');
}


/*
*
*
* */
export function obj2query(obj) {
  const query = makeQueryObject(obj);

  return Object.keys(query)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
    .join('&');
}


/*
*
*
* */
export function query2obj(string) {
  var obj = {};
  string.split(/=|&/).forEach((param, index, array) => {
    if (index % 2) {
      obj[array[index - 1]] = decodeURIComponent(param);
    }
  });
  return obj;
}


/**
 * Gives you a list of query params
 * @return {Object} URL query params converted into an object.
 */
export const getQueryParams = function(search = location.search) {
  if (isString(search)) {
    return query2obj(search.slice(1));
  }

  return {};
};
