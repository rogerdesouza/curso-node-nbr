// // ### Exemplo 1 criando um emitter ###

// const EventEmitter = require('events')

// class MeuEmissor extends EventEmitter {
    
// }

// const meuEmissor = new MeuEmissor()
// const nomeEvento = 'usuario:click'
// meuEmissor.on(nomeEvento, function (click) {
//     console.log('Um usuário clicou', click)
// })

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')


// ### Exemplo 2 escutando um evento to terminal
const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`Você digitou: ${value.toString().trim()}`)
})