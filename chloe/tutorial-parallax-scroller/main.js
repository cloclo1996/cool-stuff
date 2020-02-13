function init() {
    stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(
      512,
      384,
      {view:document.getElementById("game-canvas")}
    );

    let farTexture = PIXI.Texture.fromImage("resources/bg-far.png");
    far = new PIXI.Sprite(farTexture);
    far.position.x = 0;
    far.position.y = 0;
    stage.addChild(far); //add image to stage

    let midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
    mid = new PIXI.Sprite(midTexture);
    mid.position.x = 0;
    mid.position.y = 128;
    stage.addChild(mid);

    requestAnimationFrame(update);
}

function update() {
    far.position.x -= 0.128;
    mid.position.x -= 0.64;
  
    renderer.render(stage);
  
    requestAnimationFrame(update);
  }