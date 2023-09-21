import { EmploymentInfo, EmploymentStatuses } from '../app/schema'

export const employmentInfo: Partial<EmploymentInfo> = {
  id: '1',
  gross_income: 100000,
  status: EmploymentStatuses.Salary,
  start_date: new Date().toISOString(),
  start_month: new Date().getMonth() + 1,
  start_year: new Date().getFullYear(),
  occupation_id: null
}
