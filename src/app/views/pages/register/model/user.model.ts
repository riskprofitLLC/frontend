export interface IPublicUser {
	name: string
	role: ERole
	balance: string
	date: Date
	_id: string
}

export enum ERole {
	admin = 'admin',
	user = 'user'
}
