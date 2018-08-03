$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });

 // Botón

 // Selección de elementos
 var $button = $('#myButton');
 var $select = $('select');
 var $inputAltura = $('input[id=input-altura]').val();
 var $inputPeso = $('input-peso');
 var $inputFecha = $('input[id=fecha]').val();

 $button.on('click',function(){
     console.log('hola')
 });

$(document).ready(function(){
  
  $('#sexo-wawa').change(function() {
             console.log($('select[id=sexo-wawa]').val());
            //  $('#fem').val($(this).val());

            //  var $dataSelect =;

             if ( $('select[id=sexo-wawa]').val() >= 2) {
              console.log('pasa a función de altura para niños');
              
            } else {
              console.log('pasa a función de altura para niñas')
            }
  })});

  if ($inputFecha >= 2013-01-01) {
    console.log('tiene ')
  }

// function alturaNiñas () {
//   if ($inputAltura > 0)
// }