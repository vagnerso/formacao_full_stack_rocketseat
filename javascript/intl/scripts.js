// Intl é a API de Internacionalização do ECMAScript

const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))

console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date()

// obtem a diferença em minutos do timezone
console.log(date.getTimezoneOffset())

// obtem a diferença em horas do timezone
console.log(date.getTimezoneOffset() / 60)
