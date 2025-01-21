// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const input = document.querySelector("#amigo");
let nombre = input.value;
let nombreAmigo = nombre.trim().toLowerCase();

const regex =
    /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{3,}(\s[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+)*$/;

function validarNombre(nombre) {
    if (regex.test(nombre)) {
        console.log("Nombre válido");
        return true;
    } else {
        console.log("Nombre inválido");
        return false;
    }
}

function agregarAmigo() {}
