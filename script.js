
var deck = [];
var pair =[];
$(document).ready(function(){
    var makeDeck = function(){
        for (var i=0; i<16; i++){
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

  
    makeDeck();
    console.log(deck);
    shuffle();
    console.log(deck);

    for(var i=0; i<deck.length; i++){
      $('.container').append('<div class="card"></div>');
    };

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
                    $('.card').eq(x).attr('class', 'card');
                    $('.card').eq(y).attr('class', 'card');
                }
              pair.length = 0;
            }
          });
      });


  //  guess();







});
