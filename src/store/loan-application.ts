import {
  ApplicationStatuses,
  ApplicationType,
  EducationInfo,
  EmploymentInfo,
  HousingInfo,
  LoanApplication,
  PersonalLoanPurposes,
  Products,
  User
} from '../app/schema'
import { borrowerRateRequest } from './borrower-rate-request'
import { educationInfo } from './education-info'
import { employmentInfo } from './employment-info'
import { housingInfo } from './housing-info'
import { personalInfo } from './personal-info'
import { tasks } from './tasks'

export const newApplication: Partial<LoanApplication> = {
  id: '1',
  application_guid: '1',
  type: ApplicationType.Borrower,
  created_at: new Date().toISOString(),
  status_id: ApplicationStatuses.PreQualificationPersonalInformation,
  from_API: false,
  isActive: true,
  resident_or_fellow: false,
  hasIncompleteDocuments: false,
  hasCounterOffer: false,
  auth_status_id: null,
  latestAuthStatusDate: null,
  loan_purpose: null,
  educationInfo: null,
  employmentInfo: null,
  housingInfo: null,
  personalInfo: null,
  latestCreditKarmaRequest: null,
  latestBorrowerRateRequest: null,
  selectedRate: null,
  rateSource: null,
  tasks: [],
  directPayInfo: null,
  creditAgreement: null,
  incomeInfo: [],
  latestIntentToAutopay: null,
  loan_owners: [],
  product: Products.PersonalLoan
}
const user = {}

export const PersonalLoanApplication: LoanApplication = {
  id: '1',
  status_id: ApplicationStatuses.Housing,
  application_guid: '1',
  cosigner_guid: null,
  cosignerReapplyDate: null,
  total_loan_amount: 13000,
  loan_owners: [],
  resident_or_fellow: false,
  type: ApplicationType.Borrower,
  refinance_reason: null,
  loan_purpose: PersonalLoanPurposes.DebtConsolidation,
  isActive: true,
  product: Products.PersonalLoan,
  created_at: new Date().toISOString(),
  educationInfo: educationInfo as EducationInfo,
  employmentInfo: employmentInfo as EmploymentInfo,
  incomeInfo: [],
  latestIntentToAutopay: null,
  personalInfo,
  housingInfo: housingInfo as HousingInfo,
  tasks,
  latestBorrowerRateRequest: borrowerRateRequest,
  user: user as User,
  from_API: false,
  hasCounterOffer: false,
  hasIncompleteDocuments: false,
  selectedRate: null,
  rateSource: null,
  latestCreditKarmaRequest: null,
  directPayInfo: null,
  creditAgreement: null,
  loans: null,
  approval_date: null,
  auth_status_id: null,
  autoDebitInfo: null,
  documents: null,
  latestAuthStatusDate: null,
  lenderType: null,
  paymentInfo: null,
  signoff: null,
  success: null,
  totalRefinanceAmount: null,
  underwritingInfo: null
}
