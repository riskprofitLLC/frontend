import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { delay, filter, map, tap } from 'rxjs/operators'

import { ColorModeService } from '@coreui/angular'
import { IconSetService } from '@coreui/icons-angular'
import { iconSubset } from './icons/icon-subset'

@Component({
	selector: 'app-root',
	template: '<router-outlet />',
	imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
	title = 'Risk Profit'
	theme = 'theme-default'

	readonly #destroyRef: DestroyRef = inject(DestroyRef)
	readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute)
	readonly #router = inject(Router)
	readonly #titleService = inject(Title)
	readonly #colorModeService = inject(ColorModeService)
	readonly #iconSetService = inject(IconSetService)

	constructor() {
		this.#titleService.setTitle(this.title)
		// iconSet singleton
		this.#iconSetService.icons = { ...iconSubset }
		this.#colorModeService.localStorageItemName.set(this.theme)
		this.#colorModeService.setStoredTheme(this.theme, 'dark')
		this.#colorModeService.eventName.set('ColorSchemeChange')
	}

	ngOnInit(): void {
		this.#router.events.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe(evt => {
			if (!(evt instanceof NavigationEnd)) return
		})

		this.#activatedRoute.queryParams
			.pipe(
				delay(1),
				map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
				filter(theme => ['light', 'dark', 'auto'].includes(theme)),
				tap(theme => {
					this.#colorModeService.colorMode.set(theme)
				}),
				takeUntilDestroyed(this.#destroyRef)
			)
			.subscribe()
	}
}
