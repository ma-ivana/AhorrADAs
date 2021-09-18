
const linkBalance = document.querySelector(".link-balance")
const linkCategorias = document.querySelector(".link-categorias")
const linkReportes = document.querySelector(".link-reportes")

const seccionPrincipal = document.querySelector(".principal")
const seccionCategorias = document.querySelector(".categorias")


linkBalance.onclick = (event) =>{
    event.preventDefault();
    
    seccionPrincipal.style.display = "flex"
   
}

linkCategorias.onclick = (event) =>{
    event.preventDefault();
    seccionCategorias.style.display = "flex"
    seccionPrincipal.style.display = "none"
  
}
/*
linkReportes.onclick = () =>{
    l.style.display = "flex"
}*/