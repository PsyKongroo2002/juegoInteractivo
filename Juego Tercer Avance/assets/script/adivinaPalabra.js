// Estructura para guardar la informacion
let arrayPalabras = ['ALGORITMO', 'VARIABLE', 'BUCLE', 'CSS', 'PROGRAMADOR', 'FUNCION', 'CONDICION', 'NULO'];

// Array para guardar las pistas de sus respectivas palabras
let ayudaPalabras = [
    "Es como una receta para las computadoras. Les dice paso a paso qué hacer",

    "Es como una caja mágica en la computadora que guarda cosas, Puedes cambiar lo que hay dentro en cualquier momento",

    "Repite una tarea hasta que se detiene",

    "Es como vestir a las paginas web, le dice como debe vestirse y que colores ponerse",

    "Es como un superhéroe de la computadora. Una persona que crea y diseña cosas increíbles haciendo que las computadoras hagan lo que queremos.",

    "Le dice a la computadora que hacer y cuando hacerlo",

    "Le dices, 'si pasa esto, haz algo, si no, haz otra cosa",

    "No representa nada"
];

// Variables que guarda la cantidad de palabras ingresadas
let cantPalabrasJugadas = 0;
let intentosRestantes = 8;
let cantidadAcertadas = 0;
let totalQueDebeAcertar;
let posicionActual;

let arrayPalabraActual = [];
let divsPalabraActual = [];


function cargarPalabra(){

    document.getElementById("mensaje").innerHTML = "";
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas > arrayPalabras.length){
        arrayPalabras = ['ALGORITMO', 'VARIABLE', 'BUCLE', 'CSS', 'PROGRAMADOR', 'FUNCION', 'CONDICION', 'NULO'];
        
        ayudaPalabras = [
            "Es como una receta para las computadoras. Les dice paso a paso qué hacer",
        
            "Es como una caja mágica en la computadora que guarda cosas, Puedes cambiar lo que hay dentro en cualquier momento",
        
            "Repite una tarea hasta que se detiene",
        
            "Es como vestir a las paginas web, le dice como debe vestirse y que colores ponerse",
        
            "Es como un superhéroe de la computadora. Una persona que crea y diseña cosas increíbles haciendo que las computadoras hagan lo que queremos.",
        
            "Le dice a la computadora que hacer y cuando hacerlo",
        
            "Le dices, 'si pasa esto, haz algo, si no, haz otra cosa",
        
            "No representa nada"
        ];
    }

    posicionActual = Math.floor(Math.random() * arrayPalabras.length);
    
    let palabra = arrayPalabras[posicionActual];
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;

    // Guardar la palabra en formato string en un array
    arrayPalabraActual = palabra.split('');
    console.log(arrayPalabraActual);

    document.getElementById("palabra").innerHTML = '';
    document.getElementById("letrasIngresadas").innerHTML = '';

    for(i=0; i<palabra.length; i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);   
    }

    divsPalabraActual = document.getElementsByClassName("letra");
    intentosRestantes = 8;

    document.getElementById("intentos").innerHTML = intentosRestantes;

    document.getElementById("ayuda").innerHTML = ayudaPalabras[posicionActual];

    arrayPalabras.splice(posicionActual, 1);
    ayudaPalabras.splice(posicionActual, 1);    
}

document.addEventListener("keydown", event => {
    if(isLetter(event.key)){
        let acerto = false;

        for(i=0; i<arrayPalabraActual.length; i++){
            if(arrayPalabraActual[i] == event.key.toUpperCase()){
                divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                cantidadAcertadas++;
                acerto = true;                
            }
        }

        if(acerto == true){
            if(totalQueDebeAcertar == cantidadAcertadas){
                for(i=0; i<arrayPalabraActual.length; i++){
                    divsPalabraActual[i].className = "letra pintar";
                    document.getElementById("mensaje").innerHTML = "GANASTE! :)";
                }
            }
        }else {
            intentosRestantes--;
            document.getElementById("intentos").innerHTML = intentosRestantes;

            if(intentosRestantes <= 0){
                for(i=0; i<arrayPalabraActual.length; i++){
                    divsPalabraActual[i].className = "letra pintarError";
                    document.getElementById("mensaje").innerHTML = "Perdiste :(";   
                }
            }
        }
        document.getElementById("letrasIngresadas").innerHTML += event.key.toUpperCase() + 
        " - "; 

    }
});

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

cargarPalabra();