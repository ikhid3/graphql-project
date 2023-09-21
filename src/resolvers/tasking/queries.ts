import { IMockStore } from '@graphql-tools/mock'

import { QueryTaskByIdArgs, QueryTasksByApplicationArgs } from '../../app/schema'

export function tasksByApplication(store: IMockStore) {
  return (_: unknown, args: QueryTasksByApplicationArgs): unknown => {
    return store.get('LoanApplication', args.application_guid, 'tasks')
  }
}
export function taskById(store: IMockStore) {
  return (_: unknown, args: QueryTaskByIdArgs): unknown => {
    return store.get('BorrowerTask', args.task_id)
  }
}
