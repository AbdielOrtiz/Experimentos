//funcion para mostrar y ocultar 
const lista = document.getElementById("lista");
lista.addEventListener("click", (e) => {
    let element = e.target;
    if (element && element.tagName === "H3") {
        element.parentNode.classList.toggle("escondido");
        element.parentNode.classList.toggle("mostrado");
    }
})
//-------------Experimento 1-------------
//mostrar cambiar estilo a elementos pares
let expUno = document.getElementById("expUnoDiv").children;
let par = true;
for (let element of expUno) {
    if (par) {
        element.style = "background: #F3F781;color: #000;"
        par = false;
    }
    else {
        element.style = "background: #000;color: #F3F781;"
        par = true
    }
}

//ver hoja de estilo para experimento 2

//-------------Experimento 3-------------
//generar arreglo aleatoria
const numAleatorio = (max = 10) => {
    return Math.ceil(Math.random() * (max - 1) + 1);
}
function randomArray(length, max) {
    let arreglo = [];
    for (let i = 0; i < length; i++) {
        arreglo[i] = numAleatorio(max);
    }
    return arreglo;
}
//ordena arreglos usando el método burbuja
function bubbleSort(array) {
    for (let o = 0; o < array.length; o++) {
        for (let p = 0; p < array.length - 1; p++) {
            if (array[p] > array[p + 1]) {
                [array[p], array[p + 1]] = [array[p + 1], array[p]]
            }
        }
    }
}
//seleccionar y asignar funcion a botón
let arreglo = [];
let miniContainer = document.querySelector(".miniContainer");
let result = document.getElementById("result");
let sendValue = document.getElementById("sendValue").addEventListener("click", () => {
    let valor = document.getElementById("valor").value;
    if (valor <= 100000) {
        arreglo = randomArray(valor, 100);
        result.innerHTML = "";
        let r = document.createElement("li");
        let msg = document.createTextNode("Desordenado:\n" + arreglo);
        r.appendChild(msg);
        result.append(r);
    }
    else {
        alert("Para numeros tan grandes prueba el metodo\nQuicksort")
    }
});
let orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", x => {
    bubbleSort(arreglo);
    if (arreglo.length == 0) return null;
    let r = document.createElement("li");
    let msg = document.createTextNode("Ordenado:\n" + arreglo);
    r.appendChild(msg);
    result.append(r);
})
let clearInput = document.getElementById("clearInput");
clearInput.addEventListener("click", () => {
    if (arreglo.length == 0) return null;
    arreglo = [];
    let valor = document.getElementById("valor");
    valor.value = "";
    result.innerHTML = "";
})
//-------------Experimento 4-------------
//algoritmo de ordenamiento Quicksort
function quicksort() {
    return 10;
}
//-------------Experimento 5-------------
const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//algoritmo para generar nuevo abecedario
function flip(flips) {
    let flippedaAbc = abecedario.map(x => x);
    if (flips > 27) { flips -= 27 }
    let i = 0;
    do {
        flippedaAbc.unshift(flippedaAbc[26]);
        flippedaAbc.pop();
        i++;
    } while (i < flips);
    return flippedaAbc;
}
//algoritmo para transformar el mensaje
function transform(altAbc, message) {
    message = message.toLowerCase().split("");
    const length = message.length;
    for (let i = 0; i < length; i++) {
        if (message[i] == " ") continue;
        let altPos = abecedario.indexOf(message[i]);
        message[i] = altAbc[altPos];
    }
    return message.join("");
}
//variables e implementación
let transformar = document.getElementById("transformar");
transformar.addEventListener("click", () => {
    let mensajeNormal = document.getElementById("mensajeNormal");
    let altAbc = flip(new Date().getDay());
    let altMsg = transform(altAbc, mensajeNormal.value);
    let msjT = document.querySelector(".mensajeTransformado");
    let child = document.createTextNode(altMsg);
    msjT.append(child)
})