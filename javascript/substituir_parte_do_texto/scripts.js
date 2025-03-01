// Substituir parte de um texto

let message = "Estou estudando os fundamentos do JavaScript"

console.log(message)

console.log(message.replace("JavaScript", "Delphi"))

// Extraindo uma parte da string (start, end)

console.log(message.slice(0,5))
console.log(message.slice(6,30))

// Extrair parte de uma string de trás para frente
console.log(message.slice(-11))

let textWithSpace = "  Texto de exemplo  "

// Remove espaços em branco no começo e no fim de uma string
console.log(textWithSpace.trim())