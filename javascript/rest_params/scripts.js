// rest params

function values(a, ...rest) {
    // mostra a quantidade de parametros
    console.log(rest.length)
    console.log(a)

    // exibindo o conteudo do array
    console.log(...rest)

    //exibe o conteudo do rest que é um array
    console.log(rest)
}

values(2,1,3)