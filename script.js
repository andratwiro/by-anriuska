// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp button — set the number here once we have it (international format, no +, no spaces).
// Example: const WHATSAPP = "34600112233";
const WHATSAPP = ""; // TODO: Anriuska's number
const WA_MESSAGE = encodeURIComponent(
  "¡Hola Anriuska! Me gustaría reservar una cita 💅"
);

document.querySelectorAll("[data-wa]").forEach((el) => {
  if (WHATSAPP) {
    el.href = `https://wa.me/${WHATSAPP}?text=${WA_MESSAGE}`;
    el.target = "_blank";
    el.rel = "noopener";
  } else {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Número de WhatsApp pendiente de configurar.");
    });
  }
});
