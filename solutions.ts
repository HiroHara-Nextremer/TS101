// exe.1 
/*
var double = function(value) {
  return value*2;
};
console.log(double(10));
 */

let double = (value: number) => value*2;
console.log(double(10));


// exe.2
/*
var greet = function(name) {
  if (name === undefined) {name = 'tom'};
  console.log('hello' + name);    
};
 */

let greet = (name = 'hiro') => {
  console.log('hello' + name);
};
greet();

// exe.3 --spread operator
/*
 var number = [3, 34, 45, 7];
 console.log(Math.min.apply(Math.numbers));
 */

let number = [5,6457,8,34,856345];
console.log(Math.min(...number));


// exe.4 -- spread operator
/*
let newAry = [55,10];
Array.prototype.push.apply(newAry, number);
console.log(newAry);
 */

let newAry = [55,10];
newAry.push(...number);
console.log(newAry);


// exe.5 --restructuring
/*
let testResults = [54,76,35,89,97,36];
let res1 = testResults[0];
let res2 = testResults[1];
let res3 = testResults[2];
console.log(res1,res2,res3);
 */

let testResult = [34,76,54,67,90,54];
let [res1, res2, res3] = testResult;
console.log(res1,res2,res3);


// exe.6 --destrucring objects
/*
let scientist = {firstName: 'will', experience: 12};
let firstName = scientist.firstName;
let experience = scientist.experience;
console.log(firstName, experience);
 */

let scientist = {firstName: 'will', experience:12};
const {firstName, experience} = scientist;
console.log(firstName, experience);


