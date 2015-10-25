
var deck = [];
$(document).ready(function(){
    var makeDeck = function(){
        for (var i=0; i<18; i++){
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

    var guess = function(){
        //get user's guess
       var first = prompt('firstGuess between 1-20');
       var second = prompt('secondGuess between 1-20');
       //correct for index
       first -= 1;
       second -= 1;
       console.log( first, second)
       //check
       if (deck[first] === deck[second]){
         alert('correct guess!')
       }else {
         alert('guess again!')
         guess();
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
        var cName = 'c'+deck[i];
        console.log(cName);
        console.log(self);
        $(self).toggleClass(cName);
      })
    });



  //  guess();







});
