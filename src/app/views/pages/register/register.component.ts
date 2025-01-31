import { Component, inject } from '@angular/core'
import { IconDirective } from '@coreui/icons-angular'
import {
	ButtonDirective,
	CardBodyComponent,
	CardComponent,
	ColComponent,
	ContainerComponent,
	FormControlDirective,
	FormDirective,
	InputGroupComponent,
	InputGroupTextDirective,
	RowComponent
} from '@coreui/angular'
import { IRegister, IRegisterResponse } from './model/register.model'
import { Router } from '@angular/router'
import { RegisterService } from './service/register.service'
import { ERole } from './model/user.model'
import { FormsModule } from '@angular/forms'
import { WatchlistService } from '../login/service/watchlist.service'
import { ILoginResponse } from '../login/model/login.model'
import { IWatchListResponse } from '../login/model/watchlist.model'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	imports: [
		ContainerComponent,
		RowComponent,
		ColComponent,
		CardComponent,
		CardBodyComponent,
		FormDirective,
		InputGroupComponent,
		InputGroupTextDirective,
		IconDirective,
		FormControlDirective,
		ButtonDirective,
		FormsModule
	],
	standalone: true
})
export class RegisterComponent {
	registerObj: IRegister = { name: '', role: ERole.user, balance: 0, password: '' }
	router = inject(Router)
	registerService = inject(RegisterService)
	watchlistService = inject(WatchlistService)

	constructor() {}

	onRegister() {
		console.log(this.registerObj)
		this.registerService.register(this.registerObj).subscribe((res: ILoginResponse) => {
			if (res.result && res.data && res.data.user.name == this.registerObj.name) {
				// localStorage.setItem('userApp', JSON.stringify(res.data))
				this.watchlistService.createUserList(res.data.user.name, res.data.token).subscribe((res: IWatchListResponse) => {
					if (res.result) this.router.navigateByUrl('')
				})
			} else alert(res.message)
		})
	}
}
