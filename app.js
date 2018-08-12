"use strict";
// bloack scope 
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
// arros funcitons 
console.log('arrow functions');
var addNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(addNumbers(10, 9));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(addNumbers(10, 89));
var greet = function () {
    console.log('hello');
};
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('hiro');
// default parameters 
console.log('default parameters');
var countDown = function (start) {
    while (start > 0) {
        start--;
    }
    console.log('done', start);
};
countDown(19);
// rest & spread 
var number = [1, 2, 3, 4, 5,];
console.log(Math.max.apply(Math, number));
function makeAry() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeAry(1, 3, 4, 5, 6));
// destructuring 
var myHobbies = ['cooking', 'sports'];
console.log(myHobbies);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: 'hiro', age: 45 };
var userName = userData.userName, age = userData.age;
console.log(userName, age);
