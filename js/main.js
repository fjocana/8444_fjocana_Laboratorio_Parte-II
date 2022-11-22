$('[data-toggle="popover"]').popover();

  $('[data-toggle="tooltip"]').tooltip();

// Accedemos al botón
var emailInput = document.getElementById('floatingEmailInput');
var fecha = document.getElementById('fecha');
var tlf = document.getElementById('telefono');
// evento
document.getElementById('verificar').addEventListener('click', function(e) {
  console.log('Vamos a habilitar el input text');
  emailInput.disabled = true;
 fecha.disabled = true;
  tlf.disabled = true;
});

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
$('.carousel').carousel({interval:50})