//funcion para mostrar y ocultar 
const lista = document.getElementById("lista");
lista.addEventListener("click", (e) => {
    let element = e.target;
    if (element && element.tagName === "H3") {
        element.parentNode.classList.toggle("escondido");
        element.parentNode.classList.toggle("mostrado");
    }
})
//primer experimento
//mostrar cambiar estilo a elementos pares
let expUno = document.getElementById("expUnoDiv").children;
for (let i = 1; i < expUno.length; i++) {
    if ((i - 1) % 2 === 0) {
        expUno[i].classList.add("par");
    }
    else {
        expUno[i].style.backgroundColor = "#fff"
    }
}
//ver hoja de estilo para experimento 2

//experimento 3
//generar arreglo aleatoria
function randomArray(length, max) {
    let arreglo = [];
    for (let i = 0; i < length; i++) {
        arreglo[i] = Math.ceil(Math.random() * (max - 1) + 1);
    }
    return arreglo;
}
//ordena arreglos usando el método burbuka
function bubbleSort(array) {
    for (let o = 0; o < array.length; o++) {
        for (let p = 0; p < array.length - 1; p++) {
            if (array[p] > array[p + 1]) {
                [array[p], array[p + 1]] = [array[p + 1], array[p]]
            }
        }
    }
}
//tomar el valor de input
let valor = document.getElementById("valor").value;
//seleccionar y asignar funcion a botón
let arreglo = [];
let orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", x => { console.log(arreglo) })
//orderButton.style = "display:none";
let sendValue = document.getElementById("sendValue").addEventListener("click", () => {
    console.log(valor);
});