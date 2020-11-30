import { Failure } from './Failure'

export interface Case {
	case_code: string
	age: number
	sex: string
	date_start_case?: date
	date_result_release?: date
	date_result_positive?: date
	status?: string
	region?: string
	city?: string
	quarantined?: boolean
	pregnant?: boolean
}

export interface TotalCases {
	total_cases: number
}

export interface FailureCase extends Failure {
	reason: string
}

export interface FailureTotalCases extends Failure {
	reason: string,
	total_cases: number
}
