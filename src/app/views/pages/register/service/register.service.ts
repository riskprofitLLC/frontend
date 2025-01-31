import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../../../environments/environment'
import { IRegister, IRegisterResponse } from '../model/register.model'
import { ILoginResponse } from '../../login/model/login.model'

@Injectable({
	providedIn: 'root'
})
export class RegisterService {
	constructor(private http: HttpClient) {}

	register(registerObj: IRegister): Observable<ILoginResponse> {
		console.log(registerObj)
		return this.http.post<ILoginResponse>(`${environment.serverUrl}auth/register`, registerObj)
	}
}
