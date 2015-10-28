$(document).ready(function(){
  var deck = []; //array of integers that correspond to "cards"
  var pair = []; //array that holds selected card for comparison

  //This function checks attempts and matches to determine if user won or lost
  var winOrLose = function(attempts, matches){
    if (attempts == 0 && matches < (deck.length)/2){
      $('.card').each(function(i){
              var cName = 'c'+deck[i];
              $(this).addClass(cName);
              $('.container').append('<h1 class="prompt">Try Again!</h1>')
      });
    }else if (matches == (deck.length)/2 && attempts >= 0) {
      $('.container').append('<h1 class="prompt">Well Done!</h1>');
    }
  }

  //This function creates click events, compares pairs and counts attempts and matches
  var playGame = function(attempts){
    // var attempts = 20;
    var matches = 0;
    $('#matches').html('Matches: '+matches);
    $('#attempts').html('Chances: '+attempts);
    var ready = true; //game state
      $('.card').each(function(i){
          $(this).click(function(){
              if(ready === true){
                  var cName = 'c'+deck[i];
                  $(this).addClass(cName);
                  if(i !== pair[0]){  //prevents double clicks counting as a turn
                    pair.push(i);
                  }
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
                  winOrLose(attempts, matches);
                  $('#matches').html('Matches: '+matches);
                  $('#attempts').html('Chances: '+attempts);
                  pair.length = 0;
              }

          });
      });
  }
  //This function creates the card divs in the class container
  var displayCards = function(){
        for(var i=0; i<deck.length; i++){
        $('.container').append('<div class="card"></div>');
        };
        if(deck.length == 8){
          $('.card').height(250).width(250);
          playGame(6);
        }else if(deck.length == 18){
          $('.card').height(175).width(175);
          playGame(10);
        }else{
          playGame(20);
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
      displayCards();
    }
  // This function generates random numbers from 0-20 (21 possible card patterns) and inserts them into the array twice
    var makeDeck = function(numPairs){
      deck = [];
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

    //clears screen from all the dynamically added elements
    var clearScreen = function(){
      $('.prompt').remove();
      $('.card').remove();
    }

    //game process and levels
    var gameStart = function (){
    $('body').append('<h1 class="prompt">Choose a Level<h1>');
    $('#easy').click(function(e){
        e.preventDefault();
        clearScreen();
        makeDeck(4);
    })

    $('#mid').click(function(e){
        e.preventDefault();
        clearScreen();
        makeDeck(9);
    })
    $('#hard').click(function(e){
        e.preventDefault();
        clearScreen();
        makeDeck(16);
    })
    //resets and calls functions again
    $('#reset').click(function(e){
        e.preventDefault();
        gameStart();
    });
  }

    //function call
    gameStart();

});
