Memory Game User Stories
1. User should be able to get a shuffle deck of cards that have matching pairs
2. User should be able to flip cards over by clicking on them
3. User should be able to flip two cards at a time
4. User should be able to try matching cards again
5. User should be able to collect paired cards/eliminate them from the set
6. User should be able to reset the game

Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

My approach was to create a game logic that's as independent from the user interface as possible. I started off the mvp with an array of paired integers that got shuffled and the user could guess the position of matching pairs within the array. Once I had that working, I tackled the user interface and the click events. I found that part to be the most challenging because it created many possible user errors.

For the CSS I started playing with flex boxes and in talking to John and reading online I learned a lot about them but didn't implement all that I learned here. I would have liked to break down the playGame function into smaller, better defined functions based on whether they did game logic or user interface but that seemed a little daunting after I had everything working! 
