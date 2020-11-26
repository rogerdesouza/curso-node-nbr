const assert = require('assert')
const { obterPessoas } = require('./service')

// instalamos o nock para simular os dados (fazer dados fake)
const nock = require('nock')

describe('Star Wars tests', function () {

    this.beforeAll(() => {
        const response = {
            results: [
                {
                    name: 'R2-D2',
                    height: '96'
                }
            ]
        }
        nock('https://swapi.co/api/people')
            .get('/?search=r2-d2&format=json')
            .reply(200, response)
    }) 

    it('Deve buscar o R2-D2 com o formato correto', async () => {
        const expected = [
            { 
                nome: 'R2-D2',
                altura: '96'
            }
        ]
        const nomeBase = 'r2-d2'
        const resultado = await obterPessoas(nomeBase)
        assert.deepEqual(resultado, expected)
    })

})