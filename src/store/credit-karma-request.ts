import { CreditKarmaRequest } from '../../config/schema'

export const creditkarmaRequest: CreditKarmaRequest = {
  id: 'credit-karma-request',
  ck_tracking_id: '1',
  request_type: 'abc',
  offer_amount: {
    currency_amount: '0.00',
    currency_code: 'USD'
  },
  offer_apr_bp: 0,
  offer_term_months: 0
}
