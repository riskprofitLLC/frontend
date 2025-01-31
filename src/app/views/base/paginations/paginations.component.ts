import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { DocsExampleComponent } from '@docs-components/docs/public-api'
import {
	RowComponent,
	ColComponent,
	TextColorDirective,
	CardComponent,
	CardHeaderComponent,
	CardBodyComponent,
	PaginationComponent,
	PageItemComponent,
	PageLinkDirective
} from '@coreui/angular'

@Component({
	selector: 'app-paginations',
	templateUrl: './paginations.component.html',
	styleUrls: ['./paginations.component.scss'],
	imports: [
		RowComponent,
		ColComponent,
		TextColorDirective,
		CardComponent,
		CardHeaderComponent,
		CardBodyComponent,
		DocsExampleComponent,
		PaginationComponent,
		PageItemComponent,
		PageLinkDirective,
		RouterLink
	]
})
export class PaginationsComponent {
	constructor() {}
}
