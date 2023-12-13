import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import { schema } from './graphql-tools'
import { Server } from 'http'

export function createGraphQLServer(httpServer: Server){
  return new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })
}
