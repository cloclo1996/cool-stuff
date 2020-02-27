# General README

Explaination of the project:
    The purpose of this project was to explore an API library. What can be done with it and what can we as interaction designers use it for. At the end we were to present this to the class and talk about our findings.

What does this project do?
    This project has been about exploring PixiJS and more specifically how to use movement and velocity with PixiJS. We wanted to see how we could use movement and velocity as a prototyping tool. We came up with these examples, which can be tested in various ways to see how movement and velocity would change the parameters of an artifact.

Why is this project useful?
    When extending these examples we were thinking of testing these in a “loading screen” environment, or when a request is pending. This is to see how the users behaviour towards a loading screen might or might not change with interactive movement on the screen. Hence, this project is useful for prototyping purposes.

## How to get going
1. You need a webserver in your root project to to use PIXI. The best way is to run Node and Github.

2. Create a folder for your project and launch a webserver in the project's root directory.

3. Install Pixi by opening up the Terminal and write 'npm install pixi.js'.

4. There is no default export, the correct way to import PixiJS is:
    import * as PIXI from 'pixi.js'.

5. Find the file named 'pixi.min.js' in this respository (https://github.com/pixijs/pixi.js/releases/tag/v4.5.5) and save it to your workspace.

6. Create a basic HTML page and put something like this in the head: 
    <script src="pixi.min.js"></script>

If pixi is linked correctly something similar to this will be shown in the console of the browser:

    PixiJS 4.4.5 - * canvas * http://www.pixijs.com/  ♥♥♥ 

    

Credits to Mat Groves, Christopher Calleb, TK (from Red Stapler) and the PixiJS team. https://www.pixijs.com