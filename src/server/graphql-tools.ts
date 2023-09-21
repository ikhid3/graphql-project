import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { mocks } from '../data/mocks'
import { resolvers } from '../data/resolvers'
import { typeDefs } from './file-system'

export { schema }

const schema = addMocksToSchema({
  schema: makeExecutableSchema({ typeDefs }),
  resolvers,
  preserveResolvers: true,
  mocks
})
