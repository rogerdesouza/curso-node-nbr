const { obterPessoas } = require('./service')


// REDUCE CUSTOMIZADO
Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let i = 0; i < this.length; i++) {
        valorFinal = callback(valorFinal, this[i], this)        
    }
    return valorFinal
}


async function main() {
    try {
        
        const { results } = await obterPessoas('a')

        const altura = results.map(pessoa => parseInt(pessoa.height))
        console.log('altura', altura)
        
        // // REDUCE
        // const total = altura.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // }, 0)

        // REDUCE CUSTOMIZADO
        // esse é um exemplo diferente que estamos usando uma lista criada abaixo
        // estamos usando o reduce customizado, mas poderia ser o reduce tradicional
        // é a concatenação de dois arrays com strings
        const minhaLista = [
            ['Roger', 'Vinicius'],
            ['Náutico', 'Brasil']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(', ')

        console.log('total', total)

    } catch (error) {
        console.error(error)
    }
}

main()