// eventos de formulário

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #1")
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez subbmit no formulário #2")
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #3")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #4")
}
)
