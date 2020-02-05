//Create a Pixi Application
let app = new PIXI.Application({width: 256, height: 256});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// create a new Sprite from an image path
const blob = PIXI.Sprite.from('images/blob.png');

// center the sprite's anchor point
blob.anchor.set(0.5);

// move the sprite to the center of the screen
blob.x = app.screen.width / 2;
blob.y = app.screen.height / 2;

app.stage.addChild(blob);

// Listen for animate update
app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    blob.rotation += 0.1 * delta;
});