/*//////////////////// Elementos ////////////////////////*/

const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");
const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector(".reportes");
const seccionNuevaOperacion = document.getElementById(
  "formulario-nueva-operacion"
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
const contenedorFiltros = document.querySelector("#contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");
const inputFechaFiltro = document.getElementById("input-fecha-filtro");
const numeroGastoSeccionBalance = document.getElementById("numero-gastos");
const numeroGananciasSeccionBalance =
  document.getElementById("numero-ganancias");
const totalGananciasMenosGastos = document.getElementById("numero-total");

const selectCategoria = document.getElementById("select-categoria");
const inputAgregarCategoria = document.getElementById(
  "input-agregar-categoria"
);
const botonAgregarCategoria = document.getElementById(
  "boton-agregar-categoria"
);

const contenedorItemsCategorias = document.getElementById(
  "contenedor-categorias-agregadas"
);

/////////////////////////////////// Función auxiliar ////////////////////////////////////////
const arraySecciones = [
  seccionPrincipal,
  seccionCategorias,
  seccionReportes,
  seccionNuevaOperacion,
  seccionEditarCategoria,
];

const mostrarSeccion = (array, seccion) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != seccion) {
      array[i].classList.add("is-hidden");
    } else if (array[i] === seccion) {
      array[i].classList.remove("is-hidden");
    }
  }
};

/*//////////////////// Links botones del NAV ////////////////////////*/

linkReportes.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionReportes);
};

linkCategorias.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias);
};
linkBalance.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

/*//////////////////// Menú desplegable mobile ////////////////////////*/

const menuDesplegableMobile = document.querySelector(
  "#menu-desplegable-mobile"
);
const botonHamburguesa = document.getElementById("boton-hamburguesa");

botonHamburguesa.onclick = () => {
  botonHamburguesa.classList.toggle("is-active");
  menuDesplegableMobile.classList.toggle("is-active");
};

/*//////////////////// Ocultar filtros sección principal ////////////////////////*/

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
  mostrarSeccion(arraySecciones, seccionNuevaOperacion);
};

////* Boton cancelar seccion Nuevas operaciones *////
botonCancelarNuevasOperaciones.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

////* Boton agregar seccion Nuevas operaciones *////

botonAgregarNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

////* Boton editar categorias *////

botonEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionEditarCategoria);
};

botonCancelarEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias);
};

///////////////////* Funcion crear item de nueva operación *///////////////////////

const contenedorNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const itemNuevaOperacion = document.getElementById("item-nueva-operacion");
const selectDeTipo = document.getElementById("select-tipo");
const selectDeCategoria = document.getElementById("select-categoria");

//// Información ////
const operaciones = [
  {
    descripcion: "Cena con amigos",
    categoria: "Salidas",
    fecha: "25/09/2021",
    monto: 2500,
    tipo: "gasto",
  },
  {
    descripcion: "Sueldo",
    categoria: "Trabajo",
    fecha: "01/09/2021",
    monto: 500000,
    tipo: "ganancia",
  },
  {
    descripcion: "Pagar monotributo",
    categoria: "Trabajo",
    fecha: "01/09/2021",
    monto: 40000,
    tipo: "gasto",
  },
  {
    descripcion: "Aguinaldo",
    categoria: "Trabajo",
    fecha: "15/09/2021",
    monto: 25000,
    tipo: "ganancia",
  },
  {
    descripcion: "Comida para gatos",
    categoria: "Comida",
    fecha: "25/09/2021",
    monto: 3000,
    tipo: "gasto",
  },
  {
    descripcion: "Alquiler",
    categoria: "Alquiler",
    fecha: "25/09/2021",
    monto: 25000,
    tipo: "gasto",
  },
  {
    descripcion: "Expensas",
    categoria: "Servicios",
    fecha: "01/09/2021",
    monto: 5000,
    tipo: "gasto",
  },
  {
    descripcion: "Transporte",
    categoria: "Transporte",
    fecha: "01/09/2021",
    monto: 500,
    tipo: "gasto",
  },
  {
    descripcion: "Ada",
    categoria: "Educación",
    fecha: "01/09/2021",
    monto: 5000,
    tipo: "gasto",
  },
];

