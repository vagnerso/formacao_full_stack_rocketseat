// imutabilidade

const address1 = {
    street: "Av. Brasil",
    number: 20,
}


// isso não é uma cópia

//const address2 = address1
//address2.number = 30

// aqui estamos criando um novo objeto
const address2 = {...address1}
address2.number = 30

console.log(address1, address2)

// exemplo array

// exemplo de referencia de array
const list1 = ["Apple", "Banana"]
//const list2 = list1 
//list2.push("Watermelon")
//console.log(list1, list2)

const list2 = [...list1, "Watermelon"]
console.log(list1, list2)