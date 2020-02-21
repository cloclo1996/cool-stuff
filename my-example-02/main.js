// //Create a Pixi Application
// let app = new PIXI.Application({width: 256, height: 256});

// //Add the canvas that Pixi automatically created for you to the HTML document
// document.body.appendChild(app.view);

const app = new PIXI.Application();
document.body.appendChild(app.view);

let count = 1;

// build a rope!
const ropeLength = 900/ 40;

const points = [];

for (let i = 0; i < 25; i++) {
    points.push(new PIXI.Point(i * ropeLength, 10));
}

const strip = new PIXI.SimpleRope(PIXI.Texture.from('images/cat.png'), points);

strip.x = -459;

const snakeContainer = new PIXI.Container();
snakeContainer.x = 400;
snakeContainer.y = 300;

snakeContainer.scale.set(500 / 1100);
app.stage.addChild(snakeContainer);

snakeContainer.addChild(strip);

app.ticker.add(() => {
    count += 0.1;

    // make the snake
    for (let i = 0; i < points.length; i++) {
        points[i].y = Math.sin((i * 0.5) + count) * 10;
        points[i].x = i * ropeLength + Math.cos((i * 1) + count) * 10;
    }
});



// SECOND SNAAAAKE

// build a rope!
const ropeLengthTwo = 900/ 40;

const pointsTwo = [];

for (let i = 0; i < 25; i++) {
    points.push(new PIXI.Point(i * ropeLength, 10));
}

const stripTwo = new PIXI.SimpleRope(PIXI.Texture.from('images/cat.png'), points);

stripTwo.x = 459;
stripTwo.y = 200;

const snakeContainerTwo = new PIXI.Container();
snakeContainer.x = 400;
snakeContainer.y = 200;

snakeContainerTwo.scale.set(500 / 1100);
app.stage.addChild(snakeContainerTwo);

snakeContainerTwo.addChild(stripTwo);


// THIRD SNAAAAAAKEEE

// build a rope!
const ropeLengthThree = 900/20;

const pointsThree = [];

for (let i = 0; i < 25; i++) {
    points.push(new PIXI.Point(i * ropeLengthThree, 10));
}

const stripThree = new PIXI.SimpleRope(PIXI.Texture.from('images/cat.png'), points);

stripThree.x = 150;
stripThree.y = 1200;

const snakeContainerThree = new PIXI.Container();
snakeContainer.x = 400;
snakeContainer.y = 300;

snakeContainerThree.scale.set(500 / 1500);
app.stage.addChild(snakeContainerThree);

snakeContainerThree.addChild(stripThree);