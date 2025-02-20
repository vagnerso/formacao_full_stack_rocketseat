// Visualizar o conteúdo do document
//console.log(document)

// Obter title da página
console.log(document.title)

// acessar elemento pelo id
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra as propriedades do objeto
console.dir(guest)

// Acessar elemento com class (seletor class)

const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

// Exibir o primeiro elemento da lista
console.log(guestByClass.item(0))
console.log(guestByClass[1])

// Selecionar elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)


