window.addEventListener("load", () => {
    console.log("A página foi carregada")
})

addEventListener("click", (event) => {
    event.preventDefault()

    // retorna todas informações do evento
    //console.log(event)

    // retorna o elemento clicado
    //console.log(event.target)

    //retorna o textContent do elemento clicado
    console.log(event.target.textContent)
})