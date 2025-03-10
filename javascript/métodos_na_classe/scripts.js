// método na classe

class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendMail(){
        console.log("E-Mail enviado para",
            this.name,
            "no endereço eletrônico",
            this.email
        )
    }
}

const user = new User("Vagner", "vagner@gmail.com")
user.sendMail()