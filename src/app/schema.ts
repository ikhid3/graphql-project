export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any
}

export interface Query {
  __typename?: 'Query'
  /** Returns the currently logged-in user. */
  me?: Maybe<User>
  /** All schools that Splash Financial Supports */
  aggregateSchools: AggregateSchool[]
  bankInfo?: Maybe<BankInfoResponse>
  /** A list of schools that match the given (partial or complete) name */
  schoolsSearch: AggregateSchool[]
  /** Returns a school given its ID */
  aggregateSchool?: Maybe<AggregateSchool>
  /** All degrees that Splash Financial Supports */
  degrees?: Maybe<Array<Maybe<Degree>>>
  /** Returns all employment statuses that Splash Financial Supports. */
  employment_statuses: EmploymentStatusInfo[]
  /** Returns all occupations that Splash Financial Supports. */
  occupations: Occupation[]
  /** Returns all active loan servicers that Splash Financial Supports. */
  servicers: LoanServicer[]
  /** Returns all active loan lenders that Splash Financial Supports. Not associated with lenders whose rates appear on the website. */
  lenders: LoanLender[]
  /** Returns the different available types for student loans */
  studentLoanTypes: LoanType[]
  /** Returns a degree's degree type given its ID */
  degreeType?: Maybe<Degree>
  /** Returns all Laurel Road medical specialities */
  laurel_road_medical_specialty: LaurelRoadMedicalSpecialty[]
  master_income_sources: MasterIncomeSource[]
  states: State[]
  rates?: Maybe<Rate[]>
  borrowerRatesRequest?: Maybe<BorrowerRateRequest>
  personalRates?: Maybe<Rate[]>
  applicationByGuid?: Maybe<LoanApplication>
  reviewOfferInfo?: Maybe<ReviewOfferInfo>
  applicationById?: Maybe<LoanApplication>
  lenderInfo?: Maybe<Lender>
  softDeniedCosignerInfo?: Maybe<DeniedCosignerInfo>
  /** Returns the fraud status of a particular userId and appGuid. */
  fraudStatus?: Maybe<FraudResponse>
  plaidData?: Maybe<PlaidDataResponse>
  /** Returns the matching institutions based on input criteria */
  plaidInstitutions?: Maybe<PlaidInstitutionsQueryResponse>
  jobTitle: JobTitle[]
  loanDetails?: Maybe<LoanDetailsResponse>
  /** Returns an array of tasks by app guid */
  tasksByApplication: BorrowerTask[]
  /** Returns a task by app guid and task id */
  taskById?: Maybe<BorrowerTask>
  /** Returns the rate information for an encrypted BorrowerRate ID that was generated through the affiliate rates API. */
  ratesApiBorrowerRate?: Maybe<RatesApiBorrowerRateResponse>
  /** Returns a userById */
  getUserById?: Maybe<User>
  /** Returns the closed loan information for loans originating from a particular partner over a specified period of time. */
  getAffiliateClosedLoanInfo?: Maybe<Array<Maybe<AffiliateClosedLoanInfo>>>
  allowableMimeTypesForRestrictedSubtypes: AllowableTypesBySubtype[]
}

export interface QueryBankInfoArgs {
  application_guid: Scalars['ID']
}

export interface QuerySchoolsSearchArgs {
  name: Scalars['String']
}

export interface QueryAggregateSchoolArgs {
  id: Scalars['ID']
}

export interface QueryDegreesArgs {
  display?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<QueryDegreesOrderByOrderByClause[]>
}

export interface QueryEmployment_StatusesArgs {
  display?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<QueryEmploymentStatusesOrderByOrderByClause[]>
}

export interface QueryOccupationsArgs {
  display?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<QueryOccupationsOrderByOrderByClause[]>
}

export interface QueryServicersArgs {
  active?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<QueryServicersOrderByOrderByClause[]>
}

export interface QueryLendersArgs {
  active?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<QueryLendersOrderByOrderByClause[]>
}

export interface QueryStudentLoanTypesArgs {
  display?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<QueryStudentLoanTypesOrderByOrderByClause[]>
}

export interface QueryDegreeTypeArgs {
  id: Scalars['ID']
}

export interface QueryMaster_Income_SourcesArgs {
  display?: Maybe<Scalars['Boolean']>
}

export interface QueryRatesArgs {
  id: Scalars['ID']
}

export interface QueryBorrowerRatesRequestArgs {
  id: Scalars['ID']
}

export interface QueryPersonalRatesArgs {
  id: Scalars['ID']
}

export interface QueryApplicationByGuidArgs {
  application_guid: Scalars['ID']
}

export interface QueryReviewOfferInfoArgs {
  application_guid: Scalars['ID']
}

export interface QueryApplicationByIdArgs {
  id: Scalars['ID']
}

export interface QueryLenderInfoArgs {
  id: Scalars['ID']
}

export interface QuerySoftDeniedCosignerInfoArgs {
  application_guid: Scalars['ID']
}

export interface QueryFraudStatusArgs {
  application_guid: Scalars['ID']
}

export interface QueryPlaidDataArgs {
  application_guid: Scalars['ID']
  plaidItemId: Scalars['ID']
}

export interface QueryPlaidInstitutionsArgs {
  input?: Maybe<PlaidInstitutionsQueryInput>
}

export interface QueryJobTitleArgs {
  searchText: Scalars['String']
}

export interface QueryLoanDetailsArgs {
  application_guid: Scalars['ID']
}

export interface QueryTasksByApplicationArgs {
  application_guid: Scalars['ID']
}

export interface QueryTaskByIdArgs {
  application_guid: Scalars['ID']
  task_id: Scalars['ID']
}

export interface QueryRatesApiBorrowerRateArgs {
  rate_id: Scalars['String']
}

export interface QueryGetUserByIdArgs {
  id: Scalars['ID']
}

export interface QueryGetAffiliateClosedLoanInfoArgs {
  partner_id: Scalars['ID']
  product_id: Scalars['ID']
  from_date: Scalars['DateTime']
  to_date?: Maybe<Scalars['DateTime']>
}

/** A user that represents an end user's account. */
export interface User {
  __typename?: 'User'
  id: Scalars['ID']
  email: Scalars['String']
  /** A GUID that can be used to uniquely identify a user. This is what is used to identify/bucket user's via optimizely. */
  user_token: Scalars['String']
  first_name: Scalars['String']
  last_name: Scalars['String']
  currentLoanApplication?: Maybe<LoanApplication>
  /** A list of the LoanApplications that belong to the user. */
  loanApplications?: Maybe<Array<Maybe<LoanApplication>>>
  /** A list of messages in the user's "inbox" */
  messages?: Maybe<Array<Maybe<Message>>>
  /** The latest application approval date for the user */
  latestApprovalDate?: Maybe<Scalars['DateTime']>
  /** A list of PartnerTracking records that belong to the user */
  partnerTracking?: Maybe<Array<Maybe<PartnerTracking>>>
  ipAddress: Scalars['String']
  suffix?: Maybe<Suffixes>
}

/** A LoanApplication that can represent either a Student Loan Refi or Personal Loan Application. */
export interface LoanApplication {
  __typename?: 'LoanApplication'
  id: Scalars['ID']
  user: User
  status_id: ApplicationStatuses
  /** @deprecated No longer used */
  auth_status_id?: Maybe<AuthStatuses>
  success?: Maybe<SuccessStatuses>
  application_guid: Scalars['String']
  cosigner_guid?: Maybe<Scalars['String']>
  personalInfo?: Maybe<PersonalInfo>
  created_at?: Maybe<Scalars['DateTime']>
  signoff?: Maybe<Scalars['DateTime']>
  approval_date?: Maybe<Scalars['DateTime']>
  /** @deprecated No longer used */
  latestAuthStatusDate?: Maybe<Scalars['DateTime']>
  underwritingInfo?: Maybe<UnderwritingInfo>
  educationInfo?: Maybe<EducationInfo>
  employmentInfo?: Maybe<EmploymentInfo>
  incomeInfo?: Maybe<Array<Maybe<IncomeInfo>>>
  housingInfo?: Maybe<HousingInfo>
  loans?: Maybe<Array<Maybe<Loan>>>
  /** Loan amount entered by user during pre-qualification */
  total_loan_amount?: Maybe<Scalars['Float']>
  resident_or_fellow?: Maybe<Scalars['Boolean']>
  loan_owners?: Maybe<LoanOwners[]>
  type: ApplicationType
  refinance_reason?: Maybe<Scalars['String']>
  loan_purpose?: Maybe<PersonalLoanPurposes>
  selectedRate?: Maybe<BorrowerRate>
  rateSource?: Maybe<RateSource>
  latestBorrowerRateRequest?: Maybe<BorrowerRateRequest>
  /** Defines the product type that the loan application belongs to */
  product: Products
  isActive: Scalars['Boolean']
  from_API: Scalars['Boolean']
  lenderType?: Maybe<Scalars['String']>
  /** All documents that have been uploaded by a user */
  documents?: Maybe<Document[]>
  /** A value representing whether a borrower has incomplete additional document requests */
  hasIncompleteDocuments: Scalars['Boolean']
  /** A list of tasks that must be completed by the applicant in order for the application to close. */
  tasks: BorrowerTask[]
  /** Total amount to be refinanced - sum of balance to refinance on all added loans. Defaults to total loan amount from pre-qualification. */
  totalRefinanceAmount?: Maybe<Scalars['Float']>
  /** Only applies to cosigner applications that were denied. Use this when you want to know the reapply date. */
  cosignerReapplyDate?: Maybe<Scalars['DateTime']>
  /** Returns a boolean value that determines if an approved application received a counter offer. If not an approved personal loan, it will return false by default. */
  hasCounterOffer: Scalars['Boolean']
  /** Returns the latest instance Credit Karma request (if one exists) for the application  */
  latestCreditKarmaRequest?: Maybe<CreditKarmaRequest>
  /** Returns the latest instance of an Experian request (if one exists) for the application  */
  latestExperianRequest?: Maybe<ExperianRequest>
  /** Return the latest Credit Agreement (if one exists) for the application */
  creditAgreement?: Maybe<CreditAgreement>
  /** Returns the Payment Info for the application. These values are 'estimates' until the Credit Agreement is signed */
  paymentInfo?: Maybe<PaymentInfo>
  /** Returns info if the loan's lender support auto debit and if the borrower can sign up for autodebit prior to seeing the credit agreement. */
  autoDebitInfo?: Maybe<AutoDebitInfo>
  /** Returns info regarding the latest choice a borrower made whether or not to sign up for autopay. A most recent answer of yes will result in the ACH portion of esign being prechecked. */
  latestIntentToAutopay?: Maybe<IntentToAutopay>
  /** Returns the direct pay liabilities and allocations for the application */
  directPayInfo?: Maybe<DirectPayInfo>
}

/** Application statuses */
export enum ApplicationStatuses {
  /** User Created */
  UserCreated = 'UserCreated',
  /** Pre-qualification Personal Information */
  PreQualificationPersonalInformation = 'PreQualificationPersonalInformation',
  /** Education Financial */
  EducationFinancial = 'EducationFinancial',
  /** Pre-qualification Disclosures */
  PreQualificationDisclosures = 'PreQualificationDisclosures',
  /** Rates */
  Rates = 'Rates',
  /** Personal Information */
  PersonalInformation = 'PersonalInformation',
  /** Housing Information */
  Housing = 'Housing',
  /** Loans */
  Loans = 'Loans',
  /** Disclosures */
  Disclosures = 'Disclosures',
  /** Upload Center */
  UploadCenter = 'UploadCenter',
  /** Submitted */
  Submitted = 'Submitted',
  /** Error */
  Error = 'Error',
  /** Hard Denied */
  HardDenied = 'HardDenied',
  /** Soft Denied */
  SoftDenied = 'SoftDenied',
  /** Cannot Retrieve Credit Information */
  CannotRetrieveCreditInfo = 'CannotRetrieveCreditInfo',
  /** Cosigner Removed */
  CosignerRemoved = 'CosignerRemoved',
  /** New Email Required */
  NewEmailRequired = 'NewEmailRequired',
  /** Laurel Road Financial Information */
  LaurelRoadFinancialInfo = 'LaurelRoadFinancialInfo',
  /** A p i account page */
  ApiAccountPage = 'APIAccountPage',
  /** Review */
  Review = 'Review',
  /** No Offers */
  NoOffers = 'NoOffers',
  /** Sent to Lender */
  SentToLender = 'SentToLender',
  /** Waiting on Manual Submission */
  WaitingOnManualSubmission = 'WaitingOnManualSubmission',
  /** Manual review */
  ManualReview = 'ManualReview',
  /** Request to Withdraw */
  RequestToWithdraw = 'RequestToWithdraw',
  /** Scripting */
  Scripting = 'Scripting',
  /** Scripting Error */
  ScriptingError = 'ScriptingError'
}

