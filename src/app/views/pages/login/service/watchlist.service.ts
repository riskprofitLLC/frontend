import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IWatchListResponse } from '../model/watchlist.model'
import { environment } from '../../../../../environments/environment'

@Injectable({
	providedIn: 'root'
})
export class WatchlistService {
	constructor(private http: HttpClient) {}

	getUserList(name: string, token: string): Observable<IWatchListResponse> {
		const headers = { Authorization: `Bearer ${token}` }
		return this.http.get<IWatchListResponse>(`${environment.serverUrl}watchlist/?name=${name}`, { headers })
	}

	createUserList(name: string, token: string): Observable<IWatchListResponse> {
		const headers = { Authorization: `Bearer ${token}` }
		return this.http.post<IWatchListResponse>(`${environment.serverUrl}watchlist/create`, { name }, { headers })
	}
}
