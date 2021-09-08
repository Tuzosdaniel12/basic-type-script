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