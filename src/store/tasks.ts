import {
  AdditionalDocumentUploadTask,
  BorrowerTask,
  DirectPayConfirmationTask,
  DirectPayTask,
  DocumentSignTask,
  FundingTask,
  IdentificationTask,
  IncomeTask,
  PersonalInfoTask,
  ReviewTask,
  SubmitApplicationTask,
  TaskStatuses
} from '../app/schema'

const PersonalInfo: PersonalInfoTask = {
  id: '1',
  status: TaskStatuses.Created,
  title: '',
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'PersonalInfoTask'
}
const Identification: IdentificationTask = {
  __typename: 'IdentificationTask',
  id: '2',
  status: TaskStatuses.Complete,
  title: "i'm identification task",
  description: 'Please upload proof for identification <wording to be formalized> ',
  isBlocked: false,
  dependent_types: [],
  metadata: {
    documentRequests: [
      {
        title: 'Identity Verification',
        description: 'Upload a document to verify your identity.',
        documentType: 24,
        groups: [
          {
            title: 'Driver License',
            description: 'Upload or take a photo of your valid driver license',
            requirements: [
              {
                title: 'Upload Driver License',
                documentSubType: 5,
                __typename: 'Requirement'
              }
            ],
            __typename: 'DocumentGroup'
          },
          {
            title: 'State ID',
            description: 'Upload or take a photo of your valid state ID issued by the state of your current residence.',
            requirements: [
              {
                title: 'Upload State ID',
                documentSubType: 8,
                __typename: 'Requirement'
              }
            ],
            __typename: 'DocumentGroup'
          },
          {
            title: 'Passport',
            description: 'Upload or take a photo of your valid federal passport',
            requirements: [
              {
                title: 'Upload Passport',
                documentSubType: 6,
                __typename: 'Requirement'
              }
            ],
            __typename: 'DocumentGroup'
          }
        ],
        __typename: 'DocumentRequest'
      }
    ],
    __typename: 'IdentificationTaskMetadata'
  }
}
const Income: IncomeTask = {
  __typename: 'IncomeTask',
  id: '3',
  status: TaskStatuses.Created,
  title: "i'm income task",
  description: 'Please upload proof for income <wording to be formalized>',
  dependent_types: null,
  metadata: {
    isPlaidEligible: null,
    documentRequests: [
      {
        title: 'Income Verification',
        description: 'Please verify your <b>salary</b> income by providing the following documentation:',
        documentType: 1,
        groups: [
          {
            title: 'Most Recent Paystub',
            description:
              "Provide one (1) paystub from within the last 30 days. Be sure it includes your name, your employer's name, the pay period, and a breakdown of your wages.<br><br>This document must be a PDF.",
            requirements: [
              {
                title: 'Upload Paystub',
                documentSubType: 1,
                acceptedMimeTypes: null,
                __typename: 'Requirement'
              }
            ],
            __typename: 'DocumentGroup'
          }
        ],
        __typename: 'DocumentRequest'
      },
      {
        title: 'Income Verification',
        description: 'Please verify your <b>salary</b> income by providing the following documentation:',
        documentType: 1,
        groups: [
          {
            title: 'Bank Statement',
            description:
              "Enter your <b>bank information</b>. Include your routing number and account number for the statement you're providing.<br><br>Submit a <b>bank statement</b> downloaded <b>directly from the bank your paycheck is deposited into</b>, showing all pages and your income deposits for the last 30 days.<br><br>This document must be a PDF.",
            requirements: [
              {
                title: 'Upload Bank Statement',
                documentSubType: 43,
                acceptedMimeTypes: ['application/pdf'],
                __typename: 'Requirement'
              }
            ],
            __typename: 'DocumentGroup'
          }
        ],
        __typename: 'DocumentRequest'
      }
    ],
    __typename: 'IncomeTaskMetadata'
  }
}
const DirectPay: DirectPayTask = {
  id: '4',
  status: TaskStatuses.Created,
  title: '',
  assignee: {
    id: '1',
    type: ''
  },
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'DirectPayTask'
}
const Submit: SubmitApplicationTask = {
  id: '5',
  status: TaskStatuses.Created,
  title: '',
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'SubmitApplicationTask'
}
const Review: ReviewTask = {
  id: '6',
  status: TaskStatuses.Created,
  title: '',
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'ReviewTask'
}
const Funding: FundingTask = {
  id: '7',
  status: TaskStatuses.Created,
  title: '',
  metadata: {
    plaidItemId: '1',
    __typename: 'FundingTaskMetadata'
  },
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'FundingTask'
}
const DirectPayConfirmation: DirectPayConfirmationTask = {
  id: '8',
  status: TaskStatuses.Created,
  title: '',
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'DirectPayConfirmationTask'
}
const DocumentSign: DocumentSignTask = {
  id: '9',
  status: TaskStatuses.Created,
  title: '',
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'DocumentSignTask'
}

// const Loans: LoansTask = {
//   id: '10',
//   status: TaskStatuses.Created,
//   title: '',
//   dependent_types: null,
//   description: '',
//   isBlocked: false,
//   __typename: 'LoansTask'
// }

const AdditionalDocumentUpload: AdditionalDocumentUploadTask = {
  id: '11',
  status: TaskStatuses.Complete,
  title: '',
  dependent_types: null,
  description: '',
  isBlocked: false,
  __typename: 'AdditionalDocumentUploadTask'
}

export const tasks: BorrowerTask[] = [
  PersonalInfo,
  // Loans,
  Identification,
  Income,
  DirectPay,
  Submit,
  AdditionalDocumentUpload,
  Review,
  Funding,
  DirectPayConfirmation,
  DocumentSign
]
