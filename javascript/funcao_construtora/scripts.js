// Função construtora
// Para instanciar objetos

function createProduct(name) {
    const product = {}

    product.name = name
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
} 

const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

// Exemplos de funções construtoras disponíveis no próprio JavaScript

let myName = new String("Vagner")
console.log(myName)

let date  = new Date("2024-1-1")
console.log(date)

function Person(name) {
    this.name = name
    this.message = function() {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("Vagner")
console.log(person1.name)
person1.message()

const person2 = new Person("João")
console.log(person2.name)
person2.message()