// criar erros personalizados

class MyCustomError {
    constructor(message){
        this.message = "Classe de erro customizada: " + message
    }
}

    try {
        throw new MyCustomError("Erro personalizado lançado!")
    } catch (error) {
        if (error instanceof MyCustomError){
            console.log(error.message)
        }else{
        console.log(error.message)
    }
}
