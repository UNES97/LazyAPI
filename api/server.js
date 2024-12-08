const Fastify = require('fastify');
require('dotenv').config()

const fastify = Fastify({
    logger: true
})

fastify.get('/', async function handler (request, reply) {
    return { message: 'LazyAPI' }
})

fastify.listen({ port: process.env.APP_PORT || 3001, host: process.env.APP_HOST }, (err) => {            
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})