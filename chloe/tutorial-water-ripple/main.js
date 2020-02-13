let app;

function initPixi(){
    app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
    document.body.appendChild(app.view);

    let img = new PIXI.Sprite.from("../images/water.png");
    img.width = window.innerWidth;
      img.height = window.innerHeight;
      app.stage.addChild(img);

    displacementSprite = new PIXI.Sprite.from("../images/smoke.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];
    app.renderer.view.style.transform = 'scale(1.02)';
    displacementSprite.scale.x = 6;
    displacementSprite.scale.y = 6;
    animate();
    }
    function animate() {
      displacementSprite.x += 15;
      displacementSprite.y += 6;

      //Animate. Keeps updating displacementSprite's position.
      //If a displacement map is too small, you will see the borders of the image being repeated on screen
      requestAnimationFrame(animate);
    }
    initPixi();