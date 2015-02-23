/*
 *
 * utils.js
 *
 * Copyright (C) 2015 frnmst (Franco Masotti) <franco.masotti@live.com>.
 *
 * This file is part of threejs-waterfall.
 *
 * threejs-waterfall is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * threejs-waterfall is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with threejs-waterfall.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


/* Function used to handle window resize.  */
function onWindowResize ()
{

        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;

        renderer.setSize (canvasWidth, canvasHeight);

        camera.aspect = canvasWidth/ canvasHeight;
        camera.updateProjectionMatrix ();

}

/* Function that applies a texture specified by "location" to meshes, using
   "wrappingX" and "wrappingY" parameters.  */
function applyTex (location, wrappingX, wrappingY)
{

        var texName;


        texName = THREE.ImageUtils.loadTexture (location);
        texName.wrapS = texName.wrapT = THREE.RepeatWrapping;
        texName.repeat.set (wrappingX, wrappingY);

        return texName;

}
