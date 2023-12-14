/*FUNCIÓN: SENCILLAMENTE SE LE DÁ LA BIENVENIDA A LA SECCIÓN MEDIANTE LA CUAL EL VISITANTE PUEDE CONTACTARSE CON NOSOTROS  SE LE DA LA CERTEZ QUE LA COMUNICACIÓN ESTA HABLITADA Y QUE A LA BREVEDAD DEVOLVEREMOS EL MENSAJE O NOS PONDREMOS EN CONTACTO*/


"use strict";

function contacto (mensaje) {
    alert (mensaje);
}

contacto("En esta sección podrás contactarte con nosotros. Dejanos tu mensaje y a la brevedad un agente de nuestra página se contactará contigo!");


let input = document.getElementById("Telefono")

input.value = "tu nro. sin 0 ni 15"

let enviar = 
document.getElementById("form");
enviar.addEventListener("submit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault ();
    alert("Formulario Enviado");

}

let nombre = sessionStorage.getItem("Nombre");

console.log(nombre);

let telefono = sessionStorage.getItem("Telefono");

console.log(telefono);

let correo = sessionStorage.getItem("Correo");

console.log(correo);



