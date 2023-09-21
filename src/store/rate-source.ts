import { RateSource } from '../app/schema'

export const rateSource: RateSource = {
  id: 'rate-source',
  isPlatform: true,
  display: 'Mock Lender',
  lender: {
    id: '25',
    display_name: 'Achieva Credit Union',
    logo_condensed: 'https://app.staging.splashfinancial.com/images/rates/Achieva-Logo-Sm.svg',
    logo_full: 'https://app.staging.splashfinancial.com/images/rates/Achieva-Logo-Lg.svg',
    summary:
      'Achieva Credit Union has been locally servicing their community since 1937. We offer the full spectrum of lending and banking solutions for your personal and business needs.',
    hasMembershipAccount: true,
    hasCheckingAccount: false,
    offline: false,
    disclosures: '',
    checkingAccountRequirements: null,
    hasMedicalProgram: false,
    is_platform: true,
    terms_checklist: ['I have read and agree to the Terms & Conditions.'],
    ach_discount_text: null,
    privacy_policy_url: 'https://app.staging.splashfinancial.com/pdfs/Achieva_Privacy_Policy.pdf',
    servicer: {
      StudentLoanRefinancing: null,
      PersonalLoan: {
        display_name: 'Firstmark via Splash',
        logo: 'https://app.staging.splashfinancial.com/images/rates/firstmark-logo-sm.png',
        phone_number: '888-538-7378',
        url: 'https://firstmark.myloanmanager.com',
        login_url: 'https://firstmark.myloanmanager.com/login',
        email: 'customer.service@firstmarkservices.com'
      }
    },
    direct_pay_enabled: true,
    global_identity: 'dd',
    finalInformation: {
      PersonalLoan: {
        markdown: ''
      }
    }
  }
}
