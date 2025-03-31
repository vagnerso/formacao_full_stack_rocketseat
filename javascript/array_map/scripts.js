// map()

const products = ["Teclado", "Mouse", "Monitor"]

// percorro os itens do array

products.map((product) => {
    console.log(product)
})

// sintaxe reduzida
products.map((product) => console.log(product))

// utilizando o novo objeto retornado
const formatted = products.map((product) => {
    //return product.toUpperCase()
    return{
        id: Math.random(),
        description: product,
    }
})

console.log(formatted)