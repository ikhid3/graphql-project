import { server } from './apollo'
import { app, httpServer } from './express'
import { bodyParser, contextProvider, corsHandler, logger } from './express-middleware'

server.start().then(() => {
  app.use('/', corsHandler, bodyParser, logger, contextProvider(server))
  httpServer.listen({ port: 4001 }, () => {
    console.error(`🚀 Server ready at http://localhost:4001`)
  })
})
