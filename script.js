$(document).ready(function(){
  var deck = [];
  var pair = [];
  // This function generates random numbers from 0-20 (21 possible card patterns) and inserts them into the array twice
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
  // This function uses Fisher-Yates method to shuffle the deck
    var shuffle = function(){
      var temp, i, n = deck.length;

      while(n){
        i = Math.floor(Math.random()*n--);
        temp = deck[n];
        deck[n] = deck[i];
        deck[i] = temp;
      }
    }
    //This function creates the card divs in the class container
    var displayCards = function(){
          for(var i=0; i<deck.length; i++){
          $('.container').append('<div class="card"></div>');
          };
    }
    //This function creates click events, compares pairs and counts attempts and matches
    var playGame = function(){
      var attempts = 0;
      var matches = 0;
      var ready = true;
        $('.card').each(function(i){
            var self = this;
            $(this).click(function(){
                if(ready === true){
                    pair.push(i);
                    var cName = 'c'+deck[i];
                    $(self).toggleClass(cName);
                }
                if(pair.length === 2){
                  ready = false;
                  attempts++;
                  $('#attempts').html('Attempts: '+attempts);
                    var x = pair[0];
                    var y = pair[1];
                    if(deck[x] !== deck[y]){
                        setTimeout(function(){
                          $('.card').eq(x).attr('class', 'card');
                          $('.card').eq(y).attr('class', 'card');
                          ready = true;
                        }, 2000);
                    }else {
                      matches ++;
                      $('#matches').html('Matches: '+matches);
                      ready = true;
                    }
                    pair.length = 0;
                }

            });
        });
    }
    //function calls
    makeDeck(14);
    shuffle();
    displayCards();
    playGame();
    //resets and calls functions again
    $('#reset').click(function(){
        deck = [];
        $('.card').remove();
        makeDeck(16);
        shuffle();
        displayCards();
        playGame();
    });

});
