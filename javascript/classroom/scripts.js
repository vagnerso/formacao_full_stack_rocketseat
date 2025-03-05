// while

let execute = true

while (execute) {
    let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")
    
    if (response === "2") {
        execute = false
    }
}

console.log("Segue o fluxo...")