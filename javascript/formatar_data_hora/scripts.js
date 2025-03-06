// formatar data hora

let date = new Date("2024-07-02T14:30:00")

// formata para o dia sempre ter 2 digitos
console.log(date.getDate().toString().padStart(2, "0"))

let day = (date.getDate()).toString().padStart(2, "0")

let month = (date.getMonth()+1).toString().padStart(2, "0")

console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`)