const categorias = [
  "Todos",
  "Trabajo",
  "Comida",
  "Educación",
  "Transporte",
  "Servicios",
  "Salidas",
  "Alquiler",
];

///Función auxiliar para mostrar elementos en HTML////

const colorDeMonto = (objeto) => {
  if (objeto.tipo === "gasto") {
    return "has-text-danger";
  } else {
    return "has-text-success";
  }
};

const mostrarOperacionesEnHTML = (array) => {
  let acc = "";
  array.map((operacion) => {
    acc =
      acc +
      `<div id="item-nueva-operacion" class="columns is-mobile">
    <p id="descripcion-item-operacion" class="column is-3 mr-0-mobile has-text-weight-semibold">${
      operacion.categoria
    }</p>
    <div class="column is-3 is-6-mobile">
      <p id="categoria-item-operacion" class="tag is-primary is-light">${
        operacion.descripcion
      }</p>
    </div>
    <p id="fecha-item-operacion" class="column is-2 is-hidden-mobile">${
      operacion.fecha
    }</p>
    <p id="monto-item-operacion" class="column is-2 is-3-mobile  has-text-weight-bold ${colorDeMonto(
      operacion
    )}">$${operacion.monto}
    </p>
    <div class="column is-2 is-3-mobile pt-0">
      <button id="boton-editar-item-operaciones" class="button is-ghost is-small pt-0 pb-0">Editar</button>
      <button id="boton-eliminar-item-operaciones" class="button is-ghost is-small pt-0">Eliminar</button>
    </div>
  </div>`;
  });
  contenedorNuevasOperaciones.innerHTML = acc;
};

//mostrarOperacionesEnHTML(operaciones);
mostrarOperacionesEnHTML(operaciones);

// Funciones de filtrado //

const aplicarFiltros = () => {
  const tipo = selectDeTipo.value;

  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === "Todos") {
      return operacion;
    }
    return operacion.tipo === tipo;
  });

  const categoria = selectDeCategoria.value;
  const filtradoFinal = filtradoPorTipo.filter((operacion) => {
    if (categoria === "Todos") {
      return operacion;
    }
    return operacion.categoria === categoria;
  });

  return filtradoFinal;
};

// Por tipo//
selectDeTipo.onchange = () => {
  const arrayFiltroTipo = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltroTipo);
};

// Por categoría

selectDeCategoria.onchange = () => {
  const arrayFiltradoFinal = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltradoFinal);
};

// Por fecha

// Seccion balance //

//Función auxiliar, operaciones de tipo Ganancia

const operacionesGanancia = (operaciones) => {
  const operacionesTipoGanancia = operaciones.filter((operacion) => {
    return operacion.tipo === "ganancia";
  });
  return operacionesTipoGanancia;
};

//función auxiliar, operaciones de tipo Gasto

const operacionesGasto = (operaciones) => {
  const operacionesTipoGasto = operaciones.filter((operacion) => {
    return operacion.tipo === "gasto";
  });
  return operacionesTipoGasto;
};

// Mostrar en Balance el total de ganancias, el total de gastos y el resto entre ellos.

const mostrarBalance = (gastos, ganancias) => {
  const totalGastos = gastos.reduce((acc, operacion) => {
    return acc + operacion.monto;
  }, 0);

  const totalGanancias = ganancias.reduce((acc, operacion) => {
    return acc + operacion.monto;
  }, 0);

  numeroGananciasSeccionBalance.textContent = `+$${totalGanancias}`;
  numeroGastoSeccionBalance.textContent = `-$${totalGastos}`;

  const total = totalGanancias - totalGastos;

  if (total > 0) {
    totalGananciasMenosGastos.classList.add("has-text-success");
    totalGananciasMenosGastos.textContent = `$${total}`;
  } else {
    totalGananciasMenosGastos.classList.add("has-text-danger");
    const totalString = String(total);
    const totalCortado = totalString.slice(1);
    totalGananciasMenosGastos.textContent = `$${Number(totalCortado)}`;
  }
};

