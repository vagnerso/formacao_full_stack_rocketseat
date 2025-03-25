// destructuring assigment

const data = ["Vagner Oliveira", "vagner@hotmail"]

// desestruturando array
const [username, email] = data

console.log("Nome:", username)
console.log("Email: ", email)

const fruits = ["Banana", "Apple", "Orange"]

// desestruturar somente o primeiro
const [banana] = fruits
console.log(banana)

const [_, apple] = fruits
console.log(apple)

const [, , orange] = fruits
console.log(orange)