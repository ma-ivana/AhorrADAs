/*//////////////////// Links del nav a secciones ////////////////////////*/

const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");

const seccionPrincipal = document.querySelector(".principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
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
  seccionEditarCategoria.classList.add("is-hidden");
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

/////////////////////*Funcionalidad boton nueva operación *//////////////////////////

const seccionNuevaOperacion = document.getElementById(
  "seccion-nueva-operacion"
);
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById(
  "boton-cancelar-nuevas-operaciones"
);

botonNuevaOperacion.onclick = () => {
  seccionPrincipal.classList.add("is-hidden");
  seccionNuevaOperacion.classList.remove("is-hidden");
};

////* Boton cancelar seccion Nuevas operaciones *////
botonCancelarNuevasOperaciones.onclick = () => {
  seccionNuevaOperacion.classList.add("is-hidden");
  seccionPrincipal.classList.remove("is-hidden");
};

////* Boton agregar seccion Nuevas operaciones *////

const botonAgregarNuevaOperacion = document.getElementById(
  "boton-agregar-nuevas-operaciones"
);
const contenedorListadoNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const contenedorSinOperaciones = document.getElementById(
  "contenedor-sin-operaciones"
);

botonAgregarNuevaOperacion.onclick = () => {
  seccionNuevaOperacion.classList.add("is-hidden");
  contenedorSinOperaciones.classList.add("is-hidden");
  seccionPrincipal.classList.remove("is-hidden");
  contenedorListadoNuevasOperaciones.classList.remove("is-hidden");
};

////* Boton editar categorias *////

const botonEditarCategoria = document.querySelector("#boton-editar-categoria");
const seccionEditarCategoria = document.querySelector(
  "#seccion-editar-categorias"
);
const botonCancelarEditarCategoria = document.querySelector("#boton-cancelar-editar-categoria")

botonEditarCategoria.onclick = (event) => {
  event.preventDefault();
  seccionCategorias.classList.add("is-hidden");
  seccionEditarCategoria.classList.remove("is-hidden");
};

botonCancelarEditarCategoria.onclick = (event) =>{
 event.preventDefault();
  seccionCategorias.classList.remove("is-hidden");
  seccionEditarCategoria.classList.add("is-hidden");
}

///////////////////* Resportes *///////////////////////