/** Auth statuses */
export enum AuthStatuses {
  /** Pending - Auto Micro Deposits */
  PendingAutoMicroDeposits = 'PendingAutoMicroDeposits',
  /** Pass - Auto Micro Deposits */
  PassAutoMicroDeposits = 'PassAutoMicroDeposits',
  /** Fail - Auto Micro Deposits */
  FailAutoMicroDeposits = 'FailAutoMicroDeposits',
  /** Pending - Manual Micro Deposits */
  PendingManualMicroDeposits = 'PendingManualMicroDeposits',
  /** Pass - Manual Micro Deposits */
  PassManualMicroDeposits = 'PassManualMicroDeposits',
  /** Fail - Manual Micro Deposits */
  FailManualMicroDeposits = 'FailManualMicroDeposits',
  /** Pass - Instant Auth */
  PassInstantAuth = 'PassInstantAuth',
  /** Pass - Instant Match */
  PassInstantMatch = 'PassInstantMatch'
}

/** Application success statuses */
export enum SuccessStatuses {
  /** Denied */
  Denied = 'Denied',
  /** Pre approved */
  PreApproved = 'PreApproved',
  /** Soft denied */
  SoftDenied = 'SoftDenied',
  /** Manual review */
  ManualReview = 'ManualReview',
  /** Cancelled */
  Cancelled = 'Cancelled',
  /** Closed */
  Closed = 'Closed',
  /** Duplicate */
  Duplicate = 'Duplicate',
  /** Expired */
  Expired = 'Expired',
  /** Pending */
  Pending = 'Pending',
  /** Incomplete */
  Incomplete = 'Incomplete',
  /** Pending disbursement */
  PendingDisbursement = 'PendingDisbursement',
  /** Error */
  Error = 'Error',
  /** Withdrawn */
  Withdrawn = 'Withdrawn',
  /** Approved */
  Approved = 'Approved',
  /** Conditionally approved */
  ConditionallyApproved = 'ConditionallyApproved',
  /** Unverified documents */
  UnverifiedDocuments = 'UnverifiedDocuments',
  /** Right to cancel */
  RightToCancel = 'RightToCancel',
  /** Esign */
  Esign = 'Esign',
  /** Unable to log in */
  UnableToLogIn = 'UnableToLogIn',
  /** Lexis nexis review */
  LexisNexisReview = 'LexisNexisReview',
  /** Fully disbursed */
  FullyDisbursed = 'FullyDisbursed',
  /** U w expired */
  UwExpired = 'UWExpired',
  /** Credit error */
  CreditError = 'CreditError',
  /** Purchased */
  Purchased = 'Purchased',
  /** Expired loan offer */
  ExpiredLoanOffer = 'ExpiredLoanOffer',
  /** Verifying funding account */
  VerifyingFundingAccount = 'VerifyingFundingAccount'
}

/** Represents a User's personal information for a given LoanApplication. */
export interface PersonalInfo {
  __typename?: 'PersonalInfo'
  id: Scalars['ID']
  address1?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['Date']>
  months_at_address?: Maybe<Scalars['Int']>
  citizenship?: Maybe<Citizenships>
  resident_alien_min_10_years?: Maybe<Scalars['Boolean']>
  total_assets?: Maybe<Scalars['Int']>
  social_security_last_four?: Maybe<Scalars['String']>
  last_change_of_address?: Maybe<Scalars['Date']>
  permanent_residency_length?: Maybe<PermanentResidencyLengths>
  isSsnVerified?: Maybe<Scalars['Boolean']>
}

/** Citizenships */
export enum Citizenships {
  /** U s citizen */
  UsCitizen = 'USCitizen',
  /** Legal u s resident */
  LegalUsResident = 'LegalUSResident',
  /** Visa holder */
  VisaHolder = 'VisaHolder',
  /** Other */
  Other = 'Other'
}

/** Permanent residency lengths */
export enum PermanentResidencyLengths {
  /** Less than two years */
  LessThanTwoYears = 'LessThanTwoYears',
  /** From two to nine years */
  FromTwoToNineYears = 'FromTwoToNineYears',
  /** Ten years or more */
  TenYearsOrMore = 'TenYearsOrMore'
}

/** Describes the attributes of an OnBase Application */
export interface UnderwritingInfo {
  __typename?: 'UnderwritingInfo'
  id: Scalars['ID']
  application: LoanApplication
  underwritingStage: Scalars['String']
  loanConsultant: LosUser
  underwritingAnalyst: LosUser
  underwriter: LosUser
}

export interface LosUser {
  __typename?: 'LosUser'
  username?: Maybe<Scalars['String']>
}

/** Represents a User's education information for a given LoanApplication. */
export interface EducationInfo {
  __typename?: 'EducationInfo'
  id: Scalars['ID']
  school_id?: Maybe<Scalars['Int']>
  medical_specialty_id?: Maybe<Scalars['Int']>
  training_end_date?: Maybe<Scalars['Date']>
  year_id?: Maybe<Scalars['Int']>
  school_state_id?: Maybe<Scalars['Int']>
  school_number_id?: Maybe<Scalars['Int']>
  graduation_month?: Maybe<Scalars['Int']>
  graduation_year?: Maybe<Scalars['Int']>
  degree?: Maybe<Degree>
  undergraduate_school?: Maybe<Scalars['String']>
  title_4_school_id?: Maybe<Scalars['Int']>
  laurel_road_medical_specialty_id?: Maybe<Scalars['Int']>
  excessive_residency_reason?: Maybe<Scalars['String']>
  associates_experience?: Maybe<Scalars['Boolean']>
  associates_employment_offer?: Maybe<Scalars['Boolean']>
  aggregate_school_id?: Maybe<Scalars['Int']>
  bachelors_employed_in_healthcare?: Maybe<Scalars['Boolean']>
  bachelors_employed_12_months?: Maybe<Scalars['Boolean']>
  application: LoanApplication
  aggregate_school?: Maybe<AggregateSchool>
}

/** Describes the attributes of an educational Degree */
export interface Degree {
  __typename?: 'Degree'
  id: Scalars['ID']
  degree: Scalars['String']
  /** The name of the degree */
  name: Scalars['String']
  /** The type of the degree (i.e. Associates, Bachelors, Graduate) */
  type: DegreeType
  is_medical: Scalars['Boolean']
  /** The order in which the degree option should be displayed to the user. */
  order: Scalars['Int']
  /** Whether this degree should be displayed as an option */
  shouldDisplay: Scalars['Boolean']
}

/** Degree types */
export enum DegreeType {
  /** Associate */
  Associate = 'Associate',
  /** Bachelors */
  Bachelors = 'Bachelors',
  /** Graduate */
  Graduate = 'Graduate',
  /** No degree */
  NoDegree = 'NoDegree'
}

export interface AggregateSchool {
  __typename?: 'AggregateSchool'
  id: Scalars['ID']
  name: Scalars['String']
}

/** Represents a User's employment information for a given LoanApplication. */
export interface EmploymentInfo {
  __typename?: 'EmploymentInfo'
  id: Scalars['ID']
  status?: Maybe<EmploymentStatuses>
  employer_name?: Maybe<Scalars['String']>
  occupation_id?: Maybe<Scalars['Int']>
  phone?: Maybe<Scalars['String']>
  length_of_time_years?: Maybe<Scalars['Int']>
  length_of_time_months?: Maybe<Scalars['Int']>
  pay_months_per_year?: Maybe<Scalars['Int']>
  gross_income?: Maybe<Scalars['Int']>
  job_title?: Maybe<Scalars['String']>
  start_month?: Maybe<Scalars['Int']>
  start_year?: Maybe<Scalars['Int']>
  address?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state_id?: Maybe<Scalars['Int']>
  zip?: Maybe<Scalars['Int']>
  prev_employer_name?: Maybe<Scalars['String']>
  prev_occupation_id?: Maybe<Scalars['Int']>
  prev_job_title?: Maybe<Scalars['String']>
  prev_start_month?: Maybe<Scalars['Int']>
  prev_start_year?: Maybe<Scalars['Int']>
  prev_address?: Maybe<Scalars['String']>
  prev_city?: Maybe<Scalars['String']>
  prev_state_id?: Maybe<Scalars['Int']>
  prev_zip?: Maybe<Scalars['Int']>
  prev_income?: Maybe<Scalars['Int']>
  prev_end_month?: Maybe<Scalars['Int']>
  prev_end_year?: Maybe<Scalars['Int']>
  income_source_id?: Maybe<Scalars['Int']>
  start_date?: Maybe<Scalars['Date']>
  is_travel_pt?: Maybe<Scalars['Boolean']>
  application: LoanApplication
}

/** Employment statuses */
export enum EmploymentStatuses {
  /** Retired */
  Retired = 'Retired',
  /** Unemployed */
  Unemployed = 'Unemployed',
  /** Salary hourly */
  SalaryHourly = 'SalaryHourly',
  /** Self employed */
  SelfEmployed = 'SelfEmployed',
  /** Unemployed with income */
  UnemployedWithIncome = 'UnemployedWithIncome',
  /** Salary */
  Salary = 'Salary',
  /** Hourly */
  Hourly = 'Hourly',
  /** Contractor */
  Contractor = 'Contractor',
  /** Student */
  Student = 'Student'
}

/** Represents a User's income information for a given LoanApplication. */
export interface IncomeInfo {
  __typename?: 'IncomeInfo'
  id?: Maybe<Scalars['ID']>
  amount: Scalars['Int']
  master_income_source?: Maybe<MasterIncomeSources>
  application: LoanApplication
  deleted_at?: Maybe<Scalars['DateTime']>
}

/** Master income sources */
export enum MasterIncomeSources {
  /** Alimony */
  Alimony = 'Alimony',
  /** Annuity */
  Annuity = 'Annuity',
  /** Bonus */
  Bonus = 'Bonus',
  /** Child support */
  ChildSupport = 'ChildSupport',
  /** Commission */
  Commission = 'Commission',
  /** Disability */
  Disability = 'Disability',
  /** Investments */
  Investments = 'Investments',
  /** Ira */
  Ira = 'IRA',
  /** Maintenance income */
  MaintenanceIncome = 'MaintenanceIncome',
  /** Multiple */
  Multiple = 'Multiple',
  /** Other */
  Other = 'Other',
  /** Overtime */
  Overtime = 'Overtime',
  /** Pension */
  Pension = 'Pension',
  /** Public assistance */
  PublicAssistance = 'PublicAssistance',
  /** Retirement income */
  RetirementIncome = 'RetirementIncome',
  /** Salary */
  Salary = 'Salary',
  /** Second job */
  SecondJob = 'SecondJob',
  /** Self employment */
  SelfEmployment = 'SelfEmployment',
  /** Social security */
  SocialSecurity = 'SocialSecurity',
  /** Tips */
  Tips = 'Tips',
  /** Unemployment */
  Unemployment = 'Unemployment',
  /** Workers compensation */
  WorkersCompensation = 'WorkersCompensation',
  /** Military */
  Military = 'Military',
  /** Partnership or s corp */
  PartnershipOrSCorp = 'PartnershipOrSCorp',
  /** Rental income */
  RentalIncome = 'RentalIncome',
  /** Non retirement social security */
  NonRetirementSocialSecurity = 'NonRetirementSocialSecurity',
  /** Interest */
  Interest = 'Interest'
}

/** Represents a User's housing information for a given LoanApplication. */
export interface HousingInfo {
  __typename?: 'HousingInfo'
  id: Scalars['ID']
  status?: Maybe<HousingStatuses>
  monthly_housing_cost?: Maybe<Scalars['Int']>
  address1?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
  previous_address1?: Maybe<Scalars['String']>
  previous_address2?: Maybe<Scalars['String']>
  previous_city?: Maybe<Scalars['String']>
  previous_state?: Maybe<Scalars['String']>
  previous_zip?: Maybe<Scalars['String']>
  length_id?: Maybe<Scalars['ID']>
  previous_length_id?: Maybe<Scalars['ID']>
  comment?: Maybe<Scalars['String']>
}

/** Housing statuses */
export enum HousingStatuses {
  /** Rent */
  Rent = 'Rent',
  /** Own */
  Own = 'Own',
  /** Live with family member */
  LiveWithFamilyMember = 'LiveWithFamilyMember',
  /** Other */
  Other = 'Other'
}

