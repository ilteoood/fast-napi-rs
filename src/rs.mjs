import { Algorithm, signSync } from '@node-rs/jsonwebtoken'
import fastify from 'fastify'

const server = fastify({logger: true})

server.post('/', (req) => ({
    token: signSync({ data: req.body }, 'private', { algorithm: Algorithm.HS512 })
}))

await server.listen({port: 3000})