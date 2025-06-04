// manipular objeto usando principio da imutabilidade preservando o objeto original

const book = {
    title: "Objetos imutaveis",
    category: "javascript",
    author:{
        name: "Vagner",
        email: "vagner@email.com",
    },
}

const updatedBook = {
    ...book,
    title: "Criando um Front-End moderno",
    category: "html",
    type: "Programming",
}

// original intacto
console.log(book)

// modificado
console.log(updatedBook)

// utilizando operador de desestruturação (rest operator) para remover propriedades
const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory)