// strict mode: ativando este modo, os erros que eram silenciosos, passam a gerar exceções no Javascript

"use strict"

function showMessage() {
    let personName = "Vagner Oliveira"
    console.log("Olá", personName)
}

showMessage()


class Student {
    get point() {
        return 7
    }
}

let student = new Student()
console.log(student.point)