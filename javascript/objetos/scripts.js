// Cria um objeto vazio

const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos

const user = {
    email: "vagner@hotmail.com",
    age: 39,
    name: {
        firstName: "Vagner",
        surname: "Oliveira"
    },
    address: {
        street: "Rua Américo Mattos",
        number: 46,
        city: "Camaquã",
        postal_code: "96785336"
    },
    message: function(){
        console.log("Oi Vagner")
    }
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.address.street)
console.log(user.name.firstName + " " +
    user.name.surname
)

user.message()

// Notação de colchetes

console.log(user["email"])
console.log(user["name"]["firstName"])
user["message"]()