mostrarBalance(operacionesGasto(operaciones), operacionesGanancia(operaciones));

// AGREGAR NUEVA CATEGORIA

// Funciones auxiliares

const guardarEnLocalStorage = (array, clave) => {
  const nuevoObjeto = { categorias: array };
  const objetoJSON = JSON.stringify(nuevoObjeto);
  localStorage.setItem(clave, objetoJSON);
};

const traerCategoriasDesdeLS = (clave) => {
  const datosLocalStorage = localStorage.getItem(clave);
  const objetoLS = JSON.parse(datosLocalStorage);
  if (objetoLS === null) {
    return null;
  } else {
    return objetoLS.categorias;
  }
};

const capitalizar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Agregar item nueva categoria

const agregarItemCategoria = (array) => {
  const itemCategorias = array.reduce((acc, categoria,index,array) => {
    return (
      acc +
      `<div class="columns is-mobile" id=categoria-agregada>
<div class="column">
<p class="tag is-primary is-light">${categoria}</p>
</div>
<div class="column is-flex is-justify-content-flex-end ">
<button id="boton-editar-categoria-${index}"class="button is-ghost is-size-7">Editar</button>
    <button id="boton-eliminar-categoria-${index}"class="button is-ghost is-size-7">Eliminar</button>
</div>
</div>`
    )
  }, "")
  contenedorItemsCategorias.innerHTML = itemCategorias;
}

//// AGREGAR CATEGORÍA EN EL SELECT

const agregarCategoriaHTML = (categorias) => {
  const categoriasEnHTML = categorias.reduce((acc, categoria, index, array) => {
    return (
      acc +
      `<option value="${categoria}" id="categoria-${index}">${categoria}</option>`
    );
  }, "");

  selectCategoria.innerHTML = categoriasEnHTML;

  guardarEnLocalStorage(categorias, "categorias");
};

if (traerCategoriasDesdeLS("categorias") === null) {
  agregarCategoriaHTML(categorias);
  agregarItemCategoria(categorias);
} else {
  agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"))
  agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
}

botonAgregarCategoria.onclick = (event) => {
  event.preventDefault();
  const categoriaCapitalizada = capitalizar(inputAgregarCategoria.value);
console.log(inputAgregarCategoria.value)
  const arrayDesdeLS = traerCategoriasDesdeLS("categorias");

  if (arrayDesdeLS.includes(categoriaCapitalizada)) {
    alert("Categoria ya existente!")
  }
 else if(inputAgregarCategoria.value === " "){
    alert("Categoria sin nombre! Asignale uno!")
  }
  else {
    categorias.push(categoriaCapitalizada);
    guardarEnLocalStorage(categorias, "categorias");
    agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"));
    agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
    inputAgregarCategoria.value = "";
  }
};


// Agregar nueva operación

//traer los elementos de HTML del formulario agregar nueva operacion.
// crear una array vacio de "operaciones"
// crear una funcion que:
//1. Cree un objeto con las siguientes propiedades: id, descripcion, categoria, fecha, monto y tipo.
//2. pushear el objeto al array "operaciones"
//3. guarde el array operaciones en LS con la funcion: guardarEnLocalStorage
// armar una funcion que traiga las operaciones desde ls
// vincular lo que armamos hasta ahora trayendo el array desde ls. 
// si no hay nada guardado en la mostrar la imagen en la pagina principal. Si hay categorias en LS que saque la imagen y muestre el listado. 




