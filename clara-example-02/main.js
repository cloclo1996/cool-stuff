
//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({ 
    width: 256, 
    height: 256,                       
    antialiasing: true, 
    transparent: false, 
    resolution: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

loader
  .add("../learningPixi-master/examples/images/cat.png")
  .load(setup);

//Define any variables that are used in more than one function
var cat, state;

function setup() {

  //Create the `cat` sprite 
  cat = new Sprite(resources["../learningPixi-master/examples/images/cat.png"].texture);
  cat.y = 96; 
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  //Capture the keyboard arrow keys
  let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);

  //Left arrow key `press` method
  left.press = () => {
    //Change the cat's velocity when the key is pressed
    if(right.isDown)
        cat.vx = 0;
    else
        cat.vx = -5;
    //cat.vy = 0;
  };
  
  //Left arrow key `release` method
  left.release = () => {
    //If the left arrow has been released, and the right arrow isn't down,
    //and the cat isn't moving vertically:
    //Stop the cat
    if(right.isDown)
        cat.vx = 5;
    else  
        cat.vx = 0;
  };

  //Up
  up.press = () => {
    if(down.isDown)
        cat.vy = 0;
    else
        cat.vy = -5;
    //cat.vx = 0;
  };
  up.release = () => {
    //if (!down.isDown && cat.vx === 0) {
    if(down.isDown)
        cat.vy = 5
    else
        cat.vy = 0;
    //}
  };

  //Right
  right.press = () => {
    if(left.isDown)
        cat.vx = 0;
    else
        cat.vx = 5;
    //cat.vy = 0;
  };
  right.release = () => {
    //if (!left.isDown && cat.vy === 0) {
    if(left.isDown)
        cat.vx = -5;
    else
        cat.vx = 0;
    //}
  };

  //Down
  down.press = () => {
    if(up.isDown)
        cat.vy = 0;
    else
        cat.vy = 5;
    //cat.vx = 0;
  };
  down.release = () => {
    //if (!up.isDown && cat.vx === 0) {
    if(up.isDown)
        cat.vy = -5;
    else
        cat.vy = 0;
    //}
  };

  //Set the game state
  state = play;
 
  //Start the game loop 
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

  //Update the current game state:
  state(delta);
}

function play() {

  //Use the cat's velocity to make it move
  cat.x += cat.vx;
  cat.y += cat.vy;
}

//The `keyboard` helper function
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

//The problems I was facing is that an arrow key can only be pressed once, it doesn't work the second time. The program also acts as if I have never released the key... The cat's velocity doesn't stop after I've released the key. Somehow it works now, but the delta isn't used in one of the functions which makes it unneccessary to have there.

//I extended the tutorial by making it more like other game standards, where the "player" goes diagonally if for example up and left is pressed at the same time. I also changed the code so the "player" stops moving if two arrow keys that take out each other are pressed - like if up and down is pressed or if right and left is pressed.
//Before I made these changes the arrow keys had an unpredictable hierarchy for the one who plays the game. If you press for example both left and right keys at the same time the "player" would have moved either right or left - which might not be what the one who plays expect to happen, if the user has played games with the design standard I have changed the code into.