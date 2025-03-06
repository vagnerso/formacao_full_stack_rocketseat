// for in

let person = {
    name: "Vagner",
    surname: "Oliveira",
    email: "vagner@email",
}

for (let property in person) {
    // exibe o nome da propriedade
    console.log(property)

    // exibe o conteudo da propriedade
    console.log(person[property])
}

// for in com array

let students = ["Vagner", "Pedro", "Paulo"]

for (let index in students) {
    console.log(index)
    console.log(students[index])
}
