let x = document.getElementById("expUno");
let y = x.childNodes;
let longitud = (childList) => {
    let p = 0;
    while(childList[p] !== undefined){
        p++;
    }
    return p-1;
}
for(let i=1;i<longitud(y);i+=2){
    if(y[i].innerHTML == "par"){
        y[i].classList.add("par");
    }
}
let containers = document.getElementsByClassName("container");
for(let i=0;i<containers.length;i++){
    containers[i].addEventListener("click",()=>{
        containers[i].classList.toggle("escondido")

    })
}
console.log(containers[0])