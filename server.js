const fastify = require ('fastify')({logger: true})
const PORT = 8082

fastify.get('/beerreviews', (req, res) => {
    res.send({ test: 'Hello Beer Review' })
})

const start = async () => {
    try {
        await fastify.listen(PORT)
    }catch(error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()