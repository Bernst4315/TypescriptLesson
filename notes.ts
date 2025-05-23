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