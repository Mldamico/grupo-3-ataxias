import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { ModuloPrincipal } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
	enableProdMode()
}

platformBrowserDynamic().bootstrapModule(ModuloPrincipal)
	.catch(err => console.log(err))
