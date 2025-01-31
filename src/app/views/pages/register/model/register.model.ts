import { ERole, IPublicUser } from './user.model'

export interface IRegister {
	name: string
	role: ERole
	balance: number
	password: string
}

export interface IRegisterResponse {
	result: boolean
	message: string
	data?: IPublicUser
}
