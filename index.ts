type Pizza = {
    id: number
    name: string,
    price: number, 
}

type Order = {
    id: number //consistancy is good, but omitted "," to show it is optioal 
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100
let pizzaId = 1
let nextOrderId = 1
const orderQueue: Array<Order> = []

const menu: Array<Pizza> = [
    { id: pizzaId++, name: "Margherita", price: 8 },
    { id: pizzaId++, name: "Pepperoni", price: 10 },
    { id: pizzaId++, name: "Hawaiian", price: 10 },
    { id: pizzaId++, name: "Veggie", price: 9 },
]


function addNewPizza(pizzaObj: Pizza): void { //void is here, don't get a value from this function. 
// Void clarifies/makes explicit that this function is not going to return a value
    pizzaObj.id = pizzaId++
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
        if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price //selectedPizza could be undefined. added if statment to prevent that
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined{
    const order = orderQueue.find(order => order.id === orderId)
    if(!order){
        // console.log("Order cannot be found")
        // return
        throw new Error("Order cannot be found") // a way to handle errors
    }
    order.status = "completed"
    return order
}

function getPizzaDetails(identifier: string | number): Pizza | undefined{
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError(`indentifier must be a number or string`)
    }
}

addNewPizza({ id: pizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: pizzaId++, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: pizzaId++, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)