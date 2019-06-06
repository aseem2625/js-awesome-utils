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

/**
 * A function to create space separated classes. If value is truthy the value returned by expression is appended as a class.
 * @param  {expressions} ...args Arguments where each are falsy/truthy.
 * @return {String}                           A space separated string to be used as class
 * @example classList(falsy_condition1 && 'some-class1', truthy_condition2 && 'some-class2') = 'some-class2'
 */
export function classList(...args) {
  const classes = [];

  for (var i = 0; i < args.length; i++) {
    if (args[i]) {
      if (args[i] instanceof Array) {
        args[i] = args[i].join(' ');
      }

      classes.push(args[i]);
    }
  }

  return classes.join(' ');
}

/**
 * A function to add prefix to each in the set of space separated string.
 * @param  {String} prefix prefix to be prepended
 * @param  {String} classes Space separated strings to each of which prefix will be prepended
 * @return {String}         A space separated string where each of classes have prefix prepended to them
 * @example prefixToClasses('prefix', 'class1 class2') = 'prefix--class1 prefix-class2'
 */
export function prefixToClasses(pc, classes = '') {
  if (!classes) {
    return '';
  }

  return classes
    .split(' ')
    .reduce((a, c) => {
      c.trim() && a.push(pc + c);

      return a;
    }, [])
    .join(' ');
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
