// Callback function
// função passada para outra função como um argumento

function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName)

    callback()
}

function callBack(){
    console.log("Tarefa finalizada")
}

// Passando para a função
execute("Download do arquivo...", callBack)

// Criando a função no próprio parâmetro
execute("Upload do arquivo...", function(){
    console.log("Função de callback com uma função anônima")
})

// Utilizando arrow functions
execute("Excluindo arquivo...", () =>{
    console.log("Arquivo excluido")
})

execute("Salvando arquivo...", () => console.log("Arquivo salvo"))