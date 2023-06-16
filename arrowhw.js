//* 1 - write this code using two arrow functions

//function double(arr) {
//  return arr.map(function(val) {
//  return val * 2;
// });
// }

  const double = (arr) => arr.map(n => n*2);


//* 2 - replace all functions with arrow functions

//function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//      return num ** 2;
//    });
//    var evens = squares.filter(function(square){
//      return square % 2 === 0;
//    });
//    return evens;
//  }

const squareAndFindEvens = (numbers) => {
    var squares = numbers.map(n => n**2);
    var evens = squares.filter(n => n % 2 === 0);
    return evens;
}

// or

const sAndEv = numbers => numbers.map(n => n ** 2).filter(n => n % 2 ===0);