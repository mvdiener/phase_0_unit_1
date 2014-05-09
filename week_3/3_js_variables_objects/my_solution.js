// I paired by myself on this challenge.




// Pseudocode
// assert 1: define var secretNumber as a number
//
// assert 2: set var secretNumber = 7
// 
// assert 3: define var password as a string
// 
// assert 4: set var password = 'just open the door'
//
// assert 5: define var allowedIn as a boolean
//
// assert 6: value of test must be true in order for test to run at all
//  set var allowedIn = false
//  run test to evaluate allowedIn === false
//
// assert 7: define var members as an array []
//
// assert 8: push string "John" to end of members[]
//
// assert 9: push two blank strings "" to end of members[]
//  push "Mary" to end of members[]
// __________________________________________
// Write your code below.

secretNumber = 5;
assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber = 7,
  "The value of secretNumber should be 7.",
  "2. "
)

password = 'derp';
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password = "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

allowedIn = true;
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  (allowedIn = false, allowedIn === false),
  "The value of allowedIn should be false.",
  "6. "
)

members = [];
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

members.push("John");
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

members.push("","","Mary")
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

assert((secretNumber = 5, typeof secretNumber === 'number'), "The value of secretNumber should be a number.", "1. ")

assert(secretNumber = 7, "The value of secretNumber should be 7.", "2. ")

assert((password = 'derp', typeof password === 'string'), "The value of password should be a string.", "3. ")

assert(password = "just open the door", "The value of password should be 'just open the door'.", "4. ")

assert((allowedIn = true, typeof allowedIn === 'boolean'), "The value of allowedIn should be a boolean.", "5. ")

assert((allowedIn = false, allowedIn === false), "The value of allowedIn should be false.", "6. ")

assert((members = [], members instanceof Array), "The value of members should be an array", "7. ")

assert((members.push("John"), members[0] === "John"), "The first element in the value of members should be 'John'.", "8. ")

assert((members.push("","","Mary"), members[3] === "Mary"), "The fourth element in the value of members should be 'Mary'.", "9. ")

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I had a tough time with this at the beginning. It took me a few hours to read through the JS intro, and I was excited to start coding, 
// but immediately got stuck trying to make sense of the first assert test. The I wasn't sure what the typeof operator was, and I 
// didn't really understand what it was doing. I tried replacing variables here and there with no success. I eventually found a good page
// with examples of what typeof does here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof 
// After that, it made a lot more sense and I was able to get underway with the rest of the assert tests. After the initial understanding
// of the first assert, none of the rest gave me any trouble except for one. I found assert #6 to be very confusing. The assert error 
// tells us that allowedIn should be false. However, if you set allowedIn = false, then the test won't run because it sees the false 
// value as no test. So in order to make the test pass, you actually have to set allowedIn = false, and then check if allowedIn === false.
// The amount of double negatives made my head hurt a little, and I don't think I would ever write a test like that myself. All in all,
// I'm starting to get the hang of JS basics, but I'll see what happens when I attempt to do a solo challenge.

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

