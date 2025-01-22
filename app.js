// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = document.querySelector('#listaAmigos');
const input = document.querySelector('#amigo');
const amigos = [];

// Expresión Regular para validar el nombre del amigo sin espacios y mímino 3 caracteres
const regex =
    /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{3,}(\s[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+)*$/;

// Función para limpiar el input
function limpiarInput() {
    input.value = '';
    input.focus();
}

// al presionar Enter llama a funcion agregarAmigo
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Se valida si el input tiene un valor y si cumple con la expresión regular
function validarNombre(nombre) {
    if (regex.test(nombre)) {
        // console.log('Nombre válido');
        return true;
    } else {
        // alert('Nombre inválido');
        limpiarInput();
        return false;
    }
}

// Funcionalidad Agtregar Amigo
function agregarAmigo() {
    try {
        let nombre = input.value.trim().toUpperCase();
        let nombreAmigo = validarNombre(nombre);
        // Si el nombre es válido, agregar el amigo a la lista
        if (nombreAmigo) {
            if (amigos.includes(nombre)) {
                alert('El persona ya se encuentra en la lista');
                limpiarInput();
            } else {
                amigos.push(nombre);
                console.log(amigos);
                actualizarListaAmigos(nombre);
            }
        } else {
            // Si el nombre no es válido, mostrar un mensaje de error
            alert('Nombre inválido');
            limpiarInput();
        }
    } catch (error) {
        console.error('Error al agregar amigo:', error);
    }
}

function actualizarListaAmigos(nombreAmigo) {
    const elemento = document.createElement('li');
    elemento.textContent = nombreAmigo;
    listaAmigos.appendChild(elemento);
    limpiarInput();
}
