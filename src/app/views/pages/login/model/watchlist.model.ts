import { ERole } from '../../register/model/user.model'

export interface IWatchListResponse {
	result: boolean
	message: string
	data?: IUserList
}

interface IUserList {
	_id: string
	userId: string
	name: string
	role: ERole
	balance: { noIncome: string; withIncome: string }
	profit: { balance: string; percent: number; yearPercent: number }
	date: { now: Date; state: Date; start: Date }
}
