// Operador de coalescência nula ??

let content = null
console.log(content ?? "Conteúdo padrão")

const user = {
    name: "Vagner",
    avatar: undefined,
}

console.log(user.avatar ?? "default.png")