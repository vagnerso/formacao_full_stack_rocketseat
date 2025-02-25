// Optional Chaining

const user = {
    id: 1,
    name: "Vagner",    
    message: function() {
        console.log(`Olá, ${this.name}`)
    },
}

//console.log(user)

console.log(user?.address?.street)

user.message()