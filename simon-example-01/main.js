const app = new PIXI.Application();
document.body.appendChild(app.view);

//Setting background image width and height
const bg = PIXI.Sprite.from('../examples-gh/examples/assets/pixi-filters/bg_depth_blur.jpg');
bg.width = app.screen.width;
bg.height = app.screen.height;
app.stage.addChild(bg);

//Monsters in the background and placing of them
const littleDudes = PIXI.Sprite.from('../examples-gh/examples/assets/pixi-filters/depth_blur_dudes.jpg');
littleDudes.x = (app.screen.width / 2) - 315;
littleDudes.y = 200;
app.stage.addChild(littleDudes);

//Robot in the front and placing
const littleRobot = PIXI.Sprite.from('../examples-gh/examples/assets/pixi-filters/depth_blur_moby.jpg');
littleRobot.x = (app.screen.width / 2) - 200;
littleRobot.y = 100;
app.stage.addChild(littleRobot);

//creating blur filter
const blurFilter1 = new PIXI.filters.BlurFilter();
const blurFilter2 = new PIXI.filters.BlurFilter();

//adding filters 
littleDudes.filters = [blurFilter1];
littleRobot.filters = [blurFilter2];

//Variable 
let count = 0;

//setting timer
app.ticker.add(() => {
    count += 0.005;

    const blurAmount = Math.cos(count);
    const blurAmount2 = Math.sin(count);

    blurFilter1.blur = 20 * (blurAmount);
    blurFilter2.blur = 20 * (blurAmount2);
});