/** Represents a Loan to be refinanced for a Loan Application */
export interface Loan {
  __typename?: 'Loan'
  id: Scalars['ID']
  account_number: Scalars['String']
  balance: Scalars['Float']
  balance_to_refi: Scalars['Float']
  interest_rate_bp: Scalars['Int']
  lender?: Maybe<LoanLender>
  servicer?: Maybe<LoanServicer>
  source?: Maybe<LoanSources>
  type?: Maybe<LoanTypes>
  servicer_name?: Maybe<Scalars['String']>
  deleted_at?: Maybe<Scalars['DateTime']>
  should_include: Scalars['Boolean']
}

/** The lender of a user entered student loan */
export interface LoanLender {
  __typename?: 'LoanLender'
  id: Scalars['ID']
  name: Scalars['String']
  active: Scalars['Boolean']
}

/** The servicer of a user entered student loan */
export interface LoanServicer {
  __typename?: 'LoanServicer'
  id: Scalars['ID']
  name: Scalars['String']
  active: Scalars['Boolean']
  federal: Scalars['Boolean']
}

/** Loan sources */
export enum LoanSources {
  /** Manually Added */
  User = 'User',
  /** Credit bureau */
  CreditBureau = 'CreditBureau',
  /** On base */
  OnBase = 'OnBase',
  /** Plaid Verification */
  Plaid = 'Plaid'
}

/** Loan types */
export enum LoanTypes {
  /** Federal */
  Federal = 'Federal',
  /** Private */
  Private = 'Private'
}

/** Loan owners */
export enum LoanOwners {
  /** My Loans (federal, private or both) */
  MyLoans = 'MyLoans',
  /** My Parent PLUS Loans */
  MyParentPlus = 'MyParentPlus',
  /** My parents' Parent PLUS Loans */
  MyParentParentPlus = 'MyParentParentPlus',
  /** Both my loans and my parents' Parent PLUS Loans */
  Both = 'Both',
  /** My spouse's loans */
  MySpousesLoans = 'MySpousesLoans',
  /** Loan Transfer (I'm a parent or family member) */
  LoanTransfer = 'LoanTransfer'
}

/** Application types */
export enum ApplicationType {
  /** Borrower */
  Borrower = 'Borrower',
  /** Cosigner */
  Cosigner = 'Cosigner'
}

/** Personal loan purposes */
export enum PersonalLoanPurposes {
  /** debt consolidation */
  DebtConsolidation = 'DebtConsolidation',
  /** refinance credit cards */
  RefinanceCreditCards = 'RefinanceCreditCards',
  /** home improvement */
  HomeImprovement = 'HomeImprovement',
  /** major purchase */
  MajorPurchase = 'MajorPurchase',
  /** moving expenses */
  MovingExpenses = 'MovingExpenses',
  /** medical or dental */
  MedicalOrDental = 'MedicalOrDental',
  /** car */
  Car = 'Car',
  /** transportation */
  Transportation = 'Transportation',
  /** special occasion */
  SpecialOccasion = 'SpecialOccasion',
  /** business expenses */
  BusinessExpenses = 'BusinessExpenses',
  /** none of the above */
  NoneOfTheAbove = 'NoneOfTheAbove',
  /** other */
  Other = 'Other'
}

/** A BorrowerRate is an instance of a Rate that has been offered to a User. */
export interface BorrowerRate {
  __typename?: 'BorrowerRate'
  id: Scalars['ID']
  application_id: LoanApplication
  borrower_rates_request_id?: Maybe<BorrowerRateRequest>
  rateBp: Scalars['Int']
  rateCalculationType: RateCalculationTypes
  rateType: RateTypes
  termYears: Scalars['Int']
  tier?: Maybe<Scalars['Int']>
  margin?: Maybe<Scalars['Int']>
  degree_type?: Maybe<Scalars['String']>
  ach_discount_amount?: Maybe<Scalars['Float']>
  displayed?: Maybe<Scalars['Boolean']>
  selected?: Maybe<Scalars['Boolean']>
  monthly_payment_cents?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['DateTime']>
  updated_at?: Maybe<Scalars['DateTime']>
  dti?: Maybe<Scalars['Float']>
  offerUrl?: Maybe<Scalars['String']>
  ratesApiOfferUrl?: Maybe<Scalars['String']>
  apr: Scalars['Float']
  /** The discounted rate is the apr on an offer with the ACH discount applied */
  discountedRate: Scalars['Float']
  /** Indicates if the rate is expired (from a rate sheet other than the currently active one) */
  isExpired?: Maybe<Scalars['Boolean']>
  /** The unique GUID for this particular borrower rate. */
  borrower_rate_guid?: Maybe<Scalars['String']>
  /** The origination fee for this borrower rate. */
  origination_fee: Scalars['Float']
  /** The maximum loan amount that can be refinanced with the offer */
  maximum_loan_amount?: Maybe<Scalars['Int']>
  /** The minimum loan amount that can be refinanced with the offer */
  minimum_loan_amount?: Maybe<Scalars['Int']>
  /** Indicates A Topup Offer */
  is_topup_offer?: Maybe<Scalars['Boolean']>
  /** Amount disbursed to borrower after fees are taken out. */
  netDisbursedAmount: Scalars['Float']
  netDisbursedAmountCents: Scalars['Int']
  /** Total loan amount requested from borrower */
  totalLoanAmount: Scalars['Float']
  totalLoanAmountCents: Scalars['Int']
}

/** A BorrowerRatesRequest represents a request to each active Lender at the time of pre-qualification submission. */
export interface BorrowerRateRequest {
  __typename?: 'BorrowerRateRequest'
  id: Scalars['ID']
  application_id: LoanApplication
  rate_source_id?: Maybe<RateSource>
  loan_amount_cents?: Maybe<Scalars['Int']>
  borrowerRates?: Maybe<Array<Maybe<Rate>>>
  lowestRatePerTerm?: Maybe<Array<Maybe<Rate>>>
  applicationDenialInfos?: Maybe<Array<Maybe<ApplicationDenialInfo>>>
  creditKarmaRequest?: Maybe<CreditKarmaRequest>
  experianRequest?: Maybe<ExperianRequest>
  created_at?: Maybe<Scalars['DateTime']>
  updated_at?: Maybe<Scalars['DateTime']>
}

/** Defines the Rate Source for rates returned to the RatesAPI */
export interface RateSource {
  __typename?: 'RateSource'
  id: Scalars['ID']
  source?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  isPlatform?: Maybe<Scalars['Boolean']>
  /** Defines the lender information that belongs to this rate source. */
  lender?: Maybe<Lender>
}

/** A Lender represents a Bank, Credit Union, or Financial Instution that offers Rates. */
export interface Lender {
  __typename?: 'Lender'
  id: Scalars['ID']
  display_name: Scalars['String']
  /** Refers to the global identity for Lender within Splash */
  global_identity: Scalars['String']
  /** Indicates whether the lender participates in Direct Pay */
  direct_pay_enabled: Scalars['Boolean']
  logo_condensed: Scalars['String']
  logo_full: Scalars['String']
  summary: Scalars['String']
  hasMembershipAccount: Scalars['Boolean']
  hasCheckingAccount: Scalars['Boolean']
  hasMedicalProgram: Scalars['Boolean']
  checkingAccountRequirements?: Maybe<Scalars['String']>
  offline: Scalars['Boolean']
  disclosures: Scalars['String']
  terms_checklist?: Maybe<Array<Scalars['String']>>
  is_platform: Scalars['Boolean']
  privacy_policy_url?: Maybe<Scalars['String']>
  ach_discount_text?: Maybe<Scalars['String']>
  servicer?: Maybe<Servicer>
  finalInformation: FinalInformationByProduct
  /** This field represents whether loan offers through a lender are secure */
  is_secured?: Maybe<Scalars['Boolean']>
  autoDebitInfo?: Maybe<AutoDebitInfo>
}

export interface Servicer {
  __typename?: 'Servicer'
  StudentLoanRefinancing?: Maybe<ServicerResponse>
  PersonalLoan?: Maybe<ServicerResponse>
}

export interface ServicerResponse {
  __typename?: 'ServicerResponse'
  display_name: Scalars['String']
  logo: Scalars['String']
  phone_number?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  login_url?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
}

export interface FinalInformationByProduct {
  __typename?: 'FinalInformationByProduct'
  PersonalLoan: FinalInformation
}

export interface FinalInformation {
  __typename?: 'FinalInformation'
  markdown: Scalars['String']
  modals?: Maybe<FinalInformationModal[]>
}

export interface FinalInformationModal {
  __typename?: 'FinalInformationModal'
  key: Scalars['String']
  header?: Maybe<Scalars['String']>
  body: Scalars['String']
}

/** Defines the info auto debit info attached to a Loan Application */
export interface AutoDebitInfo {
  __typename?: 'AutoDebitInfo'
  /** Defines if the lender's servicer support auto debits */
  enabled?: Maybe<Scalars['Boolean']>
  /** Defines if the borrower is able to opt-in for auto debit prior to seeing their credit agreement */
  preselect_enabled?: Maybe<Scalars['Boolean']>
}

/** An Interest Rate that encapsulates an offer. */
export interface Rate {
  __typename?: 'Rate'
  id: Scalars['ID']
  rate_type: RateTypes
  term_years: Scalars['Int']
  lender: Lender
  apr: Scalars['Float']
  rate_bp: Scalars['Int']
  interest_rate: Scalars['Float']
  ach_discount: Scalars['Float']
  ach_discount_bp: Scalars['Int']
  /** The discounted rate is the apr on an offer with the ACH discount applied */
  discountedRate: Scalars['Float']
  discountedRateBp: Scalars['Int']
  monthly_payment: Scalars['Float']
  total_interest_paid: Scalars['Float']
  total_loan_amount: Scalars['Float']
  totalLoanAmount: Scalars['Float']
  origination_fee: Scalars['Float']
  total_loan_cost: Scalars['Float']
  total_finance_charge: Scalars['Float']
  netDisbursedAmount: Scalars['Float']
  /**
   * The new total loan amount needed so the borrower can receive their entire original requested loan amount dispersed to them, adjusting for origination fees.
   * A null value indicates this offer is ineligible for a top-up offer.
   */
  top_up_loan_amount?: Maybe<Scalars['Float']>
  /** Indicates A Topup Offer */
  is_topup_offer?: Maybe<Scalars['Boolean']>
  monthly_payment_cents: Scalars['Int']
  total_interest_paid_cents: Scalars['Int']
  total_loan_amount_cents: Scalars['Int']
  totalLoanAmountCents: Scalars['Int']
  origination_fee_cents: Scalars['Int']
  total_loan_cost_cents: Scalars['Int']
  total_finance_charge_cents: Scalars['Int']
  netDisbursedAmountCents: Scalars['Int']
  url?: Maybe<Scalars['String']>
  disclosures?: Maybe<Scalars['String']>
  selected: Scalars['Boolean']
  /** Indicates if the rate is expired (from a rate sheet other than the currently active one) */
  isExpired?: Maybe<Scalars['Boolean']>
  /** The unique GUID for this particular borrower rate. */
  borrower_rate_guid?: Maybe<Scalars['String']>
  /** The maximum loan amount that can be refinanced with the offer */
  maximum_loan_amount?: Maybe<Scalars['Int']>
  /** The minimum loan amount that can be refinanced with the offer */
  minimum_loan_amount?: Maybe<Scalars['Int']>
  tier?: Maybe<Scalars['Int']>
  margin?: Maybe<Scalars['Int']>
  degree_type?: Maybe<Scalars['String']>
}

/** Rate types */
export enum RateTypes {
  /** Fixed */
  Fixed = 'Fixed',
  /** Variable */
  Variable = 'Variable'
}

/** An ApplicationDenialInfo represents why a borrower was denied from a given Lender. */
export interface ApplicationDenialInfo {
  __typename?: 'ApplicationDenialInfo'
  description: Scalars['String']
  rate_source_id: Scalars['Int']
}

export interface CreditKarmaRequest {
  __typename?: 'CreditKarmaRequest'
  id: Scalars['String']
  ck_tracking_id: Scalars['String']
  request_type: Scalars['String']
  offer_amount?: Maybe<Currency>
  offer_term_months?: Maybe<Scalars['Int']>
  offer_apr_bp?: Maybe<Scalars['Int']>
  income_band?: Maybe<Scalars['String']>
  housing_payment_band?: Maybe<Scalars['String']>
  home_ownership_status?: Maybe<Scalars['Boolean']>
  loan_purpose?: Maybe<Scalars['String']>
  model_id?: Maybe<Scalars['Int']>
  campaign?: Maybe<Scalars['String']>
  approving_model_id?: Maybe<Scalars['Int']>
  application?: Maybe<LoanApplication>
  borrowerRatesRequest?: Maybe<BorrowerRateRequest>
}

