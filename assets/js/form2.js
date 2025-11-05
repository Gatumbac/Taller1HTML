console.log("JS Working!");    

document.addEventListener("DOMContentLoaded", () => {
    addFormListener();
});

function addFormListener() {
    const form = document.getElementById("formRegistro");
    form.addEventListener("submit", (e => {
        e.preventDefault();
        handleData();
    }));
}

function handleData() {
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const message = document.getElementById("message").value.trim();
    const genre = document.querySelector("input[name='genre']:checked");
    const genreValue = genre.value ? genre.value : null;
    const conditions = document.getElementById("check_term");
    
    if (!name || !lastname || !email || !message || !country || !email || !genreValue) {
        alert("Datos incompletos. Por favor llena todo.");
        return;
    }

    if (!conditions.checked) {
        alert("Marca los terminos y condiciones");
        return;
    }
    
    conditionsValue = conditions.value;
    console.log(name, lastname, email, country, message, genreValue, conditionsValue);
    
    const userData = {
        name,
        lastname,
        email,
        country,
        message,
        genreValue,
        conditionsValue
    };
    console.log(userData);
}