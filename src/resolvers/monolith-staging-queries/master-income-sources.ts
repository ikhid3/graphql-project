import { queryStagingStore } from '../../app/lib'
import { MasterIncomeSource } from '../../app/schema'

export async function masterIncomeSources(): Promise<MasterIncomeSource[]> {
  const data = await queryStagingStore<{ master_income_sources: MasterIncomeSource[] }>({
    name: 'AllIncomeSources',
    queryString: /* GraphQL */ `
      query AllIncomeSources {
        master_income_sources(display: true) {
          id
          source
          value
        }
      }
    `
  })

  return data?.master_income_sources
}
