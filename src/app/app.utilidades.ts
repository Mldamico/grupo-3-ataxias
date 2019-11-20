export class ManejoDeErroes {
	constructor(private error: any) {}

	status() {
		if(this.error.status == 0) {
			console.log("Error de coneccion")
		} else {
			console.log(this.error.status)
		}
	}
}