// reduce(), reduz o array ao um único valor

/*
parametros
- array original (values)
- acumulador (accumulator)
- valor da iteração (currentValue)
- valor inicial (0)
- Index (index da iteração atual - opcional)
*/


const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR", accumulator)
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX", index)

    console.log("SOMA", accumulator + currentValue)
    console.log("########")

    return accumulator + currentValue
}, 0)