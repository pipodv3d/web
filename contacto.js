// Completa estos datos una sola vez y aparecerán en el pie de todas las páginas.
window.PIPODV3D_CONTACTO = {
  whatsapp: "34672558103", // Número internacional sin +, espacios ni guiones.
  email: "info@pipodv3d.com",
  instagram: "https://www.instagram.com/pipodv3d/",
  tiktok: "https://www.tiktok.com/@pipodv3d",
  makerworld: "https://makerworld.com/es/@PipodV3D"
};

(() => {
  const contact = window.PIPODV3D_CONTACTO;
  const links = [];
  const phone = String(contact.whatsapp || "").replace(/\D/g, "");
  if (/^\d{8,15}$/.test(phone)) links.push(`<a href="https://wa.me/${phone}" target="_blank" rel="noopener noreferrer">WhatsApp</a>`);
  if (contact.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) links.push(`<a href="mailto:${contact.email}?subject=${encodeURIComponent("Consulta desde PipodV 3D")}">Correo electrónico</a>`);
  for (const [label, value] of [["Instagram", contact.instagram], ["TikTok", contact.tiktok], ["MakerWorld", contact.makerworld]]) {
    try {
      const url = new URL(value);
      if (url.protocol === "https:") links.push(`<a href="${url.href}" target="_blank" rel="noopener noreferrer">${label}</a>`);
    } catch { /* No se muestra una red social hasta que se añada un enlace válido. */ }
  }
  document.querySelectorAll("[data-contact-links]").forEach(container => {
    container.innerHTML = links.length ? links.join("") : '<span class="contact-pending">Datos de contacto pendientes de añadir.</span>';
  });
})();
