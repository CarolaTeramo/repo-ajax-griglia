$(document).ready(function(){

  // genero griglia quadratini
  for (var i = 0; i < 35; i++) {
    $('.griglia').append('<div class="quadratino"></div>');
  }


  $('.quadratino').click(function(){
    var questo = $(this);
    // se non ha la classe giallo e se non ha la classe verde
    //fai qualcosa
    if ( (!questo.hasClass('giallo')) & (!questo.hasClass('verde')) ){
      
      $.ajax({
        'url': 'https://www.boolean.careers/api/random/int',
        'method': 'GET',
        'success': function(data){
          output(data);
          console.log(data);
        },
        'error': function(){

        }
      });
      function output(info){
        // info= generica variabile a cui sopra do valore data
        var numero = info.response;
        console.log(numero);
        console.log(questo);
        if (numero <= 5 ){
          //alert('ok')
          questo.addClass('giallo');
          questo.append('<div class="scritta"></div>').text(numero);
          //questo.children('.scritta').text(numero)
        } else {
          questo.addClass('verde');
          questo.append('<div class="scritta"></div>').text(numero);
        }

      }
    }


  });

  // $('.quadratino').click(function(){
  //   var questo = $(this);
  //   $.ajax({
  //     'url': 'https://www.boolean.careers/api/random/int',
  //     'method': 'GET',
  //     'success': function(data){
  //       output(data);
  //       console.log(data);
  //     },
  //     'error': function(){
  //
  //     }
  //   });
  //   function output(info){
  //     // info= generica variabile a cui sopra do valore data
  //     var numero = info.response;
  //     console.log(numero);
  //     console.log(questo);
  //     if (numero <= 5 ){
  //       //alert('ok')
  //       questo.addClass('giallo');
  //       questo.append('<div class="scritta"></div>').text(numero);
  //       //questo.children('.scritta').text(numero)
  //     } else {
  //       questo.addClass('verde');
  //       questo.append('<div class="scritta"></div>').text(numero);
  //     }
  //
  //   }
  // });



















})
