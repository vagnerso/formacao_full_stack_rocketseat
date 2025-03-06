// break encerra a execução da repetição ou switch para seguir para a instrução seguinte

let option = 3

switch (option) {
    case 1: 
      console.log("cadastrar")
      break
    case 2:   
      console.log("relatorios")
      break
    case 3:   
      console.log("Teste")
      break
    default:
      console.log("Opção inválida")
}

// utilizando break para finalizar repetição

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }

    console.log(i)
}