$(document).ready(function(){

  // genero griglia quadratini
  for (var i = 0; i < 35; i++) {
    $('.griglia').append('<div class="quadratino"></div>')
  }


  $('.quadratino').click(function(){

    $.ajax({
      'url': 'https://www.boolean.careers/api/random/int',
      'method': 'GET',
      'success': function(data){
        output (data);
        console.log(data);
      },
      'error': function(){

      }
    });

    function output(info){
      // info= generica variabile a cui sopra do valore data
      var numero = info.response;
      console.log(numero);
      return numero
    }
    
    // if (numero < 5 ){
    //   alert('ok')
    //   $(this).addClass('giallo');
    // } else {
    //   alert('no')
    //   $(this).addClass('verde');
    // }


  });















})
