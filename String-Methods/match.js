// The match() method retrieves the result of matching a string against a RegEx

//SYNTAX
match(RegExp);

//PARAMETERS
RegExp; // A regular expression object

//EXAMPLES
const str =
  "For more information, see Chapter 3.4.5.1 of the Astartes Encyclopedia";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1 of the Astartes Encyclopedia' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.
