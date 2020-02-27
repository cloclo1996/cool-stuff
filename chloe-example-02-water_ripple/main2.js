let app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

//Global variables to be used
let mouseX, mouseY, displacementSprite, displacementFilter, background, vx, vy;

//A Container represents a collection of display objects.
let container = new PIXI.Container();
app.stage.addChild(container);

//Make stage interactive
app.stage.interactive = true;

//Load images
PIXI.loader.add("../images/ripple.png").add("../images/water.jpg").load(setup);

function setup() {
    mouseX = app.renderer.width / 2;
    mouseY = app.renderer.height / 2;

    //Create a new Sprite for the diplacement map
    displacementSprite = new PIXI.Sprite(PIXI.loader.resources["../images/ripple.png"].texture);

    //Turn Sprite into a diplacement filter
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    console.log(displacementSprite);

    //Placing the sprite on the canvas. Otherwise it doesn't show up on the screen
    displacementSprite.anchor.set(0.5);

    vx = displacementSprite.x;
    vy = displacementSprite.y;

    //Create a background
    background = new PIXI.Sprite(PIXI.loader.resources["../images/water.jpg"].texture);
    background.width = app.renderer.width;
    background.height = app.renderer.height;

    //Add background to container
    container.addChild(background);

    //Event handlers
    app.stage.on('mouseup', onPointerUp) .on('mousedown', onPointerDown);

    //Call the loop function to start the animation
    loop();
}

function onPointerUp(eventData) {
    //Place the ripple on the pointer
    mouseX = eventData.data.global.x;
    mouseY = eventData.data.global.y;
    
    //When the sprite is added here, it will only appear when the event is triggered.
    container.addChild(displacementSprite);
    container.filters = [displacementFilter];
}

function onPointerDown(){
    //reset ripple
    displacementSprite.x = 0;
    displacementSprite.y = 0;
    displacementSprite.scale.x = 0;
    displacementFilter.scale.x = 0;
    displacementSprite.scale.y = 0;
    displacementFilter.scale.y = 0;
    container.removeChild(displacementSprite);
    container.filters = null;
}

function loop() {
    vx += (mouseX - displacementSprite.x);
    vy += (mouseY - displacementSprite.y);
    displacementSprite.x = vx;
    displacementSprite.y = vy;

    if(displacementSprite.scale.x === 20){
        //reset ripple
        onPointerDown();

        //reset background
        setup();

        container.removeChild(displacementSprite);
        container.filters = null;

        cancelAnimationFrame(loop);

    } else {
        requestAnimationFrame(loop);
            //Ripple grows
        displacementSprite.scale.x += 0.25;
        displacementFilter.scale.x += 0.25;
        displacementSprite.scale.y += 0.25;
        displacementFilter.scale.y += 0.25;
    }
}