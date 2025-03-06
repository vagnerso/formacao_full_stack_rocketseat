// for of: itera sobre valores de um objeto iterável

let students = ["Vagner", "Pedro", "Paulo"]

for (let student of students) {
    console.log(student)
}

let user = [{
    name: "Vagner",
    email: "vagner@email",
}]

for (let value of user) {
    console.log(value.email)
}