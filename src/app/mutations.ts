import { IMockStore, Ref } from '@graphql-tools/mock'

import { saveDirectPayAllocations, saveDirectPayUserPreference } from '../resolvers/los/mutations'
import { createApplication, updateApplicationMutation } from '../resolvers/monolith-local/mutations'
import { updateTaskMutation } from '../resolvers/tasking/mutations'
import { selectedRate } from '../store/borrower-rate'
import { Achieva } from '../store/lender-info'
import { tasks } from '../store/tasks'
import {
  ApplicationStatuses,
  Mutation,
  MutationCreateRatesRequestArgs,
  MutationSelectBorrowerRateArgs,
  MutationSubmitLoanApplicationArgs,
  MutationVerifySsnArgs
} from './schema'

export { mutations }

function mutations(store: IMockStore): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in keyof Mutation]?: (a: unknown, args: any, x: unknown, y: unknown) => unknown
} {
  return {
    createApplication: createApplication.bind({ store }),
    updateApplication: updateApplicationMutation.bind({ store }),
    saveDirectPayUserPreference: saveDirectPayUserPreference.bind({ store }),
    saveDirectPayAllocations: saveDirectPayAllocations.bind({ store }),
    updateTask: updateTaskMutation.bind({ store }),
    addPlaidLoans() {},
    affiliateSignup() {},
    confirmApplicationDetails() {},
    confirmOffer() {},
    createAffiliateApiRecord() {},
    createCreditKarmaRequest() {},
    createPartnerTracking() {},
    createPrimaryIncomeBankingInfoRecord() {},
    createRatesRequest(_: unknown, args: MutationCreateRatesRequestArgs) {
      return {
        application: store.get('LoanApplication', args.input.application_guid),
        noRatesReasons: [],
        rates: []
      }
    },
    createTopUpOfferRequest() {},
    deleteLoan() {},
    forgotPassword() {},
    getRates() {},
    login() {},
    logout() {},
    otpRequestId() {},
    plaidLinkToken() {},
    registerPlaidPublicToken() {},
    resetPassword() {},
    restoreLoan() {},
    selectBorrowerRate(_: unknown, args: MutationSelectBorrowerRateArgs, x: unknown, y: unknown) {
      const rateRequest = store.get('LoanApplication', '1', 'latestBorrowerRateRequest') as Ref
      const rates = store.get(rateRequest, 'borrowerRates') as Ref[]

      const selected = rates.find((rate) => rate.$ref.key === args.input.borrower_rate_id)

      if (selected) {
        console.error(selected)
        store.set(selected, { selected: true })
        store.set('LoanApplication', '1', 'selectedRate', null)
        store.set('LoanApplication', '1', 'selectedRate', { ...selectedRate, id: selected.$ref.key })
        store.set('LoanApplication', '1', 'rateSource', {
          id: '1',
          isPlatform: true,
          display: 'Nelnet Bank',
          lender: Achieva
        })
      }

      return true
    },
    signUpUser() {},
    signUpUserFromApi() {},
    signUpUserShell() {},
    startQAFlow() {},
    submitLoanApplication(_, args: MutationSubmitLoanApplicationArgs) {
      const app = store.get('LoanApplication', args.input.application_guid) as Ref

      store.set(app, 'status_id', ApplicationStatuses.Housing)
      store.set(app, 'tasks', tasks)

      return true
    },
    submitPlatformApplication() {},
    updateAutoDebit() {},
    validateBonusQuestion() {},
    validateQAQuestions() {},
    verifyOtpCode() {},
    verifySsn(_: unknown, args: MutationVerifySsnArgs, x: unknown, y: unknown) {
      const app = store.get('LoanApplication', '1') as Ref
      const personalInfo = store.get(app, 'personalInfo') as Ref

      store.set(personalInfo, { isSsnVerified: true })

      return store.get('LoanApplication', '1')
    }
  }
}
