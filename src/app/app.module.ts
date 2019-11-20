import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { ComponentePrincial } from './app.component'
import { ModuloDeEnrutamiento, rutaDeLosComponente } from './app.routing.module'

@NgModule({
	declarations: [
		ComponentePrincial,
		rutaDeLosComponente
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ModuloDeEnrutamiento
	],
	providers: [],
	bootstrap: [ComponentePrincial]
})

export class ModuloPrincipal { }
