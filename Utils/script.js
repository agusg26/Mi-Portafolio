document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnMostrar");
    const card = document.getElementById("skills");

    btn.addEventListener("click", () => {
        if (card.classList.contains("show")) {
            card.classList.remove("show");
            setTimeout(() => {
                card.style.display = "none";
            }, 500); // Espera a que termine la transición
            btn.textContent = "Mis conocimientos";
        } else {
            card.style.display = "block";
            setTimeout(() => {
                card.classList.add("show");
            }, 10); // Pequeño delay para que la transición funcione
            btn.textContent = "Ocultar habilidades";
        }
    });
});