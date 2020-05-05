import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-fb-credit',
	templateUrl: './fb-credit.component.html',
	styleUrls: ['./fb-credit.component.scss'],
})
export class FbCreditComponent implements OnInit {
	hovered: boolean;

	// If true, a dark color scheme will be applied
	@Input()
	darkMode: boolean;

	constructor() {}

	ngOnInit(): void {
		this.hovered = false;
	}
}
