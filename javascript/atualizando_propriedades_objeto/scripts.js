// atualizar objeto

const product = {
    name: "Teclado",
    quantity: 100,
}

console.log(product.name)

// Atualiza o valor de uma propriedade
console.log(product)
product.quantity = 90
console.log(product)

product.name = "Mouse"
console.log(product)

// Notação de colchetes
product["quantity"] = 50
console.log(product)