import { BorrowerRateRequest, LoanApplication } from '../app/schema'
import { offers } from './rate'
import { rateSource } from './rate-source'

const loanApplication = {}
export const borrowerRateRequest: BorrowerRateRequest = {
  id: 'borrower-rate-request',
  updated_at: new Date().toISOString(),
  loan_amount_cents: 1000000,
  borrowerRates: offers,
  lowestRatePerTerm: offers,
  applicationDenialInfos: [],
  creditKarmaRequest: null,
  created_at: new Date().toISOString(),
  rate_source_id: rateSource,
  application_id: loanApplication as LoanApplication
}
