
let Lv_Mensaje = "Este es mi cuarto mensaje Alert - Externo - Antes del Body";
alert(Lv_Mensaje);

function mostrarAlert() {
    let Lv_Mensaje_2 = "Este mensaje se muestra al presionar el boton Presioname2";
    alert(Lv_Mensaje_2);
}

window.addEventListener('DOMContentLoaded', () => {
    //Se usa constane para que el valor del id no sea modificado
    //document hace referencia al html
    //get element by id busca un elemento html con ese id
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const parrafo = document.querySelector("#parrafo1");
    
    let message = "Este parrafo fue modificado mediante JS Externo - Modificacion de fuentes";
    let Lv_Mensaje_3 = "Este mensaje se muestra al presionar el boton Presioname3 - Mediante id boton";
    btn3.addEventListener('click', () => {
        alert(Lv_Mensaje_3);
    });
    
    if (btn4) {
        btn4.addEventListener("click", () => {
            btn4.textContent = "Tu fuiste hackeado";
            if (parrafo) {
                parrafo.textContent = message;
            }
        });
    }
    
    //Metodos relacionados
    //Por getElementById
    
    const Lv_Titulo = document.getElementById("IdTitulo");
    Lv_Titulo.textContent = "Este valor cambio por medio del: document.getElementByiD";
    
    //Por clase
    const items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].textContent = `Metodo #2: Este es el parrafo #${i + 1} con la clase "item" fue modificado con el getElementByClassName`;
        items[i].style.fontWeight = "bold";
    }
    
    //Por etiquetas
    const tags = document.getElementsByTagName("p");
    for (let i = 0; i < tags.length; i++) {
        tags[i].style.border = "2px solid black";
    }
    
    //querySelector
    const qSelector = document.querySelector("p");
    qSelector.style.backgroundColor = "yellow";
    
    //querySelectorAll
    const divs = document.querySelectorAll('div p');
    divs.forEach((div) => {
        div.style.background = "gray";
    });
    
});