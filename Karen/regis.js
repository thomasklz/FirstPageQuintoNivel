function Validar() {


    debugger;

    var Codigo = document.getElementsByName('codigo')[0].value;



    if (Codigo == "covid") {

        debugger;
        swal("Buen Trabajo!", "Registrado Correctamente!", "success");



    } else {
        debugger;


        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Intenta de nuevo!',

        })

    }
}