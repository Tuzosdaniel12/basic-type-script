let message: string = 'Hello World';
console.log(message);

//----------------Variable Declarations----------------//
//basic types

let isTrue: boolean = false;
let age: number = 29;
let myName: string = 'Dan';

let sentence: string = `My name is ${myName} I am a beginner in Typescript`;

//subtypes of all the types
let n: null = null;
let u: undefined = undefined;

//array type
let listOne: number[] = [1,2,3];
let listTwo: Array<number> = [1,2,3];

let person: [string, number] = ['Chris', 22];//tuples have fix number of values

//enum types
enum Color { Red, Green, Blue};

let c: Color = Color.Green

console.log(c)

//any type :" use when migrating js to ts, also when we don't the type of response from third party frameworks"
let anyType: any = 10;
anyType = true;

//any unknown
let randomValue: unknown = 10;

function hasName(obj: any): obj is { name: string} {
    return !!obj && typeof obj === "object" && "name" in obj;
}

if(hasName(randomValue)){
    console.log(randomValue.name)
}

(randomValue as string).toLocaleUpperCase();

//multi type
let multiType: number | boolean; // use multi type when the response is not under your control

multiType = true;
multiType = 20;


//----------------Function Declarations----------------//
const add = (num1: number, num2: number): number =>{
    return num1 + num2
}
add(2 , 5);


//optional parameters
const subtract = (num1: number = 10, num2?: number): number =>{
    if(num2) {
        return num1 - num2;
    }
    return num1
}
subtract(5, 10);
subtract(20);

//Interface
interface Person {
    firstName: string;
    lastName: string;
}

const fullName = (person: Person) =>{
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);

//Classes
class Employee {
    protected employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

const emp1 = new Employee("Dan");
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    };

    delegateWork(){
        console.log(`Manager delegating task`);
    }
}

let man1 = new Manager('Daniel S');
man1.delegateWork();
man1.greet();