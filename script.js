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
        shuffle();
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

    var winOrLose = function(attempts, matches){
      if (attempts == 0 && matches < 16 ){
        $('.card').each(function(i){
                var cName = 'c'+deck[i];
                $(this).addClass(cName);
                $('.container').append('<h1 class="prompt">Try Again!</h1>')
        });
      }
    }
  //This function creates click events, compares pairs and counts attempts and matches
    var playGame = function(){
      var attempts = 20;
      var matches = 0;
      var ready = true;
        $('.card').each(function(i){
            $(this).click(function(){
                if(ready === true){
                    winOrLose(attempts, matches);
                    pair.push(i);
                    var cName = 'c'+deck[i];
                    $(this).addClass(cName);
                }
                if(pair.length === 2){
                  ready = false;
                    var x = pair[0];
                    var y = pair[1];
                    if(deck[x] !== deck[y]){
                      attempts--;
                        setTimeout(function(){
                          $('.card').eq(x).attr('class', 'card');
                          $('.card').eq(y).attr('class', 'card');
                          ready = true;
                        }, 1500);
                    }else{
                      //checks to make sure the same card hasn't been clicked twice
                      if(x !== y){
                          matches ++;
                          attempts ++;
                          $('.card').eq(x).off('click');
                          $('.card').eq(y).off('click');
                      }
                      ready = true;
                    }
                    $('#matches').html('Matches: '+matches);
                    $('#attempts').html('Remaining Attempts: '+attempts);
                    pair.length = 0;
                }

            });
        });
    }
    //function calls
    makeDeck(16);
    displayCards();
    playGame();
    //resets and calls functions again
    $('#reset').click(function(){
        deck = [];
        $('#attempts').html('Remaining Attempts: 20');
        $('#matches').html('Matches: 0');
        $('.card').remove();
        makeDeck(16);
        displayCards();
        playGame();
    });

});
