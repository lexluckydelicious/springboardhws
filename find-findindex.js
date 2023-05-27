/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
The function should return the first object with the key of username that matches the string passed to the function. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(users, username) {
  let answer = users.find(function(users){
    return users.username === username;
  })
  return answer;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 

The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(users, username) {
  let placeholder = users.findIndex(function(users, index){
   return users.username === username;
  })
  if (placeholder === -1) {
    return undefined;
  }
    else {
      let removed = users.splice(placeholder, 1);
      let answer = removed.shift();
      return answer;
    }
  
}