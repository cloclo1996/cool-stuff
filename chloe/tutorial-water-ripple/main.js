let app;
let bol = false;
let renderer = PIXI.autoDetectRenderer(600, 300, {antialias: true ,transparent: true});

function initPixi(){
    app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
    document.body.appendChild(app.view);

    let img = new PIXI.Sprite.from("../images/water.png");
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    app.stage.addChild(img);

    displacementSprite = new PIXI.Sprite.from("../images/ripple.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    /*displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;*/
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];
    app.stage.width = window.innerWidth;
    app.stage.height = window.innerHeight;
    app.renderer.view.style.transform = 'scale(1)';
    renderer.render(app.stage);  
    animate();
    }
    
  function animate() {

    displacementSprite.interactive = true;
    displacementSprite.buttonMode = true;

    displacementSprite.on('click', (event) => {
      bol = !bol;
      displacementSprite.visible = true;
      displacementSprite.anchor.set(0.5);
      displacementSprite.x = app.stage.interaction.width/2;
      displacementSprite.y = app.stage.interaction.height/2;      
      //Animate. Keeps updating displacementSprite's position.
      //If a displacement map is too small, you will see the borders of the image being repeated on screen
      requestAnimationFrame(animate);
    });

    displacementSprite.on('mouseup', () => {
      displacementSprite.scale.x += 0.5;
      displacementSprite.scale.y += 0.5;
      requestAnimationFrame(animate);
    });
}
initPixi();
requestAnimationFrame(animate);