const service = require('./service')

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let i = 0; i < this.length; i++) {
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main() {
    try {
        const resultado  = await service.obterPessoas('a')
        
        // // FOREACH
        // const names = []
        // resultado.results.forEach(item => {
        //     names.push(item.name)
        // })

        // // MAP
        // const names = resultado.results.map(pessoa => pessoa.name)

        // // MAP CUSTOMIZADO
        const names = resultado.results.meuMap(function (pessoa, indice) {
            return `[${indice}]${pessoa.name}`
        })

        console.log('names', names)

    } catch (error) {
        console.error(error)
    }
}

main()