// função que retorna uma promise

function asyncFunction(){
    return new Promise((resolve, reject) => {
        // simula uma operação assíncrona
        setTimeout(() => {
            const isSuccess = false

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado")
            }
        }, 3000)
    })
}

asyncFunction().then((response) => {
    console.log("Sucesso: ", response)
}).catch((error) => {
    console.log("Error: ", error)
}).finally(() => {
    console.log("Fim da execução")
})