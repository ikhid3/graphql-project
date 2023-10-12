import { IMockStore } from '@graphql-tools/mock'
import { fetch } from '@whatwg-node/fetch'


interface QueryBody {
  name: string
  queryString: string
  variables?: unknown
}

export function seedStore(store: IMockStore): void {
  store.set('Project', '1', {})
}

export async function queryExternalStore<T = any>(body: QueryBody): Promise<T> {
  const response = await fetch('', {
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
