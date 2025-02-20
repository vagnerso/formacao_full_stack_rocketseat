// Função anônima (função que não tem nome)

const showMessage1 = function(){
    return "Olá Vagner"
}

console.log(showMessage1)

const showMessage2 = function (message, name){
    return message + " " + name
}

console.log(showMessage2("Olá", "Vagner Oliveira"))