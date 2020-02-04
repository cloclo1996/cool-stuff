//Transparent PIXI application
let app = new PIXI.Application({ 
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

forceCanvas: true,
app.renderer.backgroundColor = 0x061639;
app.renderer.autoResize = true;
app.renderer.resize(512, 512);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

app.stage

PIXI.utils.TextureCache["stool.jpeg"];

let texture = PIXI.utils.TextureCache["stool.jpeg"];
let sprite = new PIXI.Sprite(texture);

PIXI.loader
  .add("stool.jpeg")
  .load(setup);

function setup() {
  //This code will run when the loader has finished loading the image
}