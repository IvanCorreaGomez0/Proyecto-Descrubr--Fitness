/*Base de los Ramdom usuario*/

//variables
const btn = document.querySelector('#btn');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');

//Funciones
const generarUsuario = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const data = results[0];
        console.log(data);

        console.log(data);
        foto.src = data.picture.medium;
        nombre.textContent = data.name.first;
        /*correo.textContent = data.email*/
        telefono.textContent = /*data.location.city,*/ data.location.country;
    } catch (error) {
        console.log(error);
    }
}

//Eventos
btn.addEventListener('click', generarUsuario)
document.addEventListener('DOMContentLoaded', generarUsuario) // para generar un usuario cuando se entre a la página

/*Cronometro*/

//Variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let segundos = 0;
let intervalo = null;

//eventos

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

//Funciones
function timer () {
    segundos++;

    let hrs = Math.floor(segundos / (60 * 60))
    let mins = Math.floor((segundos - (hrs * 3600)) / 60);
    let secs = segundos % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    
    time_el.textContent = `${hrs}:${mins}:${secs}`
}

function start (){
    if (intervalo) {
        return
    }

    intervalo = setInterval(timer, 1000)
}

function stop (){
    clearInterval(intervalo);
    intervalo = null;
}

function reset(){
    stop();
    segundos = 0;
    time_el.textContent = `00:00:00`;
}