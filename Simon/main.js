//Create a Pixi Application
let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

let app = new PIXI.Application({width: 800, height: 600, 
    antialias: true, transparent: false, 
    resolution: 1, forceCanvas: true});

let texture = PIXI.utils.TextureCache["cat.jpg"];
let sprite = new PIXI.Sprite(texture);

PIXI.loader
    .add("cat.jpg")
    .load(setup);

function setup() {
    
}

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);