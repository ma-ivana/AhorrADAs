/*//////////////////// Links del nav a secciones ////////////////////////*/

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

/*//////////////////// Menú desplegable mobile ////////////////////////*/

const menuDesplegableMobile = document.getElementById(
  "menu-desplegable-hamburguesa"
);
const iconoHamburguesa = document.getElementById("icono-hamburguesa");

const linkBalanceMobile = document.querySelector(".link-balance-mobile");
const linkCategoriasMobile = document.querySelector(".link-categorias-mobile");
const linkReportesMobile = document.querySelector(".link-reportes-mobile");

iconoHamburguesa.onclick = () => {
  menuDesplegableMobile.classList.toggle("is-hidden");
};

linkBalanceMobile.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.classList.remove("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionReportes.classList.add("is-hidden");
};

linkCategoriasMobile.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.classList.add("is-hidden");
  seccionCategorias.classList.remove("is-hidden");
  seccionReportes.classList.add("is-hidden");
};

linkReportesMobile.onclick = (event) => {
  event.preventDefault();

  seccionPrincipal.classList.add("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionReportes.classList.remove("is-hidden");
};

/*//////////////////// Ocultar filtros sección principal ////////////////////////*/

const contenedorFiltros = document.querySelector(".contenedor-filtros");
const botonFiltros = document.querySelector(".boton-filtros");

botonFiltros.onclick = (event) => {
  event.preventDefault();
  contenedorFiltros.classList.toggle("is-hidden");
  if (botonFiltros.textContent === "Ocultar filtros") {
    botonFiltros.textContent = "Mostrar filtros";
    
  } else {
    botonFiltros.textContent = "Ocultar filtros";
    
  }
};

////*Funcionalidad boton nueva operación */////

const seccionNuevaOperacion = document.getElementById(
  "seccion-nueva-operacion"
);
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById(
  "boton-cancelar-nuevas-operaciones"
);

botonNuevaOperacion.onclick = (event) => {
  event.preventDefault();
  seccionPrincipal.classList.add("is-hidden");
  seccionNuevaOperacion.classList.remove("is-hidden");
};

botonCancelarNuevasOperaciones.onclick = (event) => {
  event.preventDefault();
  seccionNuevaOperacion.classList.add("is-hidden");
  seccionPrincipal.classList.remove("is-hidden");
};
