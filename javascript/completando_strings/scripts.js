const creditCard = "12345678912345698"
console.log(creditCard.length)

const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

// preenche a string no inicio
const maskedNumber = lastDigits.padStart(creditCard.length, "X")

console.log(maskedNumber)

// preenche a string no final
const number = "123"
console.log(number.padEnd(10,"#"))
