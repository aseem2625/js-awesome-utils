require('it-each')();
const expect = require('chai').expect;
import { getShortenedNumber } from 'src/_Number';

describe('src/_Number.js Fn: getShortenedNumber', function() {

  const resultsVSExpected = [
    { value: getShortenedNumber(0), expected: "0" },
    { value: getShortenedNumber(110), expected: "110" },
    { value: getShortenedNumber(110.1), expected: "110.1" },

    { value: getShortenedNumber(5098760909), expected: "509.9 Cr" },
    { value: getShortenedNumber(5098760909, 3), expected: "509.876 Cr" },

    { value: getShortenedNumber(120009), expected: "1.2 L" },
    { value: getShortenedNumber(120009, 6), expected: "1.200090 L" },

    { value: getShortenedNumber(15010, 0), expected: "15 K" },
    { value: getShortenedNumber(15010, 2), expected: "15.01 K" }
  ];

  it.each(resultsVSExpected, 'all conversions must be valid', function(
    result,
    next
  ) {
    expect(result.value).to.eql(result.expected);

    next();
  });
});
