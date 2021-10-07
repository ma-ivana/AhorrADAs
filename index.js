/*//////////////////// Elementos ////////////////////////*/

const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");

const seccionPrincipal = document.querySelector(".principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector(".reportes");
const seccionNuevaOperacion = document.getElementById(
  "seccion-nueva-operacion"
);
const seccionEditarCategoria = document.querySelector(
  "#seccion-editar-categorias"
);


const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById(
  "boton-cancelar-nuevas-operaciones"
);
const botonAgregarNuevaOperacion = document.getElementById(
  "boton-agregar-nuevas-operaciones"
);
const contenedorListadoNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const contenedorSinOperaciones = document.getElementById(
  "contenedor-sin-operaciones"
);

const botonEditarCategoria = document.querySelector("#boton-editar-categoria");

const botonCancelarEditarCategoria = document.querySelector(
  "#boton-cancelar-editar-categoria"
);


/////////////////////////////////// Función auxiliar ////////////////////////////////////////
const arraySecciones = [seccionPrincipal, seccionCategorias, seccionReportes, seccionNuevaOperacion, seccionEditarCategoria]

const mostrarSeccion = (array, seccion) =>{
  for (let i = 0; i < array.length; i++) {
    if(array[i] != seccion){
      array[i].classList.add("is-hidden")
     
    }
    if(seccion === seccion){
      seccion.classList.remove("is-hidden")
    }
    
  }
}

linkReportes.onclick = (event) =>{
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionReportes)
}

linkCategorias.onclick = (event) =>{
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias)
}
linkBalance.onclick = (event) =>{
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionPrincipal)
}

/*linkBalance.onclick = (event) => {
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
};*/

/*//////////////////// Menú desplegable mobile ////////////////////////*/

const menuDesplegableMobile = document.querySelector(".navbar-menu");
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const claseBotonHamburguesa = document.querySelector(".navbar-burger");
const linkBalanceMobile = document.querySelector(".link-balance-mobile");
const linkCategoriasMobile = document.querySelector(".link-categorias-mobile");
const linkReportesMobile = document.querySelector(".link-reportes-mobile");

botonHamburguesa.onclick = () => {
  menuDesplegableMobile.classList.toggle("is-active");
  claseBotonHamburguesa.classList.toggle("is-active");
  menuDesplegableMobile.classList.toggle("is-hidden");
};

linkBalanceMobile.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionPrincipal)
};

linkCategoriasMobile.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias)
};

linkReportesMobile.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionReportes)
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



botonNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionNuevaOperacion)
};


////* Boton cancelar seccion Nuevas operaciones *////
botonCancelarNuevasOperaciones.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal)
};

////* Boton agregar seccion Nuevas operaciones *////

botonAgregarNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal)
};

////* Boton editar categorias *////

botonEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionEditarCategoria)
};

botonCancelarEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias)
};

///////////////////* Resportes *///////////////////////
