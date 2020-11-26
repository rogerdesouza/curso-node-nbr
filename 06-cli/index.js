const database = require('./database')

async function main() {
    try {
        const dados = await database.listar()
    } catch (error) {
        console.error(error)
    }
}

main()