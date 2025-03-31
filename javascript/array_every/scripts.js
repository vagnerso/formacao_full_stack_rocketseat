// every, testa se todos os valores do arrays passam na condição e retorna um valor booleano

const ages = [15, 30, 39, 29]

// verificando se todas as idades são maiores ou igual a 18

const result = ages.every((age) => age >= 18)
console.log(result)