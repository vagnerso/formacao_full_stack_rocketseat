// find()

const values = [5, 12, 8, 130, 44]

// retorna o primeiro elemento que o valor é maior que 10
const found = values.find((value) => value > 10)
console.log(found)

// exemplo com objetos
const fruits = [
    {name: "apples", quantity: 23},
    {name: "bananas", quantity: 25},
    {name: "oranges", quantity: 52},
]

const result = fruits.find((fruit) => fruit.name === "bananas")
console.log(result)