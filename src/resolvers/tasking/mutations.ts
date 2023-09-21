import { IMockStore, Ref } from '@graphql-tools/mock'

import { MutationUpdateTaskArgs, TaskStatuses } from '../schema'

export function updateTaskMutation(
  this: { store: IMockStore },
  _: unknown,
  { input: { application_guid: guid, ...rest } }: MutationUpdateTaskArgs
): unknown {
  const tasks = this.store.get('LoanApplication', guid, 'tasks') as Ref[]
  const task = tasks.find((task) => task.$ref.key === rest.id) as Ref

  this.store.set(task, 'status', TaskStatuses.Complete)
  this.store.set(task, 'metadata', rest.meta)

  this.store.set('TaskUpdateResponse', guid, 'status', this.store.get(task, 'status'))
  this.store.set('TaskUpdateResponse', guid, 'tasks', tasks)

  return this.store.get('TaskUpdateResponse', guid)
}
