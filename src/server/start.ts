import { ListenOptions } from 'net'
import { createGraphQLServer } from '../library/apollo'
import { createHttpServer, createHttpListener } from '../library/express'
import { bodyParser, contextProvider, corsHandler, logger } from '../library/express-middleware'
import { RequestHandler } from 'express'

const options: ListenOptions = {  host: 'localhost', port: 4001, path: '/graphql'}
const listener = createHttpListener()
const server = createHttpServer(listener) 
const graphql = createGraphQLServer(server)

graphql.start().then(() => {
  const middleware: RequestHandler[] = [corsHandler, bodyParser, logger, contextProvider(graphql)]
  listener.use(...middleware)
  server.listen(options, () => { console.info(`🚀 Server ready at http://${options.host}:${options.port}`) })
})