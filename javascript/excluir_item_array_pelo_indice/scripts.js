// obter posição do item e deletar por indice

let fruits = ["Apple", "Melancia", "Uva", "Lemon"]
console.log(fruits)

// encontra e retorna o indice do elemento
let position = fruits.indexOf("Melancia")
console.log(position)

// remove a quantidade de itens (segundo parametro) pela posição do indice (primeiro parametro) 

//fruits.splice(1, 3)
//console.log(fruits)

fruits.splice(position, 2)
console.log(fruits)

const array = [1, 2, 3, 4, 5]
array.splice(2, 1, 'x', 'y', 'z')