'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let Sum = 0;
  do {
    Sum += args.pop();
  } while (args.length > 0);
  return Sum;
};

const sum2 = (...args) => {
  let Sum = 0;
  let i = 0;
  do{
    Sum += args[i];
    i++;
  }
     while(i< args.length);
     return Sum;
};

console.log('Способ через удаление' + sum(1,2,3));
console.log('Без него' + sum2(1,2,3));
module.exports = { sum };
