// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = document.querySelector("#listaAmigos");
const amigoElegido = document.getElementById("resultado");
const input = document.querySelector("#amigo");
const btnContainerSotearAmigo = document.querySelector(".button-container");

let amigos = [];

const regex = /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{3,40}(\s[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{1,37}){0,39}$/;

// Función para limpiar el input
function limpiarInput() {
    input.value = "";
    input.focus();
    amigoElegido.innerHTML = "";
}

// Se valida si el input tiene un valor y si cumple con la expresión regular
function validarNombre(nombre) {
    if (nombre.trim().length > 40) {
        alert("El nombre debe tener entre 3 y 40 caracteres");
        return false;
    }

    if (regex.test(nombre)) {
        // console.log('Nombre válido');
        return true;
    } else {
        // alert('Nombre inválido');
        limpiarInput();
        return false;
    }
}

// al presionar Enter llama a funcion agregarAmigo
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function crearElementoHTML(tag, clase, contenido) {
    const elementoHTML = document.createElement(tag);
    elementoHTML.textContent = contenido;
    elementoHTML.classList.add(clase);

    return elementoHTML;
}

function crearElementoHTML001(elemento, contenido) {
    const elementoHTML = document.createElement(elemento);
    elementoHTML.textContent = contenido;
    return elementoHTML;
}

// Funcionalidad Agregar Amigo
function agregarAmigo() {
    try {
        let nombre = input.value.trim().toUpperCase();
        let nombreAmigo = validarNombre(nombre);
        // Si el nombre es válido, agregar el amigo a la lista
        if (nombreAmigo) {
            if (amigos.includes(nombre)) {
                alert("La persona ya se encuentra en la lista");
                actualizarListaAmigos();
                limpiarInput();
            } else {
                amigos.push(nombre);
                console.log(amigos);
                actualizarListaAmigos();
            }
        } else {
            // Si el nombre no es válido, mostrar un mensaje de error
            alert("Nombre inválido");
            actualizarListaAmigos();
            limpiarInput();
        }
    } catch (error) {
        console.error("Error al agregar amigo:", error);
    }
}

function actualizarListaAmigos() {
    if (amigos.length > 0) {
        listaAmigos.replaceChildren();
        amigos.forEach((amigo) => {
            let li = crearElementoHTML("li", "listado", amigo);
            listaAmigos.appendChild(li);
            // boton eliminar un amigo
            let btnEliminar = crearElementoHTML("button", "btn-eliminarAmigo", "X");
            li.appendChild(btnEliminar);
            // se crea una escucha al evento 'click'para eliminar un amigo
            btnEliminar.addEventListener("click", function () {
                const eliminarAmigo = btnEliminar.parentElement;
                const nombreEliminar = eliminarAmigo.firstChild.textContent.trim();
                // eliminar el amigo de la lista amigos del DOM
                amigos = amigos.filter((amigo) => amigo !== nombreEliminar);
                eliminarAmigo.remove();
                limpiarInput();
            });
            limpiarInput();
        });
    }
}

function sortearAmigo() {
    try {
        if (amigos.length > 0) {
            let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
            console.log(amigoSorteado);
            limpiarInput();
            listaAmigos.replaceChildren();
            // const amigoElegido = document.getElementById("resultado");
            amigoElegido.innerHTML = `${amigoSorteado}`;
        } else {
            alert("No hay amigos en la lista de amigos para sortear");
        }
    } catch (error) {
        console.error("Error al sortear amigo:", error);
    }
}

//! Función Boton Limpiar

function limpiarLista() {
    listaAmigos.replaceChildren();
    amigos = [];
    limpiarInput();
}
