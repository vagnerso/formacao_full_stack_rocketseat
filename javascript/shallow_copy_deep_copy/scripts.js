// Shallow Copy - Cópia superficial

const htmlCourse = {
    course: "HTML",
    students: [{ name: "Vagner", email: "vagner@gmail.com"}],
}

//const jsCourse = {
//    ...htmlCourse,
//    course: "Javascript",
//}

// vai modificar o htmlCourse tbm, students é uma referência e não uma cópia.
 //jsCourse.students.push({ name: "Ana", email: "ana@gmail.com"})

// Deep Copy (Cópia profunda), melhor para arrays e objetos
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students, { name: "Joao", email:"joao@mail.com"}]
}

jsCourse.students.push({name: "Maria", email: "maria@hotmail.com"})

 console.log(htmlCourse, jsCourse)