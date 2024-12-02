const foo = function() {
  return 'bar';
};

const add = (parameter1, parameter2) => parameter1 + parameter2;

const double = x => x * 2;


const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};


const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
console.log(squares);  
