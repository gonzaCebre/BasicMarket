
//BARRA LATERAL CARRITO
const btnToggle = document.querySelector('.toggle-btn'); //querySelector permite seleccionar un elemento. Al agregar un punto adelante del elemento le dice que lo que tiene que buscar es una clase

btnToggle.addEventListener('click', function(){ //Cuando se clickee sobre el elemento se va a ejecutar la funcion
    document.getElementById('sidebar').classList.toggle('active'); //classList.toggle agrega una clase si no la tiene o se la saca si ya la tiene
});
