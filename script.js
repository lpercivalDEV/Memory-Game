

$(document).ready(function(){
  var deck = [];
  var pair = [];
    var makeDeck = function(numPairs){
        for (var i=0; i<numPairs; i++){
          var rndm = Math.floor(Math.random()*20);
          if (deck.indexOf(rndm) == -1){
              deck.push(rndm);
              deck.push(rndm);
          }else {
            i--;
          }
        }
    }

    var shuffle = function(){
      var temp, i, n = deck.length;

      while(n){
        i = Math.floor(Math.random()*n--);
        temp = deck[n];
        deck[n] = deck[i];
        deck[i] = temp;
      }

    }

    var displayCards = function(){
          for(var i=0; i<deck.length; i++){
          $('.container').append('<div class="card"></div>');
          };
    }

  // var level = prompt('choose levels 1, 2, 3');
  //   switch (level){
  //     case '1':
  //       makeDeck(8);
  //       break;
  //     case '2':
  //       makeDeck(12);
  //       break;
  //     case '3':
  //       makeDeck(16);
  //       break;
  //   }
    makeDeck(16);
    //makeDeck();
    shuffle();
    displayCards();

    $('.card').each(function(i){
        var self = this;
        $(this).click(function(){
            if(pair.length < 2){
              pair.push(i);
              console.log(pair);
              var cName = 'c'+deck[i];
              $(self).toggleClass(cName);
            }else{
              var x = pair[0];
              var y = pair[1];
              if(deck[x] !== deck[y]){
                  setTimeout(function(){$('.card').eq(x).attr('class', 'card');
                  $('.card').eq(y).attr('class', 'card');}, 1000);

                }
              pair.length = 0;
            }
          });
      });

});
