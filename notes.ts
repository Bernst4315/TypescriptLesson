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

function fetchUserDetails(username: string): User { //this tells what data the function is returning. in this case a User obj
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}


let value : any = 1 //any essentially turns off typescript
//could be used as a tempory quick fix after turning a js file to ts

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type updatedUser = Partial<User> //this enable to update part of obj, w/out need to specify each prop type
//sets all props to optional to allow for seemless updating 

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: updatedUser) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign

    const getUser = users.find(user => user.id === id); 
    if(!getUser){
        console.error("user not found")
        return
    }
    Object.assign(getUser, updates)

    
    
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)

function addNewUser(newUser: Omit<User, "id">): User { //this allows the entry to not have a prop id,
    //when creating or updating something id doesn't need to be changed and backend should auto handle id creation 
    //no need to create id prop
  

    const user: User = {id: 1, ...newUser}
    users.push(user)

    return(user)
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)