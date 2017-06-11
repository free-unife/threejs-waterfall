threejs-waterfall
=================

Waterfall simulator using `THREE.js` and `TWEEN.js` (animation only) libraries.
This project is part of "Grafica Computerizzata" course in UNIFE (University 
of Ferrara), year 2014-2015.

## What is this project about

This is a waterfall simulator which uses a particle system to simulate the 
falling water using physical laws.

![threejs-waterfall.png](https://raw.githubusercontent.com/frnmst/threejs-waterfall/master/pictures/threejs-waterfall.png)

### Demo

[here](http://free-unife.github.io/threejs-waterfall/)

### Elements

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

## How to use the source code

Download: `$ git clone https://github.com/frnmst/threejs-waterfall.git`.

You need:

0. A modern standard compilant html5 and webgl browser (for example GNU 
   Icecat (i.e. Firefox) or Chromium (i.e. Google Chrome) or others like dwb).
1. A modern and "powerful" (maybe multicore) processor (Tests on an Intel
   Atom N270 netbook failed miserably).
2. A working GPU with its driver is required (if you have an Nvidia GPU, 
   nouveau drivers work just fine).
3. Finally you need to enable webgl on your browser.

To run you just need to open `main.html` with your browser.

## License

![https://www.gnu.org/graphics/gplv3-127x51.png](https://www.gnu.org/graphics/gplv3-127x51.png)

Copyright (C) 2015, 2016 frnmst (Franco Masotti) <franco.masotti@live.com>
<franco.masotti@student.unife.it>

threejs-waterfall is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

