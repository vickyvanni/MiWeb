/**1. Generar un número aleatorio entre 1 y 100.
2. Inicializar intentos = 3.
3. Mientras intentos > 0:
    3.1 Pedir al usuario un número.
    3.2 Validar que el número es válido (es un número y está entre 1 y 100).
        - Si no es válido, mostrar mensaje de error y repetir paso 3.1.
    3.3 Comparar el número ingresado con el número generado:
        - Si es igual:
            - Mostrar mensaje de felicitación.
            - Terminar el juego.
        - Si es menor:
            - Mostrar mensaje "El número es mayor".
        - Si es mayor:
            - Mostrar mensaje "El número es menor".
    3.4 Reducir intentos en 1.
4. Si intentos == 0:
    - Mostrar mensaje de que ha perdido y revelar el número generado.
5. Preguntar si quiere jugar de nuevo.

**/

// Generar un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Definir el número de intentos disponibles
let intentosRestantes = 6;

// Función para verificar el número ingresado
function verificarNumero() {
    const entradaUsuario = document.getElementById("entradaUsuario").value; // Obtener el valor del input
    const mensaje = document.getElementById("mensaje"); // Obtener el div del mensaje

    // Validar que el campo no esté vacío y que sea un número entre 1 y 100
    if (!entradaUsuario || isNaN(entradaUsuario) || entradaUsuario < 1 || entradaUsuario > 100) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        mensaje.style.color = "red";
        return; // Termina la función si el número no es válido
    }

    // Convertir el número ingresado a un entero
    const numeroUsuario = parseInt(entradaUsuario, 10);

    // Comparar el número ingresado con el número aleatorio
    if (numeroUsuario === numeroAleatorio) {
        mensaje.textContent = `¡Felicidades! Adivinaste el número ${numeroAleatorio}.`;
        mensaje.style.color = "green";
        deshabilitarEntrada();
    } else {
        intentosRestantes--; // Reducir los intentos restantes

        if (intentosRestantes > 0) {
            // Dar pistas si el usuario no ha adivinado
            mensaje.textContent = numeroUsuario < numeroAleatorio
                ? `El número es mayor. Intentos restantes: ${intentosRestantes}.`
                : `El número es menor. Intentos restantes: ${intentosRestantes}.`;
            mensaje.style.color = "orange";
        } else {
            // Si se acaban los intentos, mostrar que ha perdido
            mensaje.textContent = `Lo siento, has perdido. El número era ${numeroAleatorio}.`;
            mensaje.style.color = "red";
            deshabilitarEntrada();
        }
    }
}

// Función para deshabilitar la entrada y el botón al terminar el juego
function deshabilitarEntrada() {
    document.getElementById("entradaUsuario").disabled = true;
    document.querySelector("button[onclick='verificarNumero()']").disabled = true;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Generar un nuevo número aleatorio
    intentosRestantes = 3; // Reiniciar los intentos
    document.getElementById("entradaUsuario").disabled = false;
    document.getElementById("entradaUsuario").value = ""; // Limpiar el campo de entrada
    document.querySelector("button[onclick='verificarNumero()']").disabled = false;
    document.getElementById("mensaje").textContent = ""; // Limpiar los mensajes
}
