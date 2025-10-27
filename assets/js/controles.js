document.addEventListener('DOMContentLoaded', () => {
    console.log("HTML listo!");
    handleBtnListener();
});

function handleBtnListener() {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const message = "Hola, este es el listener de mi boton!";
        alert(message);
    });
}
