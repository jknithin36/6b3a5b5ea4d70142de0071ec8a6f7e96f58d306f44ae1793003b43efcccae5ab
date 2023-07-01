'use strict';
//SCOPING IN PRACTICE

function caclAge(birthYear) {
  const age = 2023 - birthYear;
  // fristName is global Variable so it is accessible everywhere
  //console.log(firstName);
  function printAge() {
    // age variable can accessible only inside function
    const output = `${firstName} you are ${age} old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Var is accessible if it is in block scope also
      var millinemal = true;
      // We get fristName of Shiva because frist javascript is assessible inside the scope
      const fristName = 'Shiva';
      // STR only acccessible Here Because it is a block-scope
      const str = `Oh, and you are a millinemal, ${firstName}`;
      // Here we accesses Str variable of block code
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // Reference error as we are using Strict mode
    // If we remove we can access it
    //console.log(add(1, 3));
    // Here We accessed Var
    console.log(millinemal);
  }
  printAge();

  return age;
}

// GLOBAL VARIABLE
const firstName = 'Nithin';

caclAge(1991);
