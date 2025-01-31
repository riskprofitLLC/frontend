import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ILogin, ILoginResponse } from '../model/login.model'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	constructor(private http: HttpClient) {}

	login(loginObj: ILogin): Observable<ILoginResponse> {
		return this.http.post<ILoginResponse>(`${environment.serverUrl}auth/login`, loginObj)
	}
}