export interface Currency {
  __typename?: 'Currency'
  currency_amount: Scalars['String']
  currency_code: Scalars['String']
}

export interface ExperianRequest {
  __typename?: 'ExperianRequest'
  id: Scalars['String']
  experian_tracking_id: Scalars['String']
  offer_amount?: Maybe<Currency>
  offer_total_cost?: Maybe<Currency>
  offer_monthly_payment?: Maybe<Currency>
  offer_term_months?: Maybe<Scalars['Int']>
  offer_apr_bp?: Maybe<Scalars['Int']>
  application?: Maybe<LoanApplication>
  borrowerRatesRequest?: Maybe<BorrowerRateRequest>
}

/** Rate calculation types */
export enum RateCalculationTypes {
  /** Api */
  Api = 'API',
  /** Dti */
  Dti = 'DTI',
  /** Fcf */
  Fcf = 'FCF',
  /** Splel */
  Splel = 'SPLEL'
}

/** Products */
export enum Products {
  /** medical */
  MedicalResidentRefi = 'MedicalResidentRefi',
  /** student */
  StudentLoanRefinancing = 'StudentLoanRefinancing',
  /** personal */
  PersonalLoan = 'PersonalLoan',
  /** private */
  PrivateStudentLoan = 'PrivateStudentLoan'
}

export interface Document {
  __typename?: 'Document'
  id: Scalars['ID']
  document_type_id: Scalars['ID']
  document_type_display_name?: Maybe<Scalars['String']>
  document_subtype_id?: Maybe<Scalars['ID']>
  document_subtype_display_name?: Maybe<Scalars['String']>
  document_status_id: DocumentStatuses
  path: Scalars['String']
  original_filename?: Maybe<Scalars['String']>
  mime_type?: Maybe<Scalars['String']>
}

/** Document statuses */
export enum DocumentStatuses {
  /** Error */
  Error = 'Error',
  /** Processing */
  Processing = 'Processing',
  /** Received */
  Received = 'Received',
  /** Uploaded */
  Uploaded = 'Uploaded',
  /** Approved */
  Approved = 'Approved'
}

export type BorrowerTask =
  | DocumentSignTask
  | IncomeTask
  | IdentificationTask
  | ReviewTask
  | FundingTask
  | AdditionalDocumentUploadTask
  | SubmitApplicationTask
  | PersonalInfoTask
  | LoansTask
  | DirectPayTask
  | DirectPayConfirmationTask

