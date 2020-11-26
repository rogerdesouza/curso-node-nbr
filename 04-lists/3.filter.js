// outra forma de importar
// assim é com destructuring
// serve para escolher quais funções/atributos queremos importar
const { obterPessoas } = require('./service')


// FILTER CUSTOMIZADO
// assim poderemos definir nosso filter
Array.prototype.meuFilter = function (callback) {
    const lista = []
    for (const i in this) {
        const item = this[i]
        const result = callback(item, i, this)
        if (!result) continue
        lista.push(item)
    }
    return lista
}

async function main() {
    try {
        
        const { results } = await obterPessoas('a')

        // // FILTER
        // const familiaLars = results.filter(pessoa => {
        //     // por padrão precisa retornar um booleano
        //     // para informar se deve manter ou remover da nova lista
        //     // no caso abaixo não encontrou é -1
        //     // e encontrou é retorna a posição no array
        //     const teste = pessoa.name.toLowerCase().indexOf('lars') !== -1
        //     return teste
        // })

        // // FILTER CUSTOMIZADO
        const familiaLars = results.meuFilter((pessoa, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return pessoa.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map(pessoa => pessoa.name)

        console.log('names', names)

    } catch (error) {
        console.error(error)
    }
}

main()