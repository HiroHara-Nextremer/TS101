// bloack scope 
function reset() {
  let variable = null;
  console.log(variable);  
}
reset();

// arros funcitons 
console.log('arrow functions');
const addNumbers = function(number1: number, number2: number): number {
  return number1 * number2;
};
console.log(addNumbers(10,9));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(addNumbers(10,89));

const greet = () => {
  console.log('hello');
};

const greetFriend = friend => console.log(friend);
greetFriend('hiro');

// default parameters 
console.log('default parameters');
const countDown = (start: number): void => {
  while (start > 0) {
    start--;
  }
    console.log('done', start);
};
countDown(19);

// rest & spread 
const number = [1,2,3,4,5,];
console.log(Math.max(...number));

function makeAry(...args: number[]) {
  return args;
}
console.log(makeAry(1,3,4,5,6,));

// destructuring 
const myHobbies = ['cooking', 'sports'];
console.log(myHobbies);
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: 'hiro', age:45};
const {userName, age} = userData;
console.log(userName, age);






