// Funções

function message(){
    console.log("Olá. É bom ter você aqui")
}

message()
message()

// Parâmetros: é a variável, (escopo da função) que irá receber um valor em uma função.

// Argumentos: é o valor que é passado para a função

function message(username){
    console.log("Olá ", username)
}

message("Vagner")
message("Ana")

function sum(a, b){
    console.log(a + b)
}

sum(2,2)

function joinText(text1, text2, text3){
    console.log(text1, text2, text3)
}

joinText("Vagner", "Silva de", "Oliveira")

function sum(a, b){
    let result =  a + b
    return result
}

let response = sum(7,7)
console.log(response)

function showMessage(message){
    console.log(message)
    endLine()

    function endLine(){
        console.log("---------")
    }
}

showMessage("Tudo bem?")