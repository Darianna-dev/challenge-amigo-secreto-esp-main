// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// const input = document.querySelector("#amigo");
// let nombre = input.value.trim().toLowerCase();
// let nombreSinEspacios = nombre.trim().toLowerCase();

// Expresión Regular para validar el nombre del amigo sin espacios y mímino 3 caracteres       ,;;
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

function agregarAmigo() {
    try {
        let nombre = input.value.trim().toLowerCase();
        let nombreAmigo = validarNombre(nombre);
        if (nombreAmigo) {
            // Si el nombre es válido, agregar el amigo a la lista
            let listaAmigos = document.querySelector("#listaAmigos");
            let elemento = document.createElement("li");
            elemento.innerHTML = nombre;
            listaAmigos.appendChild(elemento);
        } else {
            // Si el nombre no es válido, mostrar un mensaje de error
            alert("Nombre inválido");
        }
    } catch (error) {
        console.error("Error al agregar amigo:", error);
    }
}
