//assigning types

let userName: string = "arc123"

//can assign number and boolean as well 

userName = "bob";

console.log(userName)

//custom types

type Food = string; 

let favoritFood: Food = "pizza" // equvalent to let favoritFood: string = "pizza"

//custom types objs

type Address = {
        street: string
        city: string
        country: string 
}

type Person = { //like a class, or even a model in mongoose
    name: string //assigns val type to each prop, "," optional could use ";"
    age: number
    isStudent: boolean
    address?: Address //"?" makes address property optional, but reduces type safety
    // address: { //can have nested obj 
    //     street: string
    //     city: string
    //     country: string //common to make a separate type
    // }
}

let person1: Person = { //ts shows error, for it lack the address obj
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isstudent: false //error shows up since assign custom type person
}

//Arrays

const arr: number[] = [0,1,"sd"] //this has to be an array of #'s
const arr2: string[] = ["1", "f", 7] //must be array of strs

//alt

const arr: Array<number> = [0,1,"sd"] 
const arr2: Array<string> = ["1", "f", 7] 

const people: Person[] = [person1, person2] //declare an array of objs, could use alt method as well
const people: Array<Person> = [person1,person2]

//literals

let myName: "Bob" = "Bobby" //this value must be Bob, eventhough it's a let var
const myName2: "Bob" = "Bob" //this makes sense since it's a const

//unions

//uses literals

type UserRole = "guest" | "member" | "admin" //this is how to make a union. Var can only be theses three options 

let userRole: UserRole = "member"
userRole = "guest"
userRole = "admin"
userRole = "hacker" //this falls outside of the union