console.log("JS Working!");    

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("input[type='submit']");
});

function handleData() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value;
    const genre = document.querySelector("input[name='genre']:checked").value;
    const conditions = document.getElementById("check_term").checked;
    
    console.log(name, lastname, email, country, message, genre, conditions);
}