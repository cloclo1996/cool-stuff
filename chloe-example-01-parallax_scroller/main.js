function setup() {
    stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(
      512,
      384,
      {view:document.getElementById("game-canvas")}
    );

    let farTexture = PIXI.Texture.fromImage("resources/bg-far.png");
    far = new PIXI.extras.TilingSprite(farTexture, 1024, 512);
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    far.position.x = 0;
    far.position.y = 0;
    stage.addChild(far); //add image to stage

    let midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
    mid = new PIXI.extras.TilingSprite(midTexture, 1024, 512);
    mid.position.x = 0;
    mid.position.y = 128;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    stage.addChild(mid);

    requestAnimationFrame(update);
}

function update() {
    far.tilePosition.x -= 0.128;
    mid.tilePosition.x -= 0.64;
  
    renderer.render(stage);
  
    requestAnimationFrame(update);
  }