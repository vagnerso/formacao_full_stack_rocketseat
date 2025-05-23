// Shallow Freezing // congelar um objeto

const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Vagner",
        email: "vagner@email.com"
    },
}


// o javascript em si não impõe restrições à modificação de objetos

book.category = "HTML"

// congela o objeto e impede a modificação
Object.freeze(book)
book.category="CSS"

// o Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing)
book.author.name = "João"


console.log(book)