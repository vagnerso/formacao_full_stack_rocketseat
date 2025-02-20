// Expressão regular

const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const value = input.value
    const regex = /\D+/g
    
    if (regex.test(value)){
        alert("Padrão encontrado")
    }

    console.log(value)
})

/*form.addEventListener("submit", (event) =>{
    event.preventDefault()

    const regex = /\D+/g
    const value = input.value.replace(regex, "X")

    console.log(value)
})
*/
/*input.addEventListener("input", (event) =>{
    const value = input.value
    const regex = /\D+/g
    // retorna o padrão encontrado na string
    //console.log(value.match(regex))

    // testa se atende o padrão
    const isValid = regex.test(value)
    console.log(isValid)
})*/