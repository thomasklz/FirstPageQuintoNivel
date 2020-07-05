
function NuevaPagina() {

	var usuario=document.getElementById("usuario").value;
	var contrase=document.getElementById("contra").value;

	if (usuario=="SOCCER" && contrase=="123"  ) {
		
		window.location="nuevo.html";
		
	}	
	else{
		Swal.fire({
			position: 'top-end',
			icon: 'error',
			title: 'Datos Incorrectos',
			showConfirmButton: false,
			timer: 1500
		})
		
	}	

	

}


