function validacion(){
debugger;
var nombres=document.getElementsByName("nombres")[0].value;
var contrasena=document.getElementsByName("contrasena")[0].value;

if((nombres=="manuel") && (contrasena=="123")){
    debugger;
    window.location="dentro.html";
  
}
else{
    debugger;
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos!',
        footer: '<a href>¿Recuperar su cuenta?</a>'
      })

}

}