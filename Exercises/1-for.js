'use strict';

const sum = (...args) => {
  let Sum = 0;
  for (let i = 0; i < args.length; i++) {
    Sum += args[i];
  }
  return Sum;
};
console.log(sum(1,2,3));
module.exports = { sum };
