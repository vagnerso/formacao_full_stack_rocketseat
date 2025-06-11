// set interval

let value = 10

const interval = setInterval(() => {   
    console.log(value)
    value = value - 1

    if (value === 0) {
        console.log("Feliz Natal!!!")
        clearInterval(interval)
    }

}, 1000) // tempo em milissegundos