

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});


document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    
    alert("¡Gracias por contactarnos! Te responderemos pronto.");

    this.reset();
});

