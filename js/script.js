

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});


document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    
    alert("¡Gracias por contactarnos! Te responderemos pronto.");

    this.reset();
});

    const cards = document.querySelectorAll(".slide-up");
    const showOnScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", showOnScroll);
    showOnScroll();

    
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const mensaje = document.getElementById("mensaje-exito");
      mensaje.style.display = "block";
      setTimeout(() => {
        mensaje.style.display = "none";
        this.reset();
      }, 3000);
    });
