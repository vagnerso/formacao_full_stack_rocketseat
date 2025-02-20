// criando elementos na DOM

const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
newGuest.classList.add("guest")

const guestName = document.createElement("span")

guestName.textContent = "Vagner"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Oliveira"


// adiciona após o último filho
newGuest.append(guestName)

// adiciona antes do primeiro filho
newGuest.prepend(guestSurname)

// É mais simples que o append e aceita apenas um argumento
// newGuest.appendChild(guestName)

// console.log(newGuest)

guests.append(newGuest)