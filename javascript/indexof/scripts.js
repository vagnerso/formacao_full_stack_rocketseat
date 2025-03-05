// encontrando conteúdo no texto

let message = "Estou estudando os fundamentos de JavaScript"

// obtem posição da palavra
console.log(message.indexOf("estudando"))

// quando não encontra retorna -1
console.log(message.indexOf("esTudando"))

// verifica se existe a palavra na string
console.log(message.includes("JavaScript"))