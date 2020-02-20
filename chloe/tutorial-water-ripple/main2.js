let app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
app.stage.interactive = true;
let posX, posY, displacementSprite, displacementFilter, bg, vx, vy;
let container = new PIXI.Container();
let ripples = [];
app.stage.addChild(container);
PIXI.loader.add("../images/ripple.png").add("../images/water.png").load(setup);

function setup() {
    posX = app.renderer.width / 2;
    posY = app.renderer.height / 2;
    displacementSprite = new PIXI.Sprite(PIXI.loader.resources["../images/ripple.png"].texture);
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.visible = false;
    displacementFilter.visible = false;
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;
    vx = displacementSprite.x;
    vy = displacementSprite.y;
    app.stage.addChild(displacementSprite);
    container.filters = [displacementFilter];
    bg = new PIXI.Sprite(PIXI.loader.resources["../images/water.png"].texture);
    bg.width = app.renderer.width;
    bg.height = app.renderer.height;
    container.addChild(bg);
    app.stage.on('mouseup', onPointerUp) .on('mousedown', onPointerDown);
    loop();
}

function onPointerUp(eventData) {
    displacementSprite.visible = true;
    displacementFilter.visible = true;
    posX = eventData.data.global.x;
    posY = eventData.data.global.y;
}

function onPointerDown(){
    displacementSprite.visible = false;
        displacementFilter.visible = false;
        displacementSprite.x = 0;
        displacementSprite.y = 0;
        displacementSprite.scale.x = 0;
        displacementFilter.scale.x = 0;
        displacementSprite.scale.y = 0;
        displacementFilter.scale.y = 0;
}

function loop() {
    requestAnimationFrame(loop);
    vx += (posX - displacementSprite.x);
    vy += (posY - displacementSprite.y);
    displacementSprite.x = vx;
    displacementSprite.y = vy;
    displacementSprite.scale.x += 0.25;
    displacementFilter.scale.x += 0.25;
    displacementSprite.scale.y += 0.25;
    displacementFilter.scale.y += 0.25;
}