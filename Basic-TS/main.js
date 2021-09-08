var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//multi type
var multiType; // use multi type when the response is not under your control
multiType = true;
multiType = 20;
//----------------Function Declarations----------------//
var add = function (num1, num2) {
    return num1 + num2;
};
add(2, 5);
//optional parameters
var subtract = function (num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2) {
        return num1 - num2;
    }
    return num1;
};
subtract(5, 10);
subtract(20);
var fullName = function (person) {
    console.log(person.firstName + " " + person.lastName);
};
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
//Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Dan");
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    ;
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var man1 = new Manager('Daniel S');
man1.delegateWork();
man1.greet();
