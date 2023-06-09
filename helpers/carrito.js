// Obtén referencias a los elementos del botón y la lista
const botones = document.querySelectorAll('.miBoton');
const lista = document.getElementById('miLista');
const contenedor = document.getElementById('inputcontainer');
const listaAsientos = [];
const listaNum = [];
const strings = "";
// Agrega un event listener al botón para detectar el clic
// Agrega event listeners a los botones de agregar
botones.forEach((boton) => {
    boton.addEventListener('click', agregarValor);
});
  
// Función que se ejecuta cuando se hace clic en el botón
function agregarValor() {
 
    
    const card = event.currentTarget.closest('.card'); // Encuentra el elemento .card más cercano
    // Busca el elemento de texto deseado dentro de la tarjeta
    const asiento_id = card.querySelector('p').innerText;
    const numero = card.querySelector('h5').innerText;
    const precio = card.querySelector('h7').innerText;


   // Verifica si el valor ya existe en la lista
    if (listaAsientos.includes(asiento_id)) {
      alert('El elemento ya existe en la lista.');
      return; // Detiene la ejecución de la función
    }

    if (listaNum.includes(numero)) {
        alert('El elemento ya existe en la lista.');
        return; // Detiene la ejecución de la función
    }

    listaAsientos.push(asiento_id);
    listaNum.push(numero);

    console.log('listaAsientos :>> ', listaAsientos);
    
    //Nuevo Elemento
    const nuevoElemento = document.createElement('li');
    const nuevoprecio = document.createElement('li');
    const hr = document.createElement('hr');

    nuevoElemento.classList = "list-group-item";
    nuevoprecio.classList = "list-group-item";
    // Agrega el valor deseado al nuevo elemento de lista
    nuevoElemento.textContent = numero;
    nuevoprecio.textContent = precio ;

    
     // Agrega el nuevo elemento a la lista existente
    lista.appendChild(nuevoElemento);
    lista.appendChild(nuevoprecio);
    lista.appendChild(hr);
    contenedor.value = listaAsientos;
}