/** A task that requires the user to sign documents. */
export type DocumentSignTask = CommonTask & {
  __typename?: 'DocumentSignTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  metadata?: Maybe<TaskMetadata>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

export interface CommonTask {
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependent_types?: Maybe<Array<Scalars['String']>>
  /** A flat list of preerequisite tasks that must be complete before the current task can be completed. */
  dependencies?: Maybe<Array<Scalars['ID']>>
  /** if the task is blocked and unable to be completed due to dependencies */
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** Task status */
export enum TaskStatuses {
  /** Created */
  Created = 'CREATED',
  /** Complete */
  Complete = 'COMPLETE',
  /** Deleted */
  Deleted = 'DELETED'
}

export interface Assignee {
  __typename?: 'Assignee'
  id: Scalars['ID']
  type: Scalars['String']
}

export interface TaskMetadata {
  __typename?: 'TaskMetadata'
  docusign_link?: Maybe<Scalars['String']>
  documents?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Describes a task for the customer to verify his/her income. */
export type IncomeTask = CommonTask & {
  __typename?: 'IncomeTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  metadata?: Maybe<IncomeTaskMetadata>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

export interface IncomeTaskMetadata {
  __typename?: 'IncomeTaskMetadata'
  documentRequests?: Maybe<DocumentRequest[]>
  isPlaidEligible?: Maybe<Scalars['Boolean']>
}

export interface DocumentRequest {
  __typename?: 'DocumentRequest'
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  documentType: Scalars['Int']
  documentTypeName?: Maybe<Scalars['String']>
  additionalDocumentRequestId?: Maybe<Scalars['Int']>
  groups: DocumentGroup[]
}

export interface DocumentGroup {
  __typename?: 'DocumentGroup'
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  requirements: Requirement[]
}

export interface Requirement {
  __typename?: 'Requirement'
  documentSubType: Scalars['Int']
  documentSubTypeName?: Maybe<Scalars['String']>
  acceptedMimeTypes?: Maybe<Array<Scalars['String']>>
  title: Scalars['String']
}

/** A task that requires the user to verify his/her identity. */
export type IdentificationTask = CommonTask & {
  __typename?: 'IdentificationTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  metadata?: Maybe<IdentificationTaskMetadata>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

export interface IdentificationTaskMetadata {
  __typename?: 'IdentificationTaskMetadata'
  documentRequests?: Maybe<DocumentRequest[]>
}

/** Describes a task for the customer to review and confirm information. */
export type ReviewTask = CommonTask & {
  __typename?: 'ReviewTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  metadata?: Maybe<TaskMetadata>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** Describes a task for the customer to verify his/her bank account where funds will be deposited. */
export type FundingTask = CommonTask & {
  __typename?: 'FundingTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  metadata?: Maybe<FundingTaskMetadata>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

export interface FundingTaskMetadata {
  __typename?: 'FundingTaskMetadata'
  plaidItemId?: Maybe<Scalars['ID']>
  verificationStatus?: Maybe<PlaidVerificationStatus>
}

export enum PlaidVerificationStatus {
  PendingManualVerification = 'pending_manual_verification',
  ManuallyVerified = 'manually_verified',
  PendingAutomaticVerification = 'pending_automatic_verification',
  AutomaticallyVerified = 'automatically_verified',
  VerificationExpired = 'verification_expired',
  VerificationFailed = 'verification_failed'
}

/** Describes a task for the customer to upload a document. */
export type AdditionalDocumentUploadTask = CommonTask & {
  __typename?: 'AdditionalDocumentUploadTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  metadata?: Maybe<AdditionalDocumentUploadTaskMetadata>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

export interface AdditionalDocumentUploadTaskMetadata {
  __typename?: 'AdditionalDocumentUploadTaskMetadata'
  documentRequests?: Maybe<DocumentRequest[]>
}

/** A task that requires the user to submit their application to underwriting */
export type SubmitApplicationTask = CommonTask & {
  __typename?: 'SubmitApplicationTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependent_types?: Maybe<Array<Scalars['String']>>
  dependencies?: Maybe<Array<Scalars['ID']>>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** Describes a task for the customer answer personal info */
export type PersonalInfoTask = CommonTask & {
  __typename?: 'PersonalInfoTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** Describes a task for the customer to enter their loan information */
export type LoansTask = CommonTask & {
  __typename?: 'LoansTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** A task that allows a user allocate funds to payoff accounts. */
export type DirectPayTask = CommonTask & {
  __typename?: 'DirectPayTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** A task that allows a user to confirm allocations before dispersal. */
export type DirectPayConfirmationTask = CommonTask & {
  __typename?: 'DirectPayConfirmationTask'
  id: Scalars['ID']
  status: TaskStatuses
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Scalars['ID']>>
  dependent_types?: Maybe<Array<Scalars['String']>>
  isBlocked?: Maybe<Scalars['Boolean']>
  assignee?: Maybe<Assignee>
}

/** Represents an application's latest associated credit agreement */
export interface CreditAgreement {
  __typename?: 'CreditAgreement'
  id: Scalars['ID']
  first_payment_date: Scalars['Date']
  last_payment_date: Scalars['Date']
  term: Scalars['Int']
}

/** Represents an application's latest payment info */
export interface PaymentInfo {
  __typename?: 'PaymentInfo'
  first_payment_date: Scalars['Date']
  last_payment_date: Scalars['Date']
  monthly_payment: Scalars['Float']
  final_payment: Scalars['Float']
}

export interface IntentToAutopay {
  __typename?: 'IntentToAutopay'
  id: Scalars['String']
  created_at: Scalars['DateTime']
  application_guid: Scalars['String']
  application_version: Scalars['Int']
  intends_to_autopay: Scalars['Boolean']
}

export interface DirectPayInfo {
  __typename?: 'DirectPayInfo'
  opt_in_status?: Maybe<DirectPayOptInStatuses>
  liabilities_status?: Maybe<DirectPayLiabilityStatuses>
  confirmation_status?: Maybe<DirectPayConfirmationStatuses>
  liabilities?: Maybe<Array<Maybe<DirectPayLiability>>>
  liabilityInfo?: Maybe<DirectPayLiabilityInfo>
  allocations?: Maybe<Array<Maybe<DirectPayAllocation>>>
}

/** Direct pay opt in statuses */
export enum DirectPayOptInStatuses {
  /** Opted in */
  OptedIn = 'OPTED_IN',
  /** Opted out */
  OptedOut = 'OPTED_OUT'
}

/** Direct pay liability statuses */
export enum DirectPayLiabilityStatuses {
  /** Fetching */
  Fetching = 'FETCHING',
  /** Success */
  Success = 'SUCCESS',
  /** Error */
  Error = 'ERROR'
}

/** Direct pay confirmation statuses */
export enum DirectPayConfirmationStatuses {
  /** Confirmed */
  Confirmed = 'CONFIRMED'
}

export interface DirectPayLiability {
  __typename?: 'DirectPayLiability'
  name: Scalars['String']
  account_number: Scalars['String']
  balance: Currency
  opened_at?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
}

export interface DirectPayLiabilityInfo {
  __typename?: 'DirectPayLiabilityInfo'
  status?: Maybe<DirectPayLiabilityStatuses>
  liabilities?: Maybe<Array<Maybe<DirectPayLiability>>>
}

export interface DirectPayAllocation {
  __typename?: 'DirectPayAllocation'
  balance?: Maybe<Currency>
  id: Scalars['String']
}

/** A message is a piece of communication / correspondence to an end user. */
export interface Message {
  __typename?: 'Message'
  /** The date that the message was generated */
  date: Scalars['DateTime']
  /** The subject/title of the message */
  title: Scalars['String']
  /** The body of the message. This is a string encoded as markdown. */
  body: Scalars['String']
  attachments?: Maybe<Array<Maybe<DocumentAttachment>>>
}

/** A DocumentAttachment are downloadable attachments to messages */
export interface DocumentAttachment {
  __typename?: 'DocumentAttachment'
  /** The title of the document that should be displayed to the user */
  title: Scalars['String']
  /** The direct-download link to the document */
  uri: Scalars['String']
}

export interface PartnerTracking {
  __typename?: 'PartnerTracking'
  id: Scalars['ID']
  user: User
  partner: Partner
  sub_id?: Maybe<Scalars['String']>
}

/** Partner Tracking and Partner information returned for affiliate rates API */
export interface Partner {
  __typename?: 'Partner'
  id: Scalars['ID']
  partner_name: Scalars['String']
  impact_tracking_base_url?: Maybe<Scalars['String']>
}

/** Suffixes */
export enum Suffixes {
  /** I */
  I = 'I',
  /** Ii */
  Ii = 'II',
  /** Iii */
  Iii = 'III',
  /** Iv */
  Iv = 'IV',
  /** Jr */
  Jr = 'JR',
  /** Sr */
  Sr = 'SR',
  /** None */
  None = 'NONE'
}

export interface BankInfoResponse {
  __typename?: 'BankInfoResponse'
  account_type?: Maybe<AchAccountTypes>
  routing_number?: Maybe<Scalars['String']>
  account_number?: Maybe<Scalars['String']>
}

/** Ach account types */
export enum AchAccountTypes {
  /** Checking account */
  CheckingAccount = 'CheckingAccount',
  /** Savings account */
  SavingsAccount = 'SavingsAccount'
}

/** Order by clause for Query.degrees.orderBy. */
export interface QueryDegreesOrderByOrderByClause {
  /** The column that is used for ordering. */
  column: QueryDegreesOrderByColumn
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Allowed column names for Query.degrees.orderBy. */
export enum QueryDegreesOrderByColumn {
  Order = 'ORDER'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Order by clause for Query.employment_statuses.orderBy. */
export interface QueryEmploymentStatusesOrderByOrderByClause {
  /** The column that is used for ordering. */
  column: QueryEmploymentStatusesOrderByColumn
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Allowed column names for Query.employment_statuses.orderBy. */
export enum QueryEmploymentStatusesOrderByColumn {
  Order = 'ORDER'
}

/** Describes the attributes of an employment status */
export interface EmploymentStatusInfo {
  __typename?: 'EmploymentStatusInfo'
  status?: Maybe<EmploymentStatuses>
  /** The friendly name of the status that could be used to display to a user. */
  description: Scalars['String']
}

/** Order by clause for Query.occupations.orderBy. */
export interface QueryOccupationsOrderByOrderByClause {
  /** The column that is used for ordering. */
  column: QueryOccupationsOrderByColumn
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Allowed column names for Query.occupations.orderBy. */
export enum QueryOccupationsOrderByColumn {
  Occupation = 'OCCUPATION'
}

/** Represents an Occupation. */
export interface Occupation {
  __typename?: 'Occupation'
  id: Scalars['ID']
  occupation: Scalars['String']
}

/** Order by clause for Query.servicers.orderBy. */
export interface QueryServicersOrderByOrderByClause {
  /** The column that is used for ordering. */
  column: QueryServicersOrderByColumn
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Allowed column names for Query.servicers.orderBy. */
export enum QueryServicersOrderByColumn {
  Name = 'NAME'
}

/** Order by clause for Query.lenders.orderBy. */
export interface QueryLendersOrderByOrderByClause {
  /** The column that is used for ordering. */
  column: QueryLendersOrderByColumn
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Allowed column names for Query.lenders.orderBy. */
export enum QueryLendersOrderByColumn {
  Name = 'NAME'
}

/** Order by clause for Query.studentLoanTypes.orderBy. */
export interface QueryStudentLoanTypesOrderByOrderByClause {
  /** The column that is used for ordering. */
  column: QueryStudentLoanTypesOrderByColumn
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Allowed column names for Query.studentLoanTypes.orderBy. */
export enum QueryStudentLoanTypesOrderByColumn {
  RowOrder = 'ROW_ORDER'
}

/** The type of a user entered student loan (e.g. Federal or Private) */
export interface LoanType {
  __typename?: 'LoanType'
  id: Scalars['ID']
  type: Scalars['String']
  display: Scalars['Boolean']
}

/** Represents a Medical Specialty for Laurel Road Residency. */
export interface LaurelRoadMedicalSpecialty {
  __typename?: 'LaurelRoadMedicalSpecialty'
  id: Scalars['ID']
  specialty: Scalars['String']
  average_residency_duration?: Maybe<Scalars['Int']>
  display?: Maybe<Scalars['Boolean']>
}

/** Represents an additional income source types from the MasterIncomeSources enum. */
export interface MasterIncomeSource {
  __typename?: 'MasterIncomeSource'
  id: Scalars['ID']
  source: Scalars['String']
  value: MasterIncomeSources
}

/** Represents a US State. */
export interface State {
  __typename?: 'State'
  state_abbreviation: Scalars['String']
}

/** Gets rates for the Review Offer task. */
export interface ReviewOfferInfo {
  __typename?: 'ReviewOfferInfo'
  rates?: Maybe<Array<Maybe<Rate>>>
}

export interface DeniedCosignerInfo {
  __typename?: 'DeniedCosignerInfo'
  cosignerRelationships?: Maybe<Array<Maybe<CosignerRelationship>>>
}

export interface CosignerRelationship {
  __typename?: 'CosignerRelationship'
  id: Scalars['ID']
  relationship: Scalars['String']
}

/** Fraud Status response from the Pylon Service. */
export interface FraudResponse {
  __typename?: 'FraudResponse'
  fraud_status: FraudStatus
  next_step?: Maybe<FraudNextStep>
}

/** Determines a user's fraud status. */
export enum FraudStatus {
  Pass = 'PASS',
  Fail = 'FAIL',
  Otp = 'OTP',
  Iidqa = 'IIDQA'
}

/** Determines what is the next step that the user needs to do. */
export enum FraudNextStep {
  RequestOtpCode = 'REQUEST_OTP_CODE',
  SubmitOtpCode = 'SUBMIT_OTP_CODE',
  RequestQuestions = 'REQUEST_QUESTIONS',
  SubmitAnswers = 'SUBMIT_ANSWERS',
  SubmitBonusAnswer = 'SUBMIT_BONUS_ANSWER'
}

export interface PlaidDataResponse {
  __typename?: 'PlaidDataResponse'
  account?: Maybe<PlaidLinkAccount>
}

export interface PlaidLinkAccount {
  __typename?: 'PlaidLinkAccount'
  id?: Maybe<Scalars['String']>
  verification_status?: Maybe<PlaidVerificationStatus>
}

export interface PlaidInstitutionsQueryInput {
  query: Scalars['String']
  products: Array<Scalars['String']>
  options?: Maybe<PlaidInstitutionsQueryInputOptions>
}

export interface PlaidInstitutionsQueryInputOptions {
  include_optional_metadata?: Maybe<Scalars['Boolean']>
  include_auth_metadata?: Maybe<Scalars['Boolean']>
}

export interface PlaidInstitutionsQueryResponse {
  __typename?: 'PlaidInstitutionsQueryResponse'
  results: PlaidInstitutionQueryResult[]
}

export interface PlaidInstitutionQueryResult {
  __typename?: 'PlaidInstitutionQueryResult'
  name: Scalars['String']
  institution_id: Scalars['String']
  products: Array<Scalars['String']>
  routing_numbers: Array<Scalars['String']>
  oauth: Scalars['Boolean']
  url?: Maybe<Scalars['String']>
  primary_color?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  supports_instant_auth?: Maybe<Scalars['Boolean']>
  supports_instant_match?: Maybe<Scalars['Boolean']>
  supports_automated_micro_deposits?: Maybe<Scalars['Boolean']>
}

export interface JobTitle {
  __typename?: 'JobTitle'
  name?: Maybe<Scalars['String']>
}

export interface LoanDetailsResponse {
  __typename?: 'LoanDetailsResponse'
  disbursementAccount?: Maybe<Scalars['String']>
  disbursementRouting?: Maybe<Scalars['String']>
  firstPaymentDate?: Maybe<Scalars['String']>
  firstPaymentAmount?: Maybe<Scalars['String']>
}

/** Offer information for a given offer returned by the affiliate rates API. */
export interface RatesApiBorrowerRateResponse {
  __typename?: 'RatesAPIBorrowerRateResponse'
  rate?: Maybe<Scalars['Float']>
  rateType?: Maybe<RateTypes>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
}

export interface AffiliateClosedLoanInfo {
  __typename?: 'AffiliateClosedLoanInfo'
  id: Scalars['ID']
  product_id?: Maybe<Scalars['ID']>
  partner_id?: Maybe<Scalars['ID']>
  partner?: Maybe<Partner>
  term?: Maybe<Scalars['Int']>
  rate?: Maybe<Scalars['Float']>
  apr?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  type?: Maybe<Scalars['String']>
  closed_date?: Maybe<Scalars['DateTime']>
  external_tracking_id?: Maybe<Scalars['String']>
}

export interface AllowableTypesBySubtype {
  __typename?: 'AllowableTypesBySubtype'
  subtype: Scalars['String']
  allowableTypes?: Maybe<Array<Scalars['String']>>
}

export interface Mutation {
  __typename?: 'Mutation'
  /** Retrieve the link token for plaid ui from checkers */
  plaidLinkToken?: Maybe<PlaidLinkTokenResponse>
  /** Used to send the plaid public token to checkers */
  registerPlaidPublicToken?: Maybe<Scalars['ID']>
  /** Used to save the ach info from a registeredItem and generate an assets report. */
  saveIncomeAccount?: Maybe<SaveIncomeAccountResponse>
  /** Used to save the ach info and to verify it via achoo. */
  saveFundingAccount?: Maybe<SaveFundingAccountResponse>
  /** Deprecated: Register a User and returns a LoanApplication */
  signUpUser?: Maybe<LoanApplication>
  /** Registers a User */
  signUpUserShell: User
  /** Updates a User's LoanApplication */
  updateApplication?: Maybe<LoanApplication>
  /** Creates a LoanApplication */
  createApplication?: Maybe<LoanApplication>
  /** Registers a User from the Rates API */
  signUpUserFromApi?: Maybe<LoanApplication>
  /** Generates RatesApiResponse for the Rates API */
  getRates?: Maybe<RatesApiResponse>
  /** Log in to a new session and get the user. */
  login: User
  /** Log a user out of their session. */
  logout?: Maybe<Scalars['Boolean']>
  /** Send a forgot password email for a user */
  forgotPassword?: Maybe<Scalars['Boolean']>
  /** Reset a password for a user given a reset key */
  resetPassword?: Maybe<Scalars['String']>
  /** Select a rate from the list of rates displayed to borrower */
  selectBorrowerRate?: Maybe<Scalars['Boolean']>
  /** Select a rate from the list of rates displayed to borrower and returns the borrower rate. */
  selectBorrowerRateV2?: Maybe<Rate>
  /** Update a task belonging to the user */
  updateTask: TaskUpdateResponse
  /** Submit the users selected rate */
  submitLoanApplication?: Maybe<Scalars['Boolean']>
  /** Submit a platform loan application */
  submitPlatformApplication?: Maybe<Scalars['Boolean']>
  /** Confirm a loan offer */
  confirmOffer?: Maybe<Scalars['Boolean']>
  /** Create a rates request */
  createRatesRequest?: Maybe<RatesResponse>
  /** Signup via Affiliate Api */
  affiliateSignup: AffiliateSignupResponse
  /** Adds Plaid Loans For A Borrower's Application */
  addPlaidLoans: LoanApplication
  /** Create a tracking record for a user/application coming from the affiliates API. */
  createAffiliateApiRecord: AffiliateApiRecord
  /** Create partner tracking record for PL affiliate API. */
  createPartnerTracking?: Maybe<PartnerTracking>
  /** Soft delete a loan on a given loan application */
  deleteLoan: Loan
  /** Restore a loan on a given loan application */
  restoreLoan: Loan
  /** Verifies the SSN retrieved from the Credit Report matches what the user inputs and updates the Personal Info record with the full SSN. */
  verifySsn?: Maybe<LoanApplication>
  /** Takes a user self-attested bank account number and routing number and stores it for use by underwriters */
  createPrimaryIncomeBankingInfoRecord?: Maybe<Scalars['Boolean']>
  /** Updates user email and confirms their SSN */
  confirmApplicationDetails?: Maybe<LoanApplication>
  /**
   * Configure Autodebit for an application
   * @deprecated Prefer update application
   */
  updateAutoDebit: UpdateAutoDebitResponse
  /** Verify that an app's bank account is verified by giact */
  verifyAccountStatus: VerifyAccountStatusResponse
  /** Generates a new OTP Request, Sends the OTP code via the contact_method provided and returns an otp_request_id */
  otpRequestId?: Maybe<OtpRequestResponse>
  /** Verifies the otp_code provided matches the request_id returned in otpRequestId */
  verifyOtpCode?: Maybe<VerifyOtpCodeResponse>
  /** Get the initial set of questions from Pylon for the Fraud Check IIDQA Flow. */
  startQAFlow?: Maybe<StartQaFlowResponse>
  /** Send answers to Pylon for validation. */
  validateQAQuestions?: Maybe<ValidateQaQuestionsResponse>
  /** Send bonus question answer to Pylon for validation. */
  validateBonusQuestion?: Maybe<ValidateBonusQuestionResponse>
  /** Create a CreditKarmaRequest record for CK Traffic */
  createCreditKarmaRequest?: Maybe<CreditKarmaRequest>
  /** Create an ExperianRequest record for Experian Traffic */
  createExperianRequest?: Maybe<ExperianRequest>
  /** Saves user preference for Direct Pay with LOS service */
  saveDirectPayUserPreference?: Maybe<Scalars['Boolean']>
  /** Save allocations made to Direct Pay Liabilities */
  saveDirectPayAllocations?: Maybe<Scalars['Boolean']>
  /** Create a top up offer request for the given rate */
  createTopUpOfferRequest?: Maybe<Rate>
}

export interface MutationPlaidLinkTokenArgs {
  input: PlaidLinkTokenInput
}

export interface MutationRegisterPlaidPublicTokenArgs {
  input: RegisterPlaidPublicTokenInput
}

export interface MutationSaveIncomeAccountArgs {
  input: SaveIncomeAccountInput
}

export interface MutationSaveFundingAccountArgs {
  input: SaveFundingAccountInput
}

export interface MutationSignUpUserArgs {
  input: SignUpUserInput
}

export interface MutationSignUpUserShellArgs {
  input: SignUpUserInput
}

export interface MutationUpdateApplicationArgs {
  appInput: UpdateApplicationInput
}

export interface MutationCreateApplicationArgs {
  appInput: CreateApplicationInput
}

export interface MutationSignUpUserFromApiArgs {
  input: SignUpUserFromApiInput
}

export interface MutationGetRatesArgs {
  input: GetRatesInput
}

export interface MutationLoginArgs {
  loginInfo: LoginUserInput
}

export interface MutationForgotPasswordArgs {
  email: ForgotPasswordInput
}

export interface MutationResetPasswordArgs {
  ResetPasswordInfo: ResetPasswordInput
}

export interface MutationSelectBorrowerRateArgs {
  input: SelectRateInput
}

export interface MutationSelectBorrowerRateV2Args {
  input: SelectRateInput
}

export interface MutationUpdateTaskArgs {
  input: TaskUpdateInput
}

export interface MutationSubmitLoanApplicationArgs {
  input: SubmitLoanApplicationInput
}

export interface MutationSubmitPlatformApplicationArgs {
  input: SubmitPlatformApplicationInput
}

export interface MutationConfirmOfferArgs {
  input: ConfirmOfferInput
}

export interface MutationCreateRatesRequestArgs {
  input: CreateRatesRequestInput
}

export interface MutationAffiliateSignupArgs {
  input: AffiliateSignupInput
}

export interface MutationAddPlaidLoansArgs {
  input: PlaidLoansInput
}

export interface MutationCreateAffiliateApiRecordArgs {
  input: CreateAffiliateApiRecordInput
}

export interface MutationCreatePartnerTrackingArgs {
  input: CreatePartnerTrackingInput
}

export interface MutationDeleteLoanArgs {
  input: DeleteLoanInput
}

export interface MutationRestoreLoanArgs {
  input: RestoreLoanInput
}

export interface MutationVerifySsnArgs {
  input: VerifySsnInput
}

export interface MutationCreatePrimaryIncomeBankingInfoRecordArgs {
  input: CreatePrimaryIncomeBankingInfoRecordInput
}

export interface MutationConfirmApplicationDetailsArgs {
  input: ConfirmApplicationDetailsInput
}

export interface MutationUpdateAutoDebitArgs {
  input: UpdateAutoDebitInput
}

export interface MutationVerifyAccountStatusArgs {
  input: VerifyAccountStatusInput
}

export interface MutationOtpRequestIdArgs {
  input: OtpRequestIdInput
}

export interface MutationVerifyOtpCodeArgs {
  input: VerifyOtpCodeInput
}

export interface MutationStartQaFlowArgs {
  input: StartQaFlowInput
}

export interface MutationValidateQaQuestionsArgs {
  input: ValidateQaQuestionInput
}

export interface MutationValidateBonusQuestionArgs {
  input: ValidateBonusQuestionInput
}

export interface MutationCreateCreditKarmaRequestArgs {
  input: CreateCreditKarmaRequestInput
}

export interface MutationCreateExperianRequestArgs {
  input: CreateExperianRequestInput
}

export interface MutationSaveDirectPayUserPreferenceArgs {
  input?: Maybe<SaveDirectPayUserPreferenceInput>
}

export interface MutationSaveDirectPayAllocationsArgs {
  input?: Maybe<SaveDirectPayAllocationsInput>
}

export interface MutationCreateTopUpOfferRequestArgs {
  input: CreateTopUpOfferRequestInput
}

export interface PlaidLinkTokenInput {
  customerId: Scalars['String']
  applicationGuid: Scalars['String']
  linkCustomizationName?: Maybe<Scalars['String']>
  products: Array<Maybe<Scalars['String']>>
  sandbox?: Maybe<Scalars['Boolean']>
  plaidItemId?: Maybe<Scalars['ID']>
  redirectUrl?: Maybe<Scalars['String']>
  /** Specifies filter to apply for account subtypes. See https://plaid.com/docs/api/tokens/#link-token-get-response-metadata-account-filters */
  accountFilters?: Maybe<PlaidLinkAccountFiltersInput>
  auth?: Maybe<PlaidAuthOptionsInput>
  institutionData?: Maybe<PlaidLinkAccountInstitutionDataInput>
}

export interface PlaidLinkAccountFiltersInput {
  loan: PlaidLinkAccountFilterInput
}

export interface PlaidLinkAccountFilterInput {
  account_subtypes: Array<Maybe<Scalars['String']>>
}

export interface PlaidAuthOptionsInput {
  automated_microdeposits_enabled?: Maybe<Scalars['Boolean']>
  same_day_microdeposits_enabled?: Maybe<Scalars['Boolean']>
  instant_match_enabled?: Maybe<Scalars['Boolean']>
}

export interface PlaidLinkAccountInstitutionDataInput {
  routing_number?: Maybe<Scalars['String']>
}

export interface PlaidLinkTokenResponse {
  __typename?: 'PlaidLinkTokenResponse'
  link_token?: Maybe<Scalars['String']>
  expiration?: Maybe<Scalars['String']>
  request_id?: Maybe<Scalars['String']>
}

export interface RegisterPlaidPublicTokenInput {
  customerId: Scalars['String']
  applicationGuid: Scalars['String']
  publicToken: Scalars['String']
  metadata?: Maybe<PlaidLinkSuccessMetadata>
}

export interface PlaidLinkSuccessMetadata {
  status?: Maybe<Scalars['String']>
  link_session_id?: Maybe<Scalars['String']>
  account_id?: Maybe<Scalars['String']>
  transfer_status?: Maybe<Scalars['String']>
  public_token?: Maybe<Scalars['String']>
  account?: Maybe<PlaidAccount>
  accounts?: Maybe<Array<Maybe<PlaidAccounts>>>
  institution?: Maybe<PlaidInstitution>
}

export interface PlaidAccount {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  mask?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  subtype?: Maybe<Scalars['String']>
  verification_status?: Maybe<Scalars['String']>
}

export interface PlaidAccounts {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  mask?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  subtype?: Maybe<Scalars['String']>
  verification_status?: Maybe<Scalars['String']>
}

export interface PlaidInstitution {
  name?: Maybe<Scalars['String']>
  institution_id?: Maybe<Scalars['String']>
}

export interface SaveIncomeAccountInput {
  customerId: Scalars['String']
  applicationGuid: Scalars['String']
  registeredItemId: Scalars['String']
}

export interface SaveIncomeAccountResponse {
  __typename?: 'SaveIncomeAccountResponse'
  success: Scalars['Boolean']
}

export interface SaveFundingAccountInput {
  customerId: Scalars['String']
  applicationGuid: Scalars['String']
  registeredItemId: Scalars['String']
}

export interface SaveFundingAccountResponse {
  __typename?: 'SaveFundingAccountResponse'
  success: Scalars['Boolean']
}

export interface SignUpUserInput {
  first_name?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
  cosignerGuid?: Maybe<Scalars['String']>
  product?: Maybe<Scalars['String']>
  isServiceUser?: Maybe<Scalars['Boolean']>
}

export interface UpdateApplicationInput {
  id: Scalars['ID']
  total_loan_amount?: Maybe<Scalars['Float']>
  personalInfo?: Maybe<PersonalInfoHasOne>
  educationInfoSingular?: Maybe<EducationInfoHasOne>
  employmentInfoSingular?: Maybe<EmploymentInfoHasOne>
  incomeInfo?: Maybe<IncomeInfoHasMany>
  housingInfo?: Maybe<HousingInfoHasOne>
  loans?: Maybe<LoanInfoHasMany>
  intentToAutopay?: Maybe<IntentToAutopayHasMany>
  resident_or_fellow?: Maybe<Scalars['Boolean']>
  loan_owners?: Maybe<LoanOwners[]>
  user?: Maybe<UserBelongsTo>
  refinance_reason?: Maybe<Scalars['String']>
  loan_purpose?: Maybe<PersonalLoanPurposes>
  from_API?: Maybe<Scalars['Boolean']>
}

export interface PersonalInfoHasOne {
  upsert?: Maybe<PersonalInfoInput>
}

export interface PersonalInfoInput {
  id?: Maybe<Scalars['ID']>
  address1?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['Date']>
  months_at_address?: Maybe<Scalars['Int']>
  citizenship?: Maybe<Citizenships>
  ssn?: Maybe<Scalars['String']>
  resident_alien_min_10_years?: Maybe<Scalars['Boolean']>
  permanent_residency_length?: Maybe<PermanentResidencyLengths>
  total_assets?: Maybe<Scalars['Int']>
}

export interface EducationInfoHasOne {
  upsert?: Maybe<EducationInfoInput>
}

export interface EducationInfoInput {
  id?: Maybe<Scalars['ID']>
  degree_id?: Maybe<Scalars['ID']>
  school_id?: Maybe<Scalars['ID']>
  training_end_date?: Maybe<Scalars['Date']>
  school_state_id?: Maybe<Scalars['ID']>
  school_number_id?: Maybe<Scalars['ID']>
  graduation_month?: Maybe<Scalars['Int']>
  graduation_year?: Maybe<Scalars['Int']>
  title_4_school_id?: Maybe<Scalars['ID']>
  medical_specialty_id?: Maybe<Scalars['ID']>
  medical_resident_fellow?: Maybe<Scalars['Boolean']>
  excessive_residency_reason?: Maybe<Scalars['String']>
  associates_experience?: Maybe<Scalars['Boolean']>
  aggregate_school_id?: Maybe<Scalars['ID']>
  associates_employment_offer?: Maybe<Scalars['Boolean']>
  bachelors_employed_in_healthcare?: Maybe<Scalars['Boolean']>
  bachelors_employed_12_months?: Maybe<Scalars['Boolean']>
}

export interface EmploymentInfoHasOne {
  upsert?: Maybe<EmploymentInfoInput>
}

export interface EmploymentInfoInput {
  id?: Maybe<Scalars['ID']>
  status?: Maybe<EmploymentStatuses>
  employer_name?: Maybe<Scalars['String']>
  occupation_id?: Maybe<Scalars['Int']>
  phone?: Maybe<Scalars['String']>
  length_of_time_years?: Maybe<Scalars['Int']>
  length_of_time_months?: Maybe<Scalars['Int']>
  pay_months_per_year?: Maybe<Scalars['Int']>
  gross_income?: Maybe<Scalars['Int']>
  job_title?: Maybe<Scalars['String']>
  start_month?: Maybe<Scalars['Int']>
  start_year?: Maybe<Scalars['Int']>
  address?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state_id?: Maybe<Scalars['Int']>
  zip?: Maybe<Scalars['Int']>
  prev_employer_name?: Maybe<Scalars['String']>
  prev_occupation_id?: Maybe<Scalars['Int']>
  prev_job_title?: Maybe<Scalars['String']>
  prev_start_month?: Maybe<Scalars['Int']>
  prev_start_year?: Maybe<Scalars['Int']>
  prev_address?: Maybe<Scalars['String']>
  prev_city?: Maybe<Scalars['String']>
  prev_state_id?: Maybe<Scalars['Int']>
  prev_zip?: Maybe<Scalars['Int']>
  prev_income?: Maybe<Scalars['Int']>
  prev_end_month?: Maybe<Scalars['Int']>
  prev_end_year?: Maybe<Scalars['Int']>
  income_source_id?: Maybe<Scalars['Int']>
  start_date?: Maybe<Scalars['Date']>
  is_travel_pt?: Maybe<Scalars['Boolean']>
}

export interface IncomeInfoHasMany {
  upsert?: Maybe<IncomeInfoInput[]>
}

export interface IncomeInfoInput {
  id?: Maybe<Scalars['ID']>
  amount: Scalars['Int']
  master_income_source?: Maybe<MasterIncomeSources>
  deleted_at?: Maybe<Scalars['DateTime']>
}

export interface HousingInfoHasOne {
  upsert?: Maybe<HousingInfoInput>
}

export interface HousingInfoInput {
  id?: Maybe<Scalars['ID']>
  status?: Maybe<HousingStatuses>
  monthly_housing_cost?: Maybe<Scalars['Int']>
  address1?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
  previous_address1?: Maybe<Scalars['String']>
  previous_address2?: Maybe<Scalars['String']>
  previous_city?: Maybe<Scalars['String']>
  previous_state?: Maybe<Scalars['String']>
  previous_zip?: Maybe<Scalars['String']>
  length_id?: Maybe<Scalars['ID']>
  previous_length_id?: Maybe<Scalars['ID']>
  comment?: Maybe<Scalars['String']>
}

export interface LoanInfoHasMany {
  upsert?: Maybe<Array<Maybe<LoanInfoInput>>>
}

export interface LoanInfoInput {
  id?: Maybe<Scalars['ID']>
  type: LoanTypes
  lender_id: Scalars['ID']
  servicer_id: Scalars['ID']
  account_number: Scalars['String']
  balance: Scalars['Float']
  balance_to_refi: Scalars['Float']
  interest_rate_bp: Scalars['Int']
  source?: Maybe<LoanSources>
}

export interface IntentToAutopayHasMany {
  upsert?: Maybe<Array<Maybe<IntentToAutopayInput>>>
}

export interface IntentToAutopayInput {
  intends_to_autopay: Scalars['Boolean']
  location?: Maybe<AutopayLocations>
}

/** Autopay locations */
export enum AutopayLocations {
  /** Prequal */
  Prequal = 'PREQUAL',
  /** Rates */
  Rates = 'RATES',
  /** Document sign */
  DocumentSign = 'DOCUMENT_SIGN'
}

export interface UserBelongsTo {
  upsert?: Maybe<UserInput>
}

export interface UserInput {
  id?: Maybe<Scalars['ID']>
  first_name?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  suffix?: Maybe<Suffixes>
}

export interface CreateApplicationInput {
  product: Products
  cosignerGuid?: Maybe<Scalars['String']>
}

export interface SignUpUserFromApiInput {
  request_origin_key: Scalars['String']
  first_name: Scalars['String']
  last_name: Scalars['String']
  email: Scalars['String']
}

export interface GetRatesInput {
  request_origin_key: Scalars['String']
  partner_id?: Maybe<Scalars['String']>
  subpartner_id?: Maybe<Scalars['String']>
  partner_lead_id?: Maybe<Scalars['String']>
  first_name: Scalars['String']
  last_name: Scalars['String']
  email: Scalars['String']
  total_loan_amount: Scalars['Float']
  us_citizen: Scalars['Boolean']
  school_code: Scalars['String']
  degree: Scalars['String']
  occupation?: Maybe<Scalars['String']>
  last_change_of_address?: Maybe<Scalars['Date']>
  ssn: Scalars['String']
  can_market?: Maybe<Scalars['Boolean']>
  personalInfo: PersonalInfoHasOne
  educationInfoSingular: EducationInfoHasOne
  employmentInfoSingular: EmploymentInfoHasOne
  incomeInfo: IncomeInfoHasMany
  housingInfo: HousingInfoHasOne
}

export interface RatesApiResponse {
  __typename?: 'RatesApiResponse'
  offers?: Maybe<Array<Maybe<BorrowerRate>>>
  declinedReason?: Maybe<Scalars['String']>
  requestId?: Maybe<Scalars['String']>
}

export interface LoginUserInput {
  email: Scalars['String']
  password: Scalars['String']
}

export interface ForgotPasswordInput {
  email: Scalars['String']
}

export interface ResetPasswordInput {
  key: Scalars['String']
  password: Scalars['String']
}

export interface SelectRateInput {
  application_guid: Scalars['String']
  borrower_rate_id: Scalars['String']
}

export interface TaskUpdateInput {
  id: Scalars['String']
  status?: Maybe<Scalars['String']>
  meta?: Maybe<TaskMetaDataInput>
  application_guid: Scalars['String']
}

export interface TaskMetaDataInput {
  documents?: Maybe<Array<Maybe<DocumentMeta>>>
  plaidItemId?: Maybe<Scalars['String']>
  verificationStatus?: Maybe<PlaidVerificationStatus>
}

export interface DocumentMeta {
  document_format: Scalars['Int']
  document_subtype: Scalars['Int']
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export interface TaskUpdateResponse {
  __typename?: 'TaskUpdateResponse'
  id?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  metadata?: Maybe<Scalars['String']>
  tasks?: Maybe<Array<Maybe<BorrowerTask>>>
}

export interface SubmitLoanApplicationInput {
  application_guid: Scalars['String']
}

export interface SubmitPlatformApplicationInput {
  application_guid: Scalars['String']
}

export interface ConfirmOfferInput {
  application_guid: Scalars['String']
  task_id: Scalars['String']
  borrower_rate_id: Scalars['String']
}

export interface CreateRatesRequestInput {
  application_guid: Scalars['String']
}

/** Response from the rates service. */
export interface RatesResponse {
  __typename?: 'RatesResponse'
  rates?: Maybe<Array<Maybe<Rate>>>
  noRatesReasons?: Maybe<Array<Maybe<NoRatesReason>>>
  /** The updated loan application after a rates request is completed */
  application?: Maybe<LoanApplication>
}

/** Reason for not receiving rates */
export interface NoRatesReason {
  __typename?: 'NoRatesReason'
  type?: Maybe<NoRatesReasons>
  info?: Maybe<CreditIssueInfo>
}

/** No rates reasons */
export enum NoRatesReasons {
  /** No credit profile */
  NoCreditProfile = 'NoCreditProfile',
  /** Invalid cosigner */
  InvalidCosigner = 'InvalidCosigner',
  /** Credit issue */
  CreditIssue = 'CreditIssue',
  /** Hard denied */
  HardDenied = 'HardDenied',
  /** Soft denied */
  SoftDenied = 'SoftDenied'
}

/** Represents an issue with a credit profile from a particular bureau */
export interface CreditIssueInfo {
  __typename?: 'CreditIssueInfo'
  source?: Maybe<CreditSources>
  issues?: Maybe<Array<Maybe<CreditIssues>>>
}

/** Credit sources */
export enum CreditSources {
  /** Experian */
  Experian = 'Experian',
  /** Trans union */
  TransUnion = 'TransUnion',
  /** Equifax */
  Equifax = 'Equifax'
}

/** Credit issues */
export enum CreditIssues {
  /** Credit freeze */
  CreditFreeze = 'CreditFreeze',
  /** Fraud alert */
  FraudAlert = 'FraudAlert',
  /** Insufficient credit */
  InsufficientCredit = 'InsufficientCredit',
  /** Too many inquiries */
  TooManyInquiries = 'TooManyInquiries',
  /** California subject selection */
  CaliforniaSubjectSelection = 'CaliforniaSubjectSelection'
}

export interface AffiliateSignupInput {
  password: Scalars['String']
  rate_id_encrypted: Scalars['String']
}

export interface AffiliateSignupResponse {
  __typename?: 'AffiliateSignupResponse'
  product: Scalars['String']
  application_guid: Scalars['String']
  user: User
}

export interface PlaidLoansInput {
  access_token: Scalars['String']
  application_guid: Scalars['String']
}

export interface CreateAffiliateApiRecordInput {
  user_id?: Maybe<Scalars['ID']>
  application_id?: Maybe<Scalars['ID']>
  borrower_rates_request_id?: Maybe<Scalars['ID']>
  partner_id?: Maybe<Scalars['ID']>
  partner_tracking_id?: Maybe<Scalars['ID']>
  product_id?: Maybe<Scalars['ID']>
  response_id?: Maybe<Scalars['ID']>
  response_message?: Maybe<Scalars['String']>
  external_tracking_id?: Maybe<Scalars['String']>
}

/** Information used to track affiliate api users/applications, which partners they come from, and their basic response. */
export interface AffiliateApiRecord {
  __typename?: 'AffiliateApiRecord'
  id: Scalars['ID']
  user_id?: Maybe<Scalars['ID']>
  application_id?: Maybe<Scalars['ID']>
  borrower_rates_request_id?: Maybe<Scalars['ID']>
  partner_id?: Maybe<Scalars['ID']>
  partner_tracking_id?: Maybe<Scalars['ID']>
  product_id?: Maybe<Scalars['ID']>
  response_id?: Maybe<Scalars['ID']>
  response_message?: Maybe<Scalars['String']>
  external_tracking_id?: Maybe<Scalars['String']>
}

export interface CreatePartnerTrackingInput {
  partner_id: Scalars['ID']
  subpartner_id?: Maybe<Scalars['String']>
  user_id: Scalars['ID']
}

export interface DeleteLoanInput {
  id: Scalars['ID']
  application_guid: Scalars['String']
}

export interface RestoreLoanInput {
  id: Scalars['ID']
  application_guid: Scalars['String']
}

export interface VerifySsnInput {
  application_guid: Scalars['String']
  ssn: Scalars['String']
}

export interface CreatePrimaryIncomeBankingInfoRecordInput {
  application_guid: Scalars['String']
  account_number: Scalars['String']
  routing_number: Scalars['String']
  account_type: AchAccountTypes
}

export interface ConfirmApplicationDetailsInput {
  application_guid: Scalars['String']
  ssn: Scalars['String']
  email: Scalars['String']
}

export interface UpdateAutoDebitInput {
  application_guid: Scalars['String']
  enabled: Scalars['Boolean']
}

export interface UpdateAutoDebitResponse {
  __typename?: 'UpdateAutoDebitResponse'
  success: Scalars['Boolean']
}

export interface VerifyAccountStatusInput {
  application_guid: Scalars['String']
}

export interface VerifyAccountStatusResponse {
  __typename?: 'VerifyAccountStatusResponse'
  account_status?: Maybe<AccountVerificationStatuses>
}

/** Account verification statuses */
export enum AccountVerificationStatuses {
  /** Verified */
  Verified = 'Verified',
  /** Not verified */
  NotVerified = 'NotVerified'
}

export interface OtpRequestIdInput {
  application_guid: Scalars['String']
  contact_method: Scalars['String']
}

/**
 * Pylon response to an otpRequestId query. It includes a request_id which can later be matched
 * with a user inputted otp code in order to verify the phone number. The request_id is a UUID.
 */
export interface OtpRequestResponse {
  __typename?: 'OtpRequestResponse'
  request_id?: Maybe<Scalars['String']>
  request_status: RequestStatus
  tps_error?: Maybe<Scalars['String']>
}

export enum RequestStatus {
  Ok = 'OK',
  Error = 'ERROR'
}

export interface VerifyOtpCodeInput {
  application_guid: Scalars['String']
  request_id: Scalars['String']
  otp_code: Scalars['String']
}

/** Pylon response to a verifyOtpCode query.  */
export interface VerifyOtpCodeResponse {
  __typename?: 'VerifyOtpCodeResponse'
  fraud_status: Scalars['String']
  otp_result: OtpVerificationResponse
}

export enum OtpVerificationResponse {
  AuthenticationSuccess = 'AUTHENTICATION_SUCCESS',
  InvalidPasscode = 'INVALID_PASSCODE',
  AuthenticationFailure = 'AUTHENTICATION_FAILURE',
  InvalidTransaction = 'INVALID_TRANSACTION'
}

/** Required data to start the IIDQA Flow on Pylon */
export interface StartQaFlowInput {
  application_guid: Scalars['String']
}

/**
 * Pylon response including the newly created request_id and the list of questions
 * to show to the user.
 */
export interface StartQaFlowResponse {
  __typename?: 'StartQAFlowResponse'
  fraud_status?: Maybe<FraudStatus>
  request_id?: Maybe<Scalars['String']>
  questions?: Maybe<QaQuestionSet>
  request_status: RequestStatus
  iidqa_result?: Maybe<IidqaResult>
}

/** Question set returned from Pylon, includes an identifier and an array of questions */
export interface QaQuestionSet {
  __typename?: 'QAQuestionSet'
  QuestionSetId: Scalars['String']
  Questions: QaQuestion[]
}

/** Question to be shown to the user in the QA Flow for Fraud Check */
export interface QaQuestion {
  __typename?: 'QAQuestion'
  QuestionId: Scalars['String']
  Key: Scalars['String']
  Type: Scalars['String']
  Text: QaText
  HelpText?: Maybe<QaText>
  Choices: ResponseChoice[]
}

export interface QaText {
  __typename?: 'QAText'
  Statement: Scalars['String']
}

/** Choices are the available responses a user can pick when answering an IIDQA question. */
export interface ResponseChoice {
  __typename?: 'ResponseChoice'
  ChoiceId: Scalars['String']
  Text?: Maybe<QaText>
}

export enum IidqaResult {
  BonusQuestion = 'BONUS_QUESTION',
  AuthenticationTimeout = 'AUTHENTICATION_TIMEOUT',
  AuthenticationSuccess = 'AUTHENTICATION_SUCCESS',
  AuthenticationFailure = 'AUTHENTICATION_FAILURE',
  TooManyRequests = 'TOO_MANY_REQUESTS',
  Denial = 'DENIAL',
  Unknown = 'UNKNOWN'
}

/** Required data to run a validation of the initial batch of questions */
export interface ValidateQaQuestionInput {
  application_guid: Scalars['String']
  /** The identifier of the initial IIDQA request returned on StartQAFlow. */
  request_id: Scalars['String']
  question_set_id: Scalars['String']
  answers: AnswerQaInput[]
}

/** Representation of the answer the user picked on a particular question */
export interface AnswerQaInput {
  question_id: Scalars['String']
  choices: Array<Scalars['String']>
}

/** Includes a fraud_status indicator and an optional set of questions when fraud_status = IIDQA */
export interface ValidateQaQuestionsResponse {
  __typename?: 'ValidateQAQuestionsResponse'
  fraud_status: FraudStatus
  request_status: RequestStatus
  iidqa_result: IidqaResult
  questions?: Maybe<QaQuestionSet>
}

export interface ValidateBonusQuestionInput {
  application_guid: Scalars['String']
  /** The identifier of the initial IIDQA request returned on StartQAFlow. */
  request_id: Scalars['String']
  question_set_id: Scalars['String']
  answers: AnswerQaInput[]
}

export interface ValidateBonusQuestionResponse {
  __typename?: 'ValidateBonusQuestionResponse'
  fraud_status: FraudStatus
  request_status: RequestStatus
  iidqa_result: IidqaResult
}

export interface CreateCreditKarmaRequestInput {
  ck_tracking_id: Scalars['String']
  request_type: Scalars['String']
  offer_amount?: Maybe<CurrencyInput>
  offer_term_months?: Maybe<Scalars['Int']>
  offer_apr_bp?: Maybe<Scalars['Int']>
  income_band?: Maybe<Scalars['String']>
  housing_payment_band?: Maybe<Scalars['String']>
  home_ownership_status?: Maybe<Scalars['Boolean']>
  loan_purpose?: Maybe<Scalars['String']>
  model_id?: Maybe<Scalars['Int']>
  campaign?: Maybe<Scalars['String']>
  approving_model_id?: Maybe<Scalars['Int']>
}

export interface CurrencyInput {
  currency_amount: Scalars['String']
  currency_code: Scalars['String']
}

export interface CreateExperianRequestInput {
  experian_tracking_id: Scalars['String']
  offer_amount?: Maybe<CurrencyInput>
  offer_total_cost?: Maybe<CurrencyInput>
  offer_monthly_payment?: Maybe<CurrencyInput>
  offer_term_months?: Maybe<Scalars['Int']>
  offer_apr_bp?: Maybe<Scalars['Int']>
}

export interface SaveDirectPayUserPreferenceInput {
  application_guid: Scalars['String']
  status: DirectPayOptInStatuses
}

export interface SaveDirectPayAllocationsInput {
  application_guid: Scalars['String']
  allocations?: Maybe<DirectPayAllocationInput[]>
  confirmation?: Maybe<Scalars['Boolean']>
}

export interface DirectPayAllocationInput {
  id?: Maybe<Scalars['String']>
  amount_cents?: Maybe<Scalars['Int']>
}

export interface CreateTopUpOfferRequestInput {
  borrower_rate_id: Scalars['String']
}

/** Occupations */
export enum Occupations {
  /** Administrative clericalstaff */
  AdministrativeClericalstaff = 'Administrative_clericalstaff',
  /** Agriculture */
  Agriculture = 'Agriculture',
  /** Banking  financial  insurance services */
  BankingFinancialInsuranceServices = 'Banking_Financial_InsuranceServices',
  /** Certifiedtrade */
  Certifiedtrade = 'Certifiedtrade',
  /** Computer  i t */
  ComputerIt = 'Computer_IT',
  /** Cpa */
  Cpa = 'CPA',
  /** Doctor  dentist  pharmacist */
  DoctorDentistPharmacist = 'Doctor_Dentist_Pharmacist',
  /** Education */
  Education = 'Education',
  /** Engineer */
  Engineer = 'Engineer',
  /** Entertainment */
  Entertainment = 'Entertainment',
  /** Executive  senior management */
  ExecutiveSeniorManagement = 'Executive_SeniorManagement',
  /** Food service */
  FoodService = 'FoodService',
  /** Legal practitioner */
  LegalPractitioner = 'LegalPractitioner',
  /** Manufacturing */
  Manufacturing = 'Manufacturing',
  /** Military enlisted */
  MilitaryEnlisted = 'Military_enlisted',
  /** Military officer */
  MilitaryOfficer = 'Military_officer',
  /** Nurse  healthtechnician */
  NurseHealthtechnician = 'Nurse_Healthtechnician',
  /** Other */
  Other = 'Other',
  /** Othertrade */
  Othertrade = 'Othertrade',
  /** Phonerepresentative */
  Phonerepresentative = 'Phonerepresentative',
  /** Sales  retail */
  SalesRetail = 'Sales_Retail',
  /** Selfemployed */
  Selfemployed = 'Selfemployed',
  /** Student */
  Student = 'Student',
  /** Unemployed no income */
  UnemployedNoIncome = 'UnemployedNoIncome',
  /** Unemployed with income */
  UnemployedWithIncome = 'UnemployedWithIncome',
  /** Anesthesia assistant */
  AnesthesiaAssistant = 'AnesthesiaAssistant',
  /** Anesthesiologist assistant */
  AnesthesiologistAssistant = 'AnesthesiologistAssistant',
  /** Anesthetist */
  Anesthetist = 'Anesthetist',
  /** Arnp */
  Arnp = 'ARNP',
  /** Associate optometrist */
  AssociateOptometrist = 'AssociateOptometrist',
  /** Audiologist */
  Audiologist = 'Audiologist',
  /** Certified anesthesiologist assistant */
  CertifiedAnesthesiologistAssistant = 'CertifiedAnesthesiologistAssistant',
  /** Certified registered nurse anesthetist */
  CertifiedRegisteredNurseAnesthetist = 'CertifiedRegisteredNurseAnesthetist',
  /** Chiropractor */
  Chiropractor = 'Chiropractor',
  /** Clinical pharmacy specialist */
  ClinicalPharmacySpecialist = 'ClinicalPharmacySpecialist',
  /** Clinical training manager */
  ClinicalTrainingManager = 'ClinicalTrainingManager',
  /** Dentist */
  Dentist = 'Dentist',
  /** Dietitian */
  Dietitian = 'Dietitian',
  /** Hospitalist coordinator */
  HospitalistCoordinator = 'HospitalistCoordinator',
  /** Lead clinician */
  LeadClinician = 'LeadClinician',
  /** Managerof clinical services */
  ManagerofClinicalServices = 'ManagerofClinicalServices',
  /** Medical secretary */
  MedicalSecretary = 'MedicalSecretary',
  /** Nurse */
  Nurse = 'Nurse',
  /** Nurse anesthetist */
  NurseAnesthetist = 'NurseAnesthetist',
  /** Nurse practitioner */
  NursePractitioner = 'NursePractitioner',
  /** Ophthalmologist */
  Ophthalmologist = 'Ophthalmologist',
  /** Optometrist */
  Optometrist = 'Optometrist',
  /** Oral surgeon */
  OralSurgeon = 'OralSurgeon',
  /** Occupational therapist */
  OccupationalTherapist = 'OccupationalTherapist',
  /** Orthodontist */
  Orthodontist = 'Orthodontist',
  /** Patient care manager */
  PatientCareManager = 'PatientCareManager',
  /** Pharmacist */
  Pharmacist = 'Pharmacist',
  /** Pharmacy manager */
  PharmacyManager = 'PharmacyManager',
  /** Physical therapist */
  PhysicalTherapist = 'PhysicalTherapist',
  /** Physician */
  Physician = 'Physician',
  /** Physician assistant */
  PhysicianAssistant = 'PhysicianAssistant',
  /** Professor medical */
  ProfessorMedical = 'Professor_medical',
  /** Prosthodontist */
  Prosthodontist = 'Prosthodontist',
  /** Psychiatrist */
  Psychiatrist = 'Psychiatrist',
  /** Registered nurse */
  RegisteredNurse = 'RegisteredNurse',
  /** Resident physician */
  ResidentPhysician = 'ResidentPhysician',
  /** Speech language pathologist */
  SpeechLanguagePathologist = 'SpeechLanguagePathologist',
  /** Veterinarian */
  Veterinarian = 'Veterinarian',
  /** Auto repair */
  AutoRepair = 'AutoRepair',
  /** Construction */
  Construction = 'Construction'
}

/** Refinance reasons */
export enum RefinanceReasons {
  /** Payoff sooner */
  PayoffSooner = 'PayoffSooner',
  /** Lower interest */
  LowerInterest = 'LowerInterest',
  /** Lower payment */
  LowerPayment = 'LowerPayment',
  /** Transfer loans */
  TransferLoans = 'TransferLoans',
  /** Not sure */
  NotSure = 'NotSure'
}

/** Task type */
export enum TaskTypes {
  /** Identification */
  Identification = 'IDENTIFICATION',
  /** Income */
  Income = 'INCOME',
  /** Application submit */
  ApplicationSubmit = 'APPLICATION_SUBMIT',
  /** Funding */
  Funding = 'FUNDING',
  /** Review */
  Review = 'REVIEW',
  /** Sign */
  Sign = 'SIGN',
  /** Document */
  Document = 'DOCUMENT',
  /** Personal */
  Personal = 'PERSONAL',
  /** Loans */
  Loans = 'LOANS',
  /** Direct pay enrollment */
  DirectPayEnrollment = 'DIRECT_PAY_ENROLLMENT',
  /** Direct pay confirmation */
  DirectPayConfirmation = 'DIRECT_PAY_CONFIRMATION'
}

/** Fraud statuses */
export enum FraudStatuses {
  /** Low Risk - Pass */
  Pass = 'PASS',
  /** Medium Risk - OTP */
  Otp = 'OTP',
  /** Medium Risk - IIDQA */
  Iidqa = 'IIDQA',
  /** High Risk - Fail */
  Fail = 'FAIL'
}

/**
 * Fraud Statuses Pylon can respond with when validating the initial batch of responses.
 * PASS = User responded all questions correctly.
 * FAIL = User responded incorrectly more questions than the allowed threshold.
 * IIDQA = User responded incorrectly but is given an extra question.
 */
export enum QaValidationStatus {
  Pass = 'PASS',
  Fail = 'FAIL',
  Iidqa = 'IIDQA'
}

export interface SignInUserFromApiInput {
  request_origin_key: Scalars['String']
  email: Scalars['String']
}

export interface ApplicationId {
  id: Scalars['ID']
}

export interface AddCosignerInput {
  application_guid: Scalars['String']
  first_name: Scalars['String']
  last_name: Scalars['String']
  email: Scalars['String']
  phone: Scalars['String']
  relationship_id: Scalars['Int']
}

/** Defines the Rates to be returned to the RatesAPI */
export interface Rates {
  __typename?: 'Rates'
  id: Scalars['ID']
  application_id: LoanApplication
  term_years: Scalars['Int']
  rate_bp: Scalars['Int']
  rate_type: Scalars['String']
  tier: Scalars['Int']
  rate_source_id?: Maybe<RateSource>
  ach_discount_available: Scalars['Int']
  ach_discount_active: Scalars['Int']
  ach_discount_amount: Scalars['Int']
  monthly_payment: Scalars['Int']
}

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Minimum. */
  Min = 'MIN',
  /** Maximum. */
  Max = 'MAX',
  /** Sum. */
  Sum = 'SUM',
  /** Amount of items. */
  Count = 'COUNT'
}

/** Allows ordering a list of records. */
export interface OrderByClause {
  /** The column that is used for ordering. */
  column: Scalars['String']
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Information about pagination using a fully featured paginator. */
export interface PaginatorInfo {
  __typename?: 'PaginatorInfo'
  /** Number of items in the current page. */
  count: Scalars['Int']
  /** Index of the current page. */
  currentPage: Scalars['Int']
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>
  /** Index of the last available page. */
  lastPage: Scalars['Int']
  /** Number of items per page. */
  perPage: Scalars['Int']
  /** Number of total available items. */
  total: Scalars['Int']
}

/** Information about pagination using a simple paginator. */
export interface SimplePaginatorInfo {
  __typename?: 'SimplePaginatorInfo'
  /** Number of items in the current page. */
  count: Scalars['Int']
  /** Index of the current page. */
  currentPage: Scalars['Int']
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>
  /** Number of items per page. */
  perPage: Scalars['Int']
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']
}

/** Information about pagination using a Relay style cursor connection. */
export interface PageInfo {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int']
  /** Number of nodes in the current page. */
  count: Scalars['Int']
  /** Index of the current page. */
  currentPage: Scalars['Int']
  /** Index of the last available page. */
  lastPage: Scalars['Int']
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}
