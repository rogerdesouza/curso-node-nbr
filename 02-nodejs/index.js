/*
 0 obter o usuário
 1 obter o número de telefone do usuário pelo id
 2 obter o endereço do usuário pelo id
*/

// ### RESOLVENDO COM PROMISES E MÓDULO INTERNO DO NODE ###
// seguindo o padrão callback o node consegue fazer essa
// conversão sem problemas, transformando uma função
// callback em uma promise, sem precisar alterar nada
// neste exemplo fazemos isso apenas com a função obterEndereco
// as outras duas já são promisse e não precisao de conversão


// ### RESOLVENDO COM ASYNC E AWAIT

function obterUsuario(callback) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new error('DEU ERRO DE VERDADE!')
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                numero: '91929192',
                ddd: '81'
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    return new Promise(function resolverEndereco(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'Capitão Vicente Moutinho',
                numero: '85',
                bairro: 'Areias',
                cidade: 'Recife'
            })
        }, 2000)
    })
}

main()
async function main() {
    try {
        console.time('tempoExecucao') // forma de medir o tempo de execução do código
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.numero},
            Endereço: Rua ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}.
        `)
        console.timeEnd('tempoExecucao')
        // // sem promise all (com promise all executa todos que não dependem de uma só vez)
        // console.time('tempoExecucao') // forma de medir o tempo de execução do código
        // const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEndereco(usuario.id)
        // console.log(`
        //     Nome: ${usuario.nome}
        //     Telefone: (${telefone.ddd}) ${telefone.numero},
        //     Endereço: Rua ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}.
        // `)
        // console.timeEnd('tempoExecucao')
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

// // ### RESOLVENDO COM PROMISES E MÓDULO INTERNO DO NODE ###
// // seguindo o padrão callback o node consegue fazer essa
// // conversão sem problemas, transformando uma função
// // callback em uma promise, sem precisar alterar nada
// // neste exemplo fazemos isso apenas com a função obterEndereco
// // as outras duas já são promisse e não precisao de conversão


// const util = require('util') // só para o obterEndereco
// const obterEnderecoAsync = util.promisify(obterEndereco) // só para o obterEndereco

// function obterUsuario(callback) {
//     // quando der algum problema -> reject(ERRO)
//     // quando tudo acontecer com sucesso -> resolve()
//     return new Promise(function resolvePromise(resolve, reject) {
//         setTimeout(function () {
//             // return reject(new error('DEU ERRO DE VERDADE!')
//             return resolve({
//                 id: 1,
//                 nome: 'Aladin',
//                 dataNascimento: new Date()
//             })
//         }, 1000)
//     })


// }

// function obterTelefone(idUsuario) {
//     return new Promise(function resolverPromise(resolve, reject) {
//         setTimeout(() => {
//             return resolve({
//                 numero: '91929192',
//                 ddd: '81'
//             })
//         }, 2000)
//     })
// }

// function obterEndereco(idUsuario, callback) {
//     setTimeout(() => {
//         return callback(null, {
//             rua: 'Capitão Vicente Moutinho',
//             numero: '85',
//             bairro: 'Areias',
//             cidade: 'Recife'
//         })
//     }, 2000)
// }

// const usuarioPromisse = obterUsuario()
// // para manipular o sucesso usamos o .then
// // para manipular erros usamos o .catch
// usuarioPromisse
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//             .then(function (telefone) {
//                 return {
//                     usuario, telefone
//                 }
//             })
//     })
//     .then(function (usuarioTelefone) {
//         return obterEnderecoAsync(usuarioTelefone.usuario.id)
//             .then(function (endereco) {
//                 return {
//                     usuario: usuarioTelefone.usuario,
//                     telefone: usuarioTelefone.telefone,
//                     endereco: endereco
//                 }
//             })
//     })
//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero},
//             Endereço: Rua ${resultado.endereco.rua}, ${resultado.endereco.numero}, ${resultado.endereco.bairro}, ${resultado.endereco.cidade}.
//         `)
//     })
//     .catch(function (error) {
//         console.error('DEU RUIM', error)
//     })


// ### FORMA DE RESOLVER ANTIGA COM CALLBACKS ###

// function obterUsuario(callback) {
//     setTimeout(function() {
//         return callback(null, {
//             id: 1,
//             nome: 'Aladin',
//             dataNascimento: new Date()
//         })
//     }, 1000)
// }
// function obterTelefone(idUsuario, callback) {
//     setTimeout(() => {
//         return callback(null , {
//             numero: '91929192',
//             ddd: '81'
//         })
//     }, 2000)
// }
// function obterEndereco(idUsuario, callback) {
//     setTimeout(() => {
//         return callback(null , {
//             rua: 'Capitão Vicente Moutinho',
//             numero: '85',
//             bairro: 'Areias',
//             cidade: 'Recife'
//         })
//     }, 2000)
// }
// obterUsuario(function resolverUsuario(erro, usuario) {
//     // null || '' || 0 === false
//     if (erro) {
//         console.error('Erro: ', erro)
//         return
//     }
//     obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
//         if (erro1) {
//             console.error('Erro1: ', erro)
//             return
//         }
//         obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//             if (erro2) {
//                 console.error('Erro2: ', erro2)
//                 return
//             }

//             console.log(`
//                 Nome: ${usuario.nome}
//                 Telefone: (${telefone.ddd}) ${telefone.numero},
//                 Endereço: Rua ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}.
//             `)

//         })
//     })

// })