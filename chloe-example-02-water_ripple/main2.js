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
PIXI.loader.add("../images/ripple.png").add("../images/water.png").load(setup);

function setup() {
    mouseX = app.renderer.width / 2;
    mouseY = app.renderer.height / 2;

    //Create a new Sprite for the diplacement map
    displacementSprite = new PIXI.Sprite(PIXI.loader.resources["../images/ripple.png"].texture);

    //Turn Sprite into a diplacement filter
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    //Avoids the displacement filter from appearing right away when the screen loads
    displacementSprite.visible = false;
    displacementFilter.visible = false;

    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;

    vx = displacementSprite.x;
    vy = displacementSprite.y;

    //Create a background
    background = new PIXI.Sprite(PIXI.loader.resources["../images/water.png"].texture);
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
    //Makes the ripple visible
    displacementSprite.visible = true;
    displacementFilter.visible = true;

    //Place the ripple on the pointer
    mouseX = eventData.data.global.x;
    mouseY = eventData.data.global.y;

    //Add it to the stage
    app.stage.addChild(displacementSprite);
    container.filters = [displacementFilter];
}

function onPointerDown(){
    //Resets animation
    app.stage.removeChild(displacementSprite);
    displacementSprite.x = 0;
    displacementSprite.y = 0;
    displacementSprite.scale.x = 0;
    displacementFilter.scale.x = 0;
    displacementSprite.scale.y = 0;
    displacementFilter.scale.y = 0;
}

function loop() {
    requestAnimationFrame(loop);
    vx += (mouseX - displacementSprite.x);
    vy += (mouseY - displacementSprite.y);
    displacementSprite.x = vx;
    displacementSprite.y = vy;
    
    //Ripple continually grows
    displacementSprite.scale.x += 0.25;
    displacementFilter.scale.x += 0.25;
    displacementSprite.scale.y += 0.25;
    displacementFilter.scale.y += 0.25;
}