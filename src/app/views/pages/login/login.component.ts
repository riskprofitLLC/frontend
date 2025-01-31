import { Component, inject } from '@angular/core'
import { NgStyle } from '@angular/common'
import { IconDirective } from '@coreui/icons-angular'
import {
	ContainerComponent,
	RowComponent,
	ColComponent,
	CardGroupComponent,
	// TextColorDirective,
	CardComponent,
	CardBodyComponent,
	FormDirective,
	InputGroupComponent,
	InputGroupTextDirective,
	FormControlDirective,
	ButtonDirective
} from '@coreui/angular'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { IWatchListResponse } from './model/watchlist.model'
import { LoginService } from './service/login.service'
import { ILogin, ILoginResponse } from './model/login.model'
import { WatchlistService } from './service/watchlist.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	imports: [
		ContainerComponent,
		RowComponent,
		ColComponent,
		CardGroupComponent,
		// TextColorDirective,
		CardComponent,
		CardBodyComponent,
		FormDirective,
		InputGroupComponent,
		InputGroupTextDirective,
		IconDirective,
		FormControlDirective,
		ButtonDirective,
		NgStyle,
		FormsModule
	],
	standalone: true
})
export class LoginComponent {
	loginObj: ILogin = { name: '', password: '' }
	router = inject(Router)
	loginService = inject(LoginService)
	watchListService = inject(WatchlistService)

	constructor() {}

	onLogin(): void {
		this.loginService.login(this.loginObj).subscribe((res: ILoginResponse) => {
			if (res.result && res.data && res.data.user.name == this.loginObj.name) {
				localStorage.setItem('userApp', JSON.stringify(res.data.user))
				localStorage.setItem('tokenApp', JSON.stringify(res.data.token))
				this.watchListService.getUserList(res.data.user.name, res.data.token).subscribe((res: IWatchListResponse) => {
					if (res.result) {
						localStorage.setItem('userListApp', JSON.stringify(res.data))
						this.router.navigateByUrl('dashboard')
					} else alert(res.message)
				})
			} else alert(res.message)
		})
	}
}
