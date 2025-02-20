// Tratamento de exceções

/*try {
    console.log(result)  
} catch (error){
    console.log(error)
} finally{
    console.log("fim")
}*/

let result = 0
try {
    if(result === 0) {
        throw new Error("O valor é igual a zero.")
    }
} catch (error) {
    console.log(error)
} finally{
    console.log("Fim")
}




