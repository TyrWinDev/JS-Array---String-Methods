//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

//SYNTAX
split();
split(separator);
split(separator, limit);

//PARAMETERS
separator; //Optional
// The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.

// The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
// If separator contains multiple characters, that entire character sequence must be found in order to split.
// If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
// If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
// If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".

limit; //Optional
// A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

// The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
// If limit is 0, [] is returned.

//EXAMPLES
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("The original string is: ", stringToSplit);
  console.log("The separator is: ", separator);
  console.log(
    "The array has ",
    arrayOfStrings.length,
    " elements: ",
    arrayOfStrings.join(" / ")
  );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);

//EXPECTED OUTPUT
//   The original string is: "Oh brave new world that has such people in it."
// The separator is: " "
// The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

// The original string is: "Oh brave new world that has such people in it."
// The separator is: "undefined"
// The array has 1 elements: Oh brave new world that has such people in it.

// The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
// The separator is: ","
// The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec

// ↪ [""]

//Removing spaces from a string
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
//EXPECTED OUTPUT
// Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
// [ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
