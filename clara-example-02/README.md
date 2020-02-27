# README for Clara's extended example
This is an extension of the example "keyboardMovement" done by Clara Isaksson.

I extended the tutorial by making it more like other game standards, where the "player" goes diagonally if for example up and left is pressed at the same time. I also changed the code so the "player" stops moving if two arrow keys that take out each other are pressed at the same time - like if up and down is pressed or if right and left is pressed simultaneously. 

Before I made these changes the arrow keys had an unpredictable hierarchy for the one who plays the game. If you press for example both left and right keys at the same time the "player" would have moved either right or left - which might not be what the one who plays expect to happen, if the user has played games with the design standard I have changed the code into.

This extended version can be used together with the original example to see how users interpret the different design standards, and to see what might feel more intuitive.

Keyboard Movement example: https://github.com/kittykatattack/learningPixi/blob/master/examples/12_keyboardMovement.html

