document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dom-msg").textContent = "DOM completamente cargado";
});

window.addEventListener("load", () => {
  document.getElementById("load-msg").textContent = "Todos los recursos cargados correctamente";
});

window.addEventListener("unload", () => {
  console.log("Página descargada (evento unload)");
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "¿Seguro que quieres salir? Los cambios no se guardarán.";
});

document.addEventListener("visibilitychange", () => {
  const text = document.getElementById("visibility-text");
  if (document.hidden) {
    text.textContent = "Pestaña oculta";
  } else {
    text.textContent = "Página visible nuevamente";
  }
});

document.onreadystatechange = () => {
  document.getElementById("ready-state").textContent =
    "Estado actual del documento: " + document.readyState;
};

const btnFull = document.getElementById("fullscreen-btn");
const msgFull = document.getElementById("fullscreen-msg");

btnFull.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (err) {
    msgFull.textContent = "Error al cambiar a pantalla completa";
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    msgFull.textContent = "Modo pantalla completa activado";
    btnFull.textContent = "Salir de pantalla completa";
  } else {
    msgFull.textContent = "Pantalla completa desactivada";
    btnFull.textContent = "Activar pantalla completa";
  }
});

const area = document.getElementById("clipboard-area");
const clipMsg = document.getElementById("clipboard-msg");

area.addEventListener("copy", () => (clipMsg.textContent = "Texto copiado"));
area.addEventListener("cut", () => (clipMsg.textContent = "Texto cortado"));
area.addEventListener("paste", () => (clipMsg.textContent = "Texto pegado"));

document.addEventListener("selectionchange", () => {
  const selection = document.getSelection().toString();
  const msg = document.getElementById("selection-msg");
  msg.textContent = selection ? `Seleccionaste: "${selection}"` : "";
});

let scrollTimeout;
window.addEventListener("scroll", () => {
  const scrollZone = document.getElementById("scroll-zone");
  scrollZone.textContent = "Estás scrolleando";
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollZone.textContent = "Desplázate hacia abajo para activar el evento.";
  }, 500);
});
