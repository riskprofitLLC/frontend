import { IPublicUser } from '../../register/model/user.model'

export interface ILogin {
	name: string
	password: string
}

export interface ILoginResponse {
	result: boolean
	message: string
	data?: { user: IPublicUser; token: string }
}
