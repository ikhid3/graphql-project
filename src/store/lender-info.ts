import { Lender } from '../app/schema'

export const Achieva: Lender = {
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
      login_url: 'https://firstmark.myloanmanager.com/Account/Login',
      email: 'customer.service@firstmarkservices.com'
    }
  },
  global_identity: 'achieva',
  direct_pay_enabled: false,
  finalInformation: {
    PersonalLoan: {
      markdown:
        'In order to provide you with your selected interest rate, Splash has partnered with Achieva Credit Union as the lender of your loan.',
      modals: []
    }
  }
}

export const FirstFed: Lender = {
  id: '20',
  display_name: 'First Fed',
  logo_condensed: 'https://app.staging.splashfinancial.com/images/rates/firstfed-logo-sm.svg',
  logo_full: 'https://app.staging.splashfinancial.com/images/rates/firstfed-logo-lg.svg',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sagittis nisl, eu gravida ipsum. Sed quis risus tristique, consectetur nisi in, ullamcorper massa. Nullam at enim sapien. Vestibulum tristique est ut libero ullamcorper, quis tempor ante sollicitudin. Nunc euismod et ipsum a ultricies. Morbi faucibus in augue in feugiat.',
  hasMembershipAccount: false,
  hasCheckingAccount: false,
  offline: false,
  disclosures:
    'Fixed Rate options range from 4.99% to 19.99%. Annual Percentage Rate [APR] is the cost of credit calculating the interest rate, loan amount, repayment term, and the timing of payments. If approved by the lender, your rate will vary based on such things as your credit score, credit usage history, loan term, and other factors. Rates are subject to change without notice and are accurate as of 06/01/2022.',
  checkingAccountRequirements: null,
  hasMedicalProgram: false,
  is_platform: true,
  terms_checklist: ['I have read and agree to the Terms and Conditions.'],
  ach_discount_text: null,
  privacy_policy_url: 'https://app.staging.splashfinancial.com/pdfs/First_Fed_Privacy_Policy.pdf',

  servicer: {
    StudentLoanRefinancing: {
      display_name: 'Firstmark via Splash',
      logo: 'https://app.staging.splashfinancial.com/images/rates/firstmark-logo-sm.png',
      phone_number: null,
      url: null,
      login_url: null,
      email: null
    },
    PersonalLoan: {
      display_name: 'Firstmark via Splash',
      logo: 'https://app.staging.splashfinancial.com/images/rates/firstmark-logo-sm.png',
      phone_number: '888-538-7378',
      url: 'https://firstmark.myloanmanager.com',
      login_url: 'https://firstmark.myloanmanager.com/Account/Login',
      email: 'customer.service@firstmarkservices.com'
    }
  },
  global_identity: 'first-fed',
  direct_pay_enabled: false,
  finalInformation: {
    PersonalLoan: {
      markdown:
        'In order to provide you with your selected interest rate, Splash has partnered with First Fed as the lender of your loan.',
      modals: null
    }
  }
}
