console.log("¡Hola Mundo!");

console.log(2 + 2); // Imprime 4

let iva = 21;
iva = 10.5;
console.log(iva); // Imprime 10.5

let numero = 123;
console.log(numero);

let x = 10;
x += 5; // x ahora es 15
console.log(x);
x++; // x ahora es 16
console.log(x);

let saludo = "¡Hola, " + "Mundo!";
console.log(saludo); // Imprime "Hola, Mundo!"

let edad;

edad = 21;
edad = 15;

if (edad >= 18) {
    console.log("Sos mayor de edad.");
    } else {
    console.log("Sos menor de edad.");
    }

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let l = 0;
do {
console.log(l);
l++;
} while (l <= 5);

let edades = 22;
let miembroVIP = true;
if (edades >= 18 && miembroVIP) {
console.log("Acceso concedido al área VIP.");
} else {
console.log("Acceso denegado.");
}

for (let a = 0; a <= 3; a++) {
    console.log(a);
    }

/* 
let productos = ['Laptop', 'Celular', 'Tablet'];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}
*/

let productos = [
    { nombre: 'Laptop', descuento: true },
    { nombre: 'Celular', descuento: false },
    { nombre: 'Tablet', descuento: true }
    ];
    for (let i = 0; i < productos.length; i++) {
    if (productos[i].descuento) {
    console.log(productos[i].nombre + " tiene descuento.");}}

/*
    function saludar(nombre){
    return "Hola, " + nombre;
}

let respuesta = saludar("Andino");

document.write("<h2>" + respuesta + "</h2>");

respuesta = saludar("Hugo");

document.write("<h2>" + respuesta + "</h2>");
*/

function limpiarFormulario() { 
    document.getElementById("miFormulario").reset(); 
}


const sobre = document.getElementById('sobre');
if (sobre !== null){
    let textoSobre = sobre.innerText;
    console.log(textoSobre);
}

const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEmail = document.getElementById('email');
const inputMensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('botonEnviarFormulario');

/*
let Nombre = inputNombre.value;
let Apellido = inputApellido.value;
let Email = inputEmail.value;
console.log(Nombre, Apellido, Email)

console.log(botonEnviar);
*/



/*"ENVIAR" COMO BUTTON: NO VALIDA PERO ENVÍA FORMULARIO A FORMSPREE

function enviarFormulario(){
    console.log(Nombre, Apellido, Email);
}

botonEnviar.addEventListener('click', enviarFormulario);
    let Nombre = inputNombre.value;
    let Apellido = inputApellido.value;
    let Email = inputEmail.value;
    let Mensaje = inputMensaje.value;
        if (!Nombre) { 
            alert('Por favor, ingrese su nombre.'); 
        } else if (!Apellido) { 
            alert('Por favor, ingrese su apellido.'); 
        } else if (!Email) { 
            alert('Por favor, ingrese un e-mail válido.');
        } else if (!Mensaje) { 
            alert('Por favor, redacte un mensaje.');
        } else 

console.log(Nombre, Apellido, Email);
*/


/*"ENVIAR" COMO INPUT: FUNCIONAN LAS VALIDACIONES PERO NO ENVÍA FORMULARIO A FORMSPREE*/

function validateEmail(Email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(Email).toLowerCase());
}

botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    let Nombre = inputNombre.value;
    let Apellido = inputApellido.value;
    let Email = inputEmail.value;
    let Mensaje = inputMensaje.value;
        if (!Nombre) { 
            alert('Por favor, ingrese su nombre.'); 
        } else if (!Apellido) { 
            alert('Por favor, ingrese su apellido.'); 
        } else if (!validateEmail(Email)) { 
            alert('Por favor, ingrese un e-mail válido con el siguiente formato: ejemplo@mail.com'); 
            return false;
        } else if (!Mensaje) { 
            alert('Por favor, redacte un mensaje.');
        } else {

// Convertir la primera letra de nombre y apellido a mayúscula 
Nombre = Nombre.charAt(0).toUpperCase() + Nombre.slice(1).toLowerCase(); 
Apellido = Apellido.split(' ').map(function(palabra) { 
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); 
}).join(' '); 

// Imprimir en la consola 
console.log(`Nombre: ${Nombre}, Apellido: ${Apellido}, E-mail: ${Email}`);
    }
});