import { Citizenships, PermanentResidencyLengths, PersonalInfo } from '../app/schema'

export const personalInfo: PersonalInfo = {
  id: '1',
  address1: '969 Paxton Lake Drive',
  address2: '',
  city: 'Loveland',
  state: 'OH',
  zip_code: '45140',
  dob: '1992-04-28',
  phone: '(555) 555-5555',
  months_at_address: null,
  citizenship: Citizenships.UsCitizen,
  resident_alien_min_10_years: false,
  permanent_residency_length: PermanentResidencyLengths.FromTwoToNineYears,
  total_assets: null,
  social_security_last_four: null,
  last_change_of_address: null,
  isSsnVerified: false
}
