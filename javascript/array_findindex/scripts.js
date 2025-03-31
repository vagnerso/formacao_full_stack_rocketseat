// findindex()

const values = [4, 6, 8, 12]

// obtendo o primeiro indice do elemento que o valor é maior do que 4
console.log(values.findIndex((value) => value > 4))

const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])

// exemplo de quando nao encontra
console.log(values.findIndex((value) => value > 12))