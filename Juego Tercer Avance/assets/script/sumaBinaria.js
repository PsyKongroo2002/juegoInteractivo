var num1, num2;

var resultado;
var opcionCorrecta;

var txt_suma = document.getElementById("suma");
var op0 = document.getElementById("op0");
var op1 = document.getElementById("op1");

var txt_mensaje = document.getElementById("mensaje");
var txt_resultado = document.getElementById("resultado");

function iniciar() {
    txt_resultado.innerHTML = " = ?";
    txt_mensaje.innerHTML = " ";

    // Generar números binarios aleatorios de 1 dígito
    num1 = Math.floor(Math.random() * 2).toString();
    num2 = Math.floor(Math.random() * 2).toString();

    resultado = (parseInt(num1, 2) + parseInt(num2, 2)) % 2; // Asegura que el resultado sea 0 o 1

    txt_suma.innerHTML = num1 + " + " + num2;
    opcionCorrecta = Math.floor(Math.random() * 2);

    // Mostrar opciones
    mostrarOpciones();
}

function mostrarOpciones() {
    // Asignar opciones a los botones
    op0.innerHTML = (opcionCorrecta + 1) % 2;
    op1.innerHTML = opcionCorrecta;
}

function controlarResultado(opcionElegida) {
    // Cargamos la respuesta correcta
    txt_resultado.innerHTML = " = " + opcionElegida.innerHTML;

    if (resultado == parseInt(opcionElegida.innerHTML, 10)) {
        txt_mensaje.innerHTML = "¡Correcto!";
        txt_mensaje.style.color = "green";
    } else {
        txt_mensaje.innerHTML = "¡Incorrecto!";
        txt_mensaje.style.color = "red";
    }

    setTimeout(iniciar, 2000);
}

iniciar();