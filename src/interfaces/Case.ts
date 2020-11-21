import { Failure } from './Failure'

export interface Case {
	case_code: string
	age: number
	sex: string
}

export interface FailureCase extends Failure {
	reason: string
}
