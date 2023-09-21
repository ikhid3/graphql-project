import { IMockStore } from '@graphql-tools/mock'

import { FraudResponse, FraudStatus, QueryApplicationByGuidArgs } from '../../app/schema'
import { user } from '../../store/user'

export function me(store: IMockStore) {
  return (): unknown => {
    return store.get('User', user.id)
  }
}

export function applicationByGuid(store: IMockStore) {
  return (_: unknown, args: QueryApplicationByGuidArgs): unknown => store.get('LoanApplication', args.application_guid)
}

export function fraudStatus(): FraudResponse {
  return { fraud_status: FraudStatus.Pass, next_step: null }
}
