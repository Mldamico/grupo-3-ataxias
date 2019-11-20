import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component'
import { NavbarComponent } from './componentes/navbar/navbar.component'
import { BotonesModificarPerfilComponent } from './componentes/botones-modificar-perfil/botones-modificar-perfil.component'
import { HomeComponent } from './componentes/home/home.component'
import { CambiarContraseniaComponent } from './componentes/cambiar-contrasenia/cambiar-contrasenia.component'
import { PerfilComponent } from './componentes/perfil/perfil.component'


export const rutas: Routes = [
	{path:'home', component: HomeComponent,
			children:[
				{path:'',redirectTo:'perfil', pathMatch:'full'},
				{path:'perfil', component:PerfilComponent},
				{path:'cambiarContraseña', component:CambiarContraseniaComponent}
			]

},
	
	{path:'**', redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
	imports: [RouterModule.forRoot(rutas)],
	exports: [RouterModule]
})

export class ModuloDeEnrutamiento { }

export const rutaDeLosComponente = [
	BarraSuperiorComponent,
	NavbarComponent,
	BotonesModificarPerfilComponent,

	HomeComponent,
	PerfilComponent,
	CambiarContraseniaComponent
]
