import { IMockStore } from '@graphql-tools/mock'
import { IResolvers } from '@graphql-tools/utils'

import { seedStore } from './sources'

export { resolvers }

function resolvers(store: IMockStore): IResolvers {
  seedStore(store)
  return {
    Query: {},
    Mutations: {}
  }
}
