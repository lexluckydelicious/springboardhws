// what would this return: new Set([1, 1, 2, 2, 3, 4])

[1, 2, 3, 4]

// what about this [...new Set('referee').join('')]

['ref']

// what does the map m look like after the code
//
//  let m = new Map();
//  m.set([1, 2, 3], true);
//  m.set([1, 2, 3], false);

    {Array(3) => true, Array(3) => false}

//write a function that takes in an array and determines if it containes a duplicate

    const hasDuplicate = array => new Set(arr.size) !== arr.length

//write a function that accepts a string and counts the vowels

function vowelCount(str) {
    let vowels = "aeiou";
    let counter = new Map();
    let lowerCased = str.toLowerCase();
    for (let char of lowerCased) {
        if (vowels.contains(char)) {
            if (counter.has(char)){
                counter.set(char, counter.get(char) + 1);
            }
            else {
                counter.set(char, 1);
            }
        }
    }
    return counter;
}



