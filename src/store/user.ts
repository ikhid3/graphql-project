import { User } from '../app/schema'
import { PersonalLoanApplication } from './loan-application'

const user: User = {
  id: 'dev-user',
  email: 'splashtest0+123456@gmail.com',
  user_token: 'dev-user',
  first_name: 'Splash',
  last_name: 'Developer',
  ipAddress: '',
  currentLoanApplication: PersonalLoanApplication,
  loanApplications: [PersonalLoanApplication],
  partnerTracking: null,
  latestApprovalDate: null,
  messages: null
}

export { user }
