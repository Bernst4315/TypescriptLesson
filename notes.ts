//assigning types

let userName: string = "arc123"

//can assign number and boolean as well 

userName = "bob";

console.log(userName)

//custom types

type Food = string; 

let favoritFood: Food = "pizza" // equvalent to let favoritFood: string = "pizza"

//custom types objs

type Person = { //like a class, or even a model in mongoose
    name: string //assigns val type to each prop, "," optional could use ";"
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isstudent: false //error shows up since assign custom type person
}