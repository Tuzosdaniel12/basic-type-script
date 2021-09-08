var message = 'Hello World';
console.log(message);
//----------------Variable Declarations----------------//
//basic types
var isTrue = false;
var age = 29;
var myName = 'Dan';
var sentence = "My name is " + myName + " I am a beginner in Typescript";
//subtypes of all the types
var n = null;
var u = undefined;
//array type
var listOne = [1, 2, 3];
var listTwo = [1, 2, 3];
var person = ['Chris', 22]; //tuples have fix number of values
//enum types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any type :" use when migrating js to ts, also when we don't the type of response from third party frameworks"
var anyType = 10;
anyType = true;
//any unknown
var randomValue = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(randomValue)) {
    console.log(randomValue.name);
}
randomValue.toLocaleUpperCase();
