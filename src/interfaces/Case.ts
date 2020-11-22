import { Failure } from './Failure'

export interface Case {
	case_code: string
	age: number
	sex: string
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
