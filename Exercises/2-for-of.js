'use strict';

const sum = (...args) => {
  let Sum = 0;
  for (const i of args) {
    Sum+=i;
  }
 
  return Sum;
};

console.log(sum(1,2,3));
module.exports = { sum };
