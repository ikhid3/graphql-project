import { IMockStore, Ref } from '@graphql-tools/mock'

import { SaveDirectPayAllocationsInput, SaveDirectPayUserPreferenceInput } from '../schema'

export function saveDirectPayUserPreference(
  this: { store: IMockStore },
  _: unknown,
  input: SaveDirectPayUserPreferenceInput
): boolean {
  try {
    console.error(input)
    const appRef = this.store.get('LoanApplication', input.application_guid) as Ref
    const dpRef = this.store.get(appRef, 'directPayInfo') as Ref

    console.error(this.store.get('DirectPayInfo', dpRef.$ref.key, 'opt_in_status'))
    this.store.set('DirectPayInfo', dpRef.$ref.key, 'opt_in_status', input.status)

    console.error(this.store.get('DirectPayInfo', dpRef.$ref.key, 'opt_in_status'))
  } catch (e) {
    console.error(e)
  }

  return true
}

export function saveDirectPayAllocations(
  this: { store: IMockStore },
  _: unknown,
  input: SaveDirectPayAllocationsInput
): boolean {
  return true
}
