type GreetProps ={
    name: string,
    age: number,
    isSleepy: boolean,
}
export default function Greet({name,age, isSleepy}: GreetProps) {
    return (
        <div>
            <h1>
                {name} you are {age} years old!!! {isSleepy? "and you are sleepy" : "you are awake"}
            </h1>
        </div>
    )
}
