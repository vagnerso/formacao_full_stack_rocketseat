// função que retorna uma promise

function asyncFunction(){
    return new Promise((resolve, reject) => {
        // simula uma operação assíncrona
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado")
            }
        }, 3000)
    })
}

// notação de arrow function
// const fetch = async () => {
//     const response = await asyncFunction()
//     console.log(response)
// }

// async function fetch(){
//     const response = await asyncFunction()
//     console.log(response)
// }

async function fetch(){
    try {
        const response = await asyncFunction()
        console.log("Sucesso: ", response) 
    } catch (error) {
        console.log("Erro: ", error)         
    } finally {
        console.log("Fim da execução!")
    }
    
}


fetch()