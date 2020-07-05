function validacion(){
    debugger;
    var nombres=document.getElementsByName("Nombre")[0].value;
   
    
    if((nombres=="")){
        debugger;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ha completado todos los campos!',
            footer: '<a href>¿Ver más?</a>'
          })
      
    }
    else{
        debugger;
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su mensaje fue enviado con éxito',
            showConfirmButton: false,
            timer: 1500
          })





       
    
    }
    
    }