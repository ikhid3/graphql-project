import { IMockStore, Ref } from '@graphql-tools/mock'

import { newApplication } from '../../store/loan-application'
import {
  ApplicationStatuses,
  LoanApplication,
  MutationCreateApplicationArgs,
  MutationUpdateApplicationArgs
} from '../schema'

export function createApplication(this: { store: IMockStore }, _: unknown, args: MutationCreateApplicationArgs): Ref {
  try {
    const application = { ...(newApplication as LoanApplication) }
    application.id = '1'
    application.application_guid = '1'
    application.product = args.appInput.product
    application.status_id = ApplicationStatuses.PreQualificationPersonalInformation
    const applications = this.store.get('User', 'dev-user', 'loanApplications') as Array<Ref | LoanApplication>
    if (Array.isArray(applications)) {
      applications.push(application)
      this.store.set('User', 'dev-user', 'loanApplications', applications)
      this.store.set('User', 'dev-user', 'currentLoanApplication', application)
    } else {
      this.store.set('User', 'dev-user', 'loanApplications', [application])
      this.store.set('User', 'dev-user', 'currentLoanApplication', application)
    }
    return this.store.get('LoanApplication', application.id) as Ref
  } catch (e) {
    console.error(e)
  }
  const response = {}
  return response as Ref
}

export function updateApplicationMutation(
  this: { store: IMockStore },
  _: unknown,
  { appInput: { id, ...data } }: MutationUpdateApplicationArgs
): Ref {
  const {
    employmentInfoSingular,
    housingInfo,
    personalInfo,
    incomeInfo,
    educationInfoSingular,
    loans,
    user: userInput,
    intentToAutopay,
    ...app
  } = data

  if (employmentInfoSingular?.upsert) {
    if (employmentInfoSingular.upsert.id === '') {
      employmentInfoSingular.upsert.id = '1'
    }
    console.error(employmentInfoSingular)
    this.store.set('LoanApplication', id, 'employmentInfo', employmentInfoSingular?.upsert)
  }

  if (housingInfo?.upsert) {
    if (housingInfo.upsert.id === '') {
      housingInfo.upsert.id = '1'
    }
    console.error(housingInfo)
    this.store.set('LoanApplication', id, 'housingInfo', housingInfo?.upsert)
  }
  if (intentToAutopay?.upsert) {
    console.error(intentToAutopay)
    this.store.set('LoanApplication', id, 'latestIntentToAutopay', {
      intends_to_autopay: intentToAutopay.upsert[0]!.intends_to_autopay
    })
  }

  const ssn = personalInfo?.upsert?.ssn
  delete personalInfo?.upsert?.ssn
  personalInfo?.upsert &&
    this.store.set('LoanApplication', id, 'personalInfo', { ...personalInfo?.upsert, social_security_last_four: ssn })

  incomeInfo?.upsert && this.store.set('LoanApplication', id, 'incomeInfo', incomeInfo?.upsert)

  userInput?.upsert?.id && this.store.set('User', userInput.upsert.id, userInput?.upsert)

  if (educationInfoSingular?.upsert) {
    if (educationInfoSingular.upsert.id === '') {
      educationInfoSingular.upsert.id = '1'
    }
    console.error(educationInfoSingular)
    this.store.set('LoanApplication', id, 'educationInfo', educationInfoSingular?.upsert)
  }
  app && this.store.set('LoanApplication', id, app)

  return this.store.get('LoanApplication', id) as Ref
}
