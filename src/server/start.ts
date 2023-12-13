import { ListenOptions } from 'net'
import { createGraphQLServer } from '../library/apollo'
import { createHttpServer, createHttpListener } from '../library/express'
import { bodyParser, contextProvider, corsHandler, logger } from '../library/express-middleware'
import { RequestHandler } from 'express'


const ping = (options: ListenOptions) => { console.info(`🚀 Server ready at http://${options.host}:${options.port}`) }

const options: ListenOptions = {  host: 'localhost', port: 4001, path: '/graphql'}
const listener = createHttpListener()
const server = createHttpServer(listener) 
const graphql = createGraphQLServer(server)
const middleware: RequestHandler[] = [corsHandler, bodyParser, logger, contextProvider(graphql)]

listener.use(...middleware)

server.listen(options, () => ping(options))

graphql.start()
