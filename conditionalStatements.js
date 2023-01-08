// Conditional Statements
// no condition in else
// conditions are only implemented in if and else if
if (true) {
  console.log("hello world");
} else {
  console.log("else");
}
var user = prompt("enter your age");
// Logical operators
// == comparison operator.they dont check data types but only the value . three === check data type
if (user == "") {
  console.log("if");
} else {
  console.log("else");
}

// && AND operators
var name1 = prompt("enter your name ");
var name2 = prompt("enter second name");

if (name1 === "abc" && name2 === "xyz") {
  console.log("true");
} else {
  console.log("false");
}
// && checks both inputs and if both are true then shows true otherwise false if any 1 is different then false

// OR operator ||
// checks if any 1 input is true and returns output as true if both are true then also true
var name1 = prompt("enter your name ");
var name2 = prompt("enter second name");

if (name1 === "abcd" || name2 === "wyxz") {
  console.log("true");
} else {
  console.log("false");
}

var num1 = +prompt("enter 1st num");
var num2 = +prompt("enter 2nd num");

if (num1 > 10 && num2 >= 20) {
  console.log("true");
} else {
  console.log("false");
}

// for multiple conditions use else if. use else at the end
var userinp = prompt("what time is it?");
if (userinp >= 7 && userinp <= 12) {
  console.log("good morning");
} else if (userinp >= 12 && userinp <= 4) {
  console.log("good evening");
}