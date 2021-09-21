const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");

const seccionPrincipal = document.querySelector(".principal");
const seccionCategorias = document.querySelector(".categorias");
const seccionReportes = document.querySelector(".reportes");

linkBalance.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.classList.remove("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionReportes.classList.add("is-hidden");
};

linkCategorias.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.classList.add("is-hidden");
  seccionCategorias.classList.remove("is-hidden");
  seccionReportes.classList.add("is-hidden");
};

linkReportes.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.classList.add("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionReportes.classList.remove("is-hidden");
};
