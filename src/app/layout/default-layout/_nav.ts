import { INavData } from '@coreui/angular'

export const navUserItems: INavData[] = [
	{
		name: 'Статистика',
		url: '/dashboard',
		iconComponent: { name: 'cil-speedometer' },
		badge: {
			color: 'info',
			text: 'NEW'
		}
	}
]

export const navAdminItems: INavData[] = [
	...navUserItems,
	...[
		{
			title: true,
			name: 'ADMIN'
		},
		{
			name: 'Pages',
			url: '/login',
			iconComponent: { name: 'cil-star' },
			children: [
				{
					name: 'Login',
					url: '/login',
					icon: 'nav-icon-bullet'
				},
				{
					name: 'Register',
					url: '/register',
					icon: 'nav-icon-bullet'
				},
				{
					name: 'Error 404',
					url: '/404',
					icon: 'nav-icon-bullet'
				},
				{
					name: 'Error 500',
					url: '/500',
					icon: 'nav-icon-bullet'
				}
			]
		}
	]
]
