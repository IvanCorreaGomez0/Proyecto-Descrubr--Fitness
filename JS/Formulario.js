//Variables
var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn_send');

var validarNombre = function (e) {
    if (formulario.name.value == 0) {
        alert("Ingresá tu nombre");
        e.preventDefault();
    }
}

var validarTelefono = function (e) {
    if(formulario.phone.value == 0){
        alert("Ingresá tu número telefonico")
    }
}

var validarCorreo = function (e) {
    if (formulario.mail.value == 0) {
        alert("Ingresá tu correo")
    }
}

//Funciones
function validar(e) {
    validarNombre(e);
    validarTelefono(e);
    validarCorreo(e);
}

//Eventos
formulario.addEventListener("submit", validar);
