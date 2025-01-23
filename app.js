// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = document.querySelector("#listaAmigos");
const amigoElegido = document.getElementById("resultado");
const input = document.querySelector("#amigo");

let amigos = [];

// Expresión Regular para validar el nombre del amigo sin espacios y mímino 3 caracteres
// const regex1 =
//     /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{3,}(\s[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+)*$/;

const regex =
    /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{3,40}(\s[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]{1,37}){0,39}$/;

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

function crearElementoHTML(elemento, contenido) {
    const elementoHTML = document.createElement(elemento);
    elementoHTML.textContent = contenido;
    return elementoHTML;
}

// Funcionalidad Agtregar Amigo
function agregarAmigo() {
    try {
        let nombre = input.value.trim().toUpperCase();
        let nombreAmigo = validarNombre(nombre);
        // Si el nombre es válido, agregar el amigo a la lista
        if (nombreAmigo) {
            if (amigos.includes(nombre)) {
                alert("El persona ya se encuentra en la lista");
                limpiarInput();
            } else {
                amigos.push(nombre);
                console.log(amigos);
                // amigoElegido.innerHTML = "";
                actualizarListaAmigos();
            }
        } else {
            // Si el nombre no es válido, mostrar un mensaje de error
            alert("Nombre inválido");
            limpiarInput();
        }
    } catch (error) {
        console.error("Error al agregar amigo:", error);
    }
}

// al presionar Enter llama a funcion agregarAmigo
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function actualizarListaAmigos() {
    if (amigos.length > 0) {
        listaAmigos.replaceChildren();
        amigos.forEach((amigo) => {
            let li = crearElementoHTML("li", amigo);
            li.classList.add("listado");
            listaAmigos.appendChild(li);
            // boton eliminar un amigo
            let btnEliminar = crearElementoHTML("button", "X");
            btnEliminar.classList.add("btn-eliminarAmigo");
            li.appendChild(btnEliminar);
            // se crea una escucha al evento 'click'para eliminar un amigo
            btnEliminar.addEventListener("click", function () {
                const eliminarAmigo = btnEliminar.parentElement;
                const nombreEliminar = eliminarAmigo.firstChild.textContent;
                // eliminar el amigo de la lista amigos
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
            let amigoSorteado =
                amigos[Math.floor(Math.random() * amigos.length)];
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
