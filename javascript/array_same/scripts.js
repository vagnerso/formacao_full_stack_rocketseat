// some(), testa se ao menos um dos elementos no array passa na condição e retorna true ou false

const ages = [15, 30, 39, 29]

const result = ages.some((age) => age < 18)
console.log(result)