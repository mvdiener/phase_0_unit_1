// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

   set adam equal to emtpy object {}

2. Give adam a name property with the value "Adam".

  set adam.name equal to "Adam"

3. Add a spouse property to terah and assign it the value of adam.

  set terah.spouse equal to adam

4. Change the value of the terah weight property to 125.

  set terah.weight equal to 125

5. Remove the eyeColor property from terah.

  delete property eyeColor from terah

6. Add a spouse property to adam and assign it the value of terah.

  set adam.spouse equal to terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

   set children equal to empty object {}
   set terah.children equal to children

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  set carson equal to empty object {}
  set carson.name equal to "Carson"
  set children.carson equal to carson

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

  set carter equal to empty object {}
  set carter.name equal to "Carter"
  set children.carter equal to carter

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

  set colton equal to empty object {}
  set colton.name equal to "Colton"
  set children.colton equal to colton


11. Add a children property to adam and assign it the value of terah children.

  set adam.children equal to children

*/

// __________________________________________
// Write your code below.

adam = {}
assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

adam.name="Adam";
assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

terah.spouse=adam;
assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

terah.weight=125;
assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

delete terah.eyeColor;
assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

adam.spouse = terah;
assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

children={};
terah.children=children;
assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

carson = {};
carson.name = "Carson";
children.carson = carson;
assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

carter = {};
carter.name = "Carter";
children.carter = carter;
assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

colton = {};
colton.name = "Colton";
children.colton = colton;
assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

adam.children=children;
assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

// __________________________________________
/* Reflection: Use the reflection guidelines
The challenege started off pretty easy for me. This was quite similar to the previous lesson, and I knew what was 
happening with the assert tests. By the end of this challenege, children didn't look like a real word any more. 
Asserts 8,9 and 10 were VERY confusing in their wording. I checked and re-checked my objects, only to be met by the 
assert's error message. I has to start over in a new console just to make sure everything was cleared out. After that
 I did the same process, yet this time it worked. What gives?!  Considering these three words were used 7 times in the 
 same sentence, I got lost very easily. I think the instructions could have been broken up into a few more sentences 
 and it would have made a lot more sense. I suppose that's what the pseudocode is for though, to help break down the
 instructions, and write them out as something more translatable to code. Which brings me to the bit on pseudocode:
 I'm having a pretty hard time writing out something that's not quite code, but is readable in a way that could easily
 translate to code. I suppose this is something that just comes with practice, but I find myself writing pseudocode that's
 pretty much just code anyways. It may be good for me do to some research on good pseudocoding examples, so I can get a
 better idea of what to do.
*/

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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)