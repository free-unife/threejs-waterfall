threejs-waterfall
=================

Waterfall simulator using `THREE.js` and `TWEEN.js` (animation only) libraries.

###WHATIS
This is a waterfall simulator which uses a particle system to simulate the 
falling water using physical laws.

- Environment:
  The environment consists in a textured skybox with six photos.
  The biggest object is a grey `box geometry` with another textured `box 
  geometry` on top of it whick represents a river. Threre are also some 
  trees (which have been created with `sprites`).
  The lake is a blue `PlaneGeometry` with a water texture applied on it.
  Fog is also present.

- Lights:
  The only light in the simulator is a `DirectionalLight` which simulates
  the sun. This light hits the main box which reflects some light because 
  it's a `PhongMaterial`.

- Particle systems:
  There are two particle systems:
  The first one represents the falling water from the waterfall, the 
  second imitates the interaction between the falling water and the lake.
  The first system uses the equations of the projectile motion (even if 
  the initial water speed is low). The motion of these particles is 
  uniformly accelerated because of `gAccel`.
  The other system uses a pseudo-random motion with position values of 
  each particle inside defined ranges.
  In both systems texture, colour and alpha channel (= 0 so that only the 
  significant parts of the particle are displayed, i.e. leaving out the 
  black parts) have been applied.

- Animation:
  There is a cylinder in front of the waterfall which represents a tree 
  trunk. This mesh is translated and rotated with an animation, in a 
  similar way like the water does. This has been possible using
  `TWEEN.js` library.

- Primitive geometries:
  There are two grey rectangles in the upper part of the waterfall where 
  the water particles come out. These are drawn by defining the twelve 
  points of the four triangles.

- Camera:
  The user is able to move in the environment using the mouse thanks to 
  `OrbitAndPanControls.new.js` library.


###HOWTO
Download: `$ git clone https://github.com/frnmst/threejs-waterfall.git`.

You need:
1. A modern standard compilant html5 and webgl browser (for example GNU 
   Icecat (i.e. Firefox) or Chromium (i.e. Google Chrome) or others like dwb)
2. A modern and "powerful" (maybe multicore) processor (Tests on an Intel
   Atom N270 netbook failed miserably).
3. A working GPU with its driver is required (if you have an Nvidia GPU, 
   nouveau drivers work just fine).
4. Finally you need to enable webgl on your browser.

To run you just need to open `main.html` with your browser.
