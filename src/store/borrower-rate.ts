import { BorrowerRate, RateCalculationTypes, RateTypes } from '../api/schema'

export const selectedRate: Partial<BorrowerRate> = {
  id: 'selected-rate',
  monthly_payment_cents: null,
  rateBp: 0,
  rateType: RateTypes.Fixed,
  termYears: 8,
  offerUrl: null,
  apr: 0,
  ach_discount_amount: 0,
  discountedRate: 0,
  isExpired: false,
  origination_fee: 0,
  selected: true,
  rateCalculationType: RateCalculationTypes.Splel,
  netDisbursedAmount: 19000,
  netDisbursedAmountCents: 1900000,
  totalLoanAmount: 20000,
  totalLoanAmountCents: 1000000,
  is_topup_offer: true
}
