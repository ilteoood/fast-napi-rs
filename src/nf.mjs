import { createSigner } from 'fast-jwt'
import fastify from 'fastify'

const signSync = createSigner({ key: 'secret', algorithm: 'HS512' })

const server = fastify({logger: true})

server.post('/', (req) => ({
    token: signSync(req.body)
}))

await server.listen({port: 3000})