//Aliases to get around using PIXI all the time
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;

//Creating a Pixi Application - the background.
let app = new Application({
    width: 456,
    height: 456,
    antialiasing: true,
    transparent: false,
    resolution: 1
});

//Adding the canvas that Pixi automatically creates to the HTML document
document.body.appendChild(app.view);

//Loading the cat sprite
loader
    .add("../learningPixi-master/examples/images/cat.png")
    .load(setup);

//Defining variables that are used in more than one function
var cat, state;

function setup() {
    
    //Creating the cat sprite
    cat = new Sprite(resources["../learningPixi-master/examples/images/cat.png"].texture);
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    app.stage.addChild(cat);

    //Capturing the keyboard arrow keys
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    
    //Method to make a press on the left arrow key work
    left.press = () => {
        //Changing the cat's velocity when the left arrow key is pressed
        cat.vx = -5;
        cat.vy = 0;
    };

    //Method for the release of the left arrow keypress
    left.release = () => {
        //Making the cat stop if it's not moving vertically and if the left arrow key has been released and the right arrow key isn't pressed
        if (!right.isDown && cat.vy === 0) {
            cat.vx = 0;
        }
    };

    //Same as above but for the up arrow key
    up.press = () => {
        cat.vy = -5;
        cat.vx = 0;
    };
    up.release = () => {
        if (!down.isDown && cat.vx === 0) {
            cat.vy = 0;
        }
    };

    //Right arrow key
    right.press = () => {
        cat.vx = 5;
        cat.vy = 0;
    };
    right.release = () => {
        if (!left.isDown && cat.vy === 0) {
            cat.vx = 0;
        }
    };

    //Down arrow key
    down.press = () => {
        cat.vy = 5;
        cat.vx = 0;
    };
    down.release = () => {
        if (!up.isDown && cat.vx === 0) {
            cat.vy = 0;
        }
    };
    
    //Setting the game state
    state = play;

    //Starting the game loop
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    //Updating the current game state:
    state(delta);
}

function play(delta) {
    //Using the cat's velocity to make it move
    cat.x += cat.vx;
    cat.y += cat.vy;
}

//The keyboard helper function
function keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The function to handle down events
    key.downHandler = event => {
        if(event.keyCode === key.code) {
            if(key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        //Not sure if this is working??
        event.preventDefault();
    };

    //The function to handle up events
    key.upHandler = event => {
        if(event.keycode === key.code) {
            if(key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        //Not sure if this is working
        event.preventDefault();
    };

    //Attaching the event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}

//The problems I am facing is that an arrow key can only be pressed once, it doesn't work the second time. The program also acts as if I have never released the key... The cat's velocity doesn't stop after I've released the key.