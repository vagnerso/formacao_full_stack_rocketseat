// deep freezing

const book = {
    title: "Objetos imutaveis",
    category: "javascript",
    author:{
        name: "Vagner",
        email: "vagner@email.com",
    },
}

function deepFreeze(object){
    // obtem um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    // itera sobre todas as propriedades do objeto
    for (const prop of props) {
        // obtem o valor associado a propriedade atual
        const value = object[prop]

        // verifica se o valor é um objeto ou função para continuar aplicando deepFreeze em objetos aninhados
        if (value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value)
        }      
    }

    // retorna o objeto congeledo
    return Object.freeze(object)
}

// chama a função para congelar o objeto com deep freeze (congelamento profundo)
deepFreeze(book)

book.category = "HTML"
book.author.name = "Jo"

console.log(book)