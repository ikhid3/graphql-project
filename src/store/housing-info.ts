import { HousingInfo, HousingStatuses } from '../app/schema'

export const housingInfo: Partial<HousingInfo> = {
  id: '1',
  address1: null,
  address2: null,
  city: null,
  state: null,
  zip_code: null,
  status: HousingStatuses.Rent,
  monthly_housing_cost: 100
}
