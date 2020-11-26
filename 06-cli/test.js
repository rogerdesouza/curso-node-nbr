const { deepEqual, ok } = require('assert')
const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = {
    id: 1,
    nome: 'Flash',
    poder: 'Velocidade'
}

describe('Suíte de manupulação de heróis', () => {

    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })

    it('Deve pesquisar um herói usando arquivo', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id) // lá em resultado é um destructuring de array
        deepEqual(resultado, expected)
    })

    it('Deve cadastrar heróis usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(expected)
        const [atual] = await database.listar(expected.id)
        deepEqual(atual, expected)
    })

})