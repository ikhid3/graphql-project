import { IMockStore } from '@graphql-tools/mock'
import { IResolvers } from '@graphql-tools/utils'

import { applicationByGuid, fraudStatus, me } from '../resolvers/monolith-local/queries'
import { allDegrees } from '../resolvers/monolith-staging-queries/all-degrees'
import { masterIncomeSources } from '../resolvers/monolith-staging-queries/master-income-sources'
import { taskById, tasksByApplication } from '../resolvers/tasking/queries'
import { seedStore } from './lib'

export { resolvers }

function resolvers(store: IMockStore): IResolvers {
  seedStore(store)
  return {
    Query: {
      me,
      applicationByGuid,
      fraudStatus,
      tasksByApplication: tasksByApplication(store),
      taskById: taskById(store),
      master_income_sources: masterIncomeSources,
      degrees: allDegrees
    }
  }
}
