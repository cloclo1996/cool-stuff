//Setting up the background
const app = new PIXI.Application({
    width: 720, height: 410, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});

//Displaying the background
document.body.appendChild(app.view);

//Creating the container in which the bunnies will show
const container = new PIXI.Container();

//Appending the container to the stage
app.stage.addChild(container);

//Creating a new texture, the bunny
const texture = PIXI.Texture.from('examples/assets/bunny.png');

//Creating a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite (texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    //Adding the bunnies to the container
    container.addChild(bunny);
}

//Moving the container to the center instead of having it up in the upper left corner
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

//Centering the bunny picture in the local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

//Listening for animate update
app.ticker.add((delta) => {
    //To rotate the container I use delta to create frame-independent transform
    container.rotation -= 0.01 * delta
})