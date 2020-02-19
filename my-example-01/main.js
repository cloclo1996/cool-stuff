const app = new PIXI.Application();
document.body.appendChild(app.view);

let bol = false;


// create a texture from an image path
const firstTexture = PIXI.Texture.from('images/cat.png');

// create a second texture
const secondTexture = PIXI.Texture.from('images/blob.png');


// create a new Sprite using the texture
const dude = new PIXI.Sprite(firstTexture);


// center the sprites anchor point
dude.anchor.set(0.5);

// move the sprite to the center of the screen
dude.x = app.screen.width / 3;
dude.y = app.screen.height / 3;


app.stage.addChild(dude);

// make the sprite interactive
dude.interactive = true;
dude.buttonMode = true;

dude.on('pointertap', () => {
     bol = !bol;
     if (bol) {
         dude.texture = secondTexture;
     } else {
         dude.texture = firstTexture;
     } 
 });



app.ticker.add(() => {
  // just for fun, let's rotate mr rabbit a little
     dude.rotation -= 0.05;
});

