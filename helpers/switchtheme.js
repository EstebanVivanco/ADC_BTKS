const temaOscuro = () =>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-brightness-high");
}

const temaClaro = () =>{
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"? 
    temaOscuro() : temaClaro();
}


const activarModoAutomatico = () => {

    var fecha = new Date();
    var hora = fecha.getHours();

    console.log('hora :>> ', hora);

    if (hora >= 19 || hora < 6){
        temaOscuro();
    }else{
        temaClaro();
    }

}


