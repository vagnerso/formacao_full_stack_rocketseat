// eventos de input
const input = document.querySelector("input")

// Keydown - quando uma tecla é pressionada (captura tudo)
//input.addEventListener("keydown", //(event) =>{
//    console.log(event.key)
//})

// Keypress - quando uma tecla do tipo caractere é pressionada (letras, números, ponto, etc.)
input.addEventListener("keypress", (event) =>{
    console.log(event.key)
})

input.onchange = () => inputChange()

function inputChange(){
    console.log("O input mudou!")
}