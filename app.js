// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = document.querySelector('#listaAmigos');
const input = document.querySelector('#amigo');
const arrayAmigos = [];

// Expresión Regular para validar el nombre del amigo sin espacios y mímino 3 caracteres
const regex =
    /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{3,}(\s[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+)*$/;

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

function agregarAmigo() {
    try {
        let nombre = input.value.trim().toUpperCase();
        let nombreAmigo = validarNombre(nombre);
        // Si el nombre es válido, agregar el amigo a la lista
        if (nombreAmigo) {
            if (arrayAmigos.includes(nombre)) {
                alert('El amigo ya se encuentra en la lista');
                limpiarInput();
            } else {
                arrayAmigos.push(nombre);
                console.log(arrayAmigos);
                // let listaAmigos = document.querySelector('#listaAmigos');
                let elemento = document.createElement('li');
                elemento.textContent = nombre;
                listaAmigos.appendChild(elemento);
                limpiarInput();
            }
        } else {
            // Si el nombre no es válido, mostrar un mensaje de error
            alert('Nombre inválido');
            input.focus();
        }
    } catch (error) {
        console.error('Error al agregar amigo:', error);
    }
}

// al presionar Enter llama a funcion agregarAmigo
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function limpiarInput() {
    input.value = '';
    input.focus();
}
