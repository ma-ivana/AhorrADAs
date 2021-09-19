const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");

const seccionPrincipal = document.querySelector(".principal");
const seccionCategorias = document.querySelector(".categorias");
const seccionReportes = document.querySelector(".reportes");

linkBalance.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.style.display = "flex";
  seccionReportes.style.display = "none";
  seccionCategorias.style.display = "none";
};

linkCategorias.onclick = (event) => {
  event.preventDefault();
  seccionCategorias.style.display = "flex";
  seccionPrincipal.style.display = "none";
  seccionReportes.style.display = "none";
};

linkReportes.onclick = (event) => {
  event.preventDefault();
  seccionPrincipal.style.display = "none";
  seccionCategorias.style.display = "none";
  seccionReportes.style.display = "flex";
};
