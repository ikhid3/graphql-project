import { IMockStore } from '@graphql-tools/mock'
import { fetch } from '@whatwg-node/fetch'

import { user } from '../store/user'

interface QueryBody {
  name: string
  queryString: string
  variables?: unknown
}

export function seedStore(store: IMockStore): void {
  store.set('User', user.id, user)
}

export async function queryStagingStore<T = any>(body: QueryBody): Promise<T> {
  const response = await fetch('https://app.staging.splashfinancial.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      operationName: body.name,
      query: body.queryString,
      variables: body?.variables ?? {}
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json.data
}
