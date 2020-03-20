# Displacement Mapping #
This is an experiment with Displacement Mapping -  Realistic Water Ripple Effect JavaScript Tutorial done by Chloé Mosselmans Ismaily
Realistic Water Ripple Effect JavaScript Tutorial: https://www.youtube.com/watch?v=O0Au0Xc-qL8


## Reflection on extended tutorial ##
The original tutorial was not interactive at all. I added a new displacement map myself with Illustrator: it is quite simple to customise this kind of animation. Furthermore, I have added a few pointer events to the page and placed the ripple on the mouse. I believe that this library is not very effective when it comes to positioning the animation on the mouse coordinates, as it took me various extra steps -- compared to working with canvas -- just to achieve that result. I have also added a Container object to group all display objects. My objective was to test combining events, displacement mapping and animation with Pixi.js.

However, this API creates very fluid animations thanks to its renderer WebGL. I believe that this kind of animation could be used to offer feedback to the user when, for example, a button was successfully pressed or even to let them know that an action could be done where the animation is happening.
