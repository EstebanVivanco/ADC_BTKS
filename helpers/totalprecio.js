// Obtén referencias a los elementos del botón y la lista
const botones2 = document.querySelectorAll('.miBoton');
const lista2 = document.getElementById('miLista2');
const contenedor2 = document.getElementById('totalprecio');
const listaPrecio = [];
let preciolimpio = "";
const total = document.createElement('h1');



// Agrega un event listener al botón para detectar el clic
// Agrega event listeners a los botones de agregar
botones2.forEach((boton) => {
    boton.addEventListener('click', SumarValores);
});
  
function suma (lista){
    
    const suma = lista.reduce((total, numero) => total + numero, 0);
    return suma;
}


function SumarValores() {

    
    const card = event.currentTarget.closest('.card'); // Encuentra el elemento .card más cercano
    const precio = card.querySelector('h7').innerText;

    preciolimpio = precio.match(/\d+/)[0];

    listaPrecio.push(preciolimpio);

    const numeros = listaPrecio.map(elemento => Number(elemento));
    
    total.innerText = suma(numeros);

    contenedor2.appendChild(total);



}


