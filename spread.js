//* refactor this function to use rest and an arrow function

//function filterOutOdds() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }

  function filterOutOdds(...restOfArgs) {
    restOfArgs.filter(n => n % 2 === 0);
  }

// write a function that takes in n args and returns the smallest value

function findMin(...args) {
    if (args.length > 0) {
        return Math.min(args);
    }
    else {
        return 0;
    }
}

//write a function that accepts two objects and returns an object with all key value pairs from both

function mergeObjects(a, b) {
    return {...a, ...b};
}

//write a function that takes in an array and n args, returns the original array and the args doubled

function returnAndDouble(first, ...rest){
    return [first, rest * 2];
}

//refactor with rest spread and arrows

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let num = Math.floor(Math.random() * items.length);
    let newArr = [...items.toSpliced(num, 1)];
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    var newArray = [...array1, ...array2];
    return newArray;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    var newObj = {...obj, [key]: val};
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    var newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    var both = {...obj1, ...obj2};
    return both;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    function addKeyVal(obj, key, val) {
        var newObj = {...obj, [key]: val};
        return newObj;
    }
}