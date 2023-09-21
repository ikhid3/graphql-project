import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { mocks } from '../app/mocks'
import { resolvers } from '../app/resolvers'
import { typeDefs } from './file-system'

export { schema }

const schema = addMocksToSchema({
  schema: makeExecutableSchema({ typeDefs }),
  resolvers,
  preserveResolvers: true,
  mocks
})
