'use strict';

const sum = (...args) => {
  let Sum = 0;
  while (args.length > 0) {
    Sum += args.pop();
  }
  return Sum;
};

const sum2 = (...args) => {
  let Sum = 0;
  let i = 0;
  while  (i < args.length) {            //способ 2
  Sum += args[i];
  i++
  }
  return Sum;
};

console.log("способ без удаления и с помощью счетчика - "+sum2(1,2,3));
console.log("через удаление - "+sum(1,2,3));
module.exports = { sum };
