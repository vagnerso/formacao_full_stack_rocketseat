// tipos de elementos que array aceita

let myArray = [
    "Um texto",
    10,
    true,
    function (){
       console.log("Função dentro do array!") 
    },
    {
        name: "Vagner",
        email: "vagner@email",
    },
]

// texto
console.log(myArray[0])

// numero
console.log(myArray[1])

// boolean
console.log(myArray[2])

// função
myArray[3]()

// objeto
console.log(myArray[4].name, myArray[4].email)