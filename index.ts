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

const menu: Array<Pizza> = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Array<Order> = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
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

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if(!order){
        // console.log("Order cannot be found")
        // return
        throw new Error("Order cannot be found") // a way to handle errors
    }
    order.status = "completed"
    return order
}

function getPizzaDetails(identifier: string | number){
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError(`indentifier must be a number or string`)
    }
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)