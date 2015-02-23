/*
 *
 * treeTrunkTween.js
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


/* This variable is declared here (and not in main.js) to avoid problems 
   inside initTween function.  */
var treeTrunk;

/* Function that animates the tree trunk using TWEEN.js library.  */
function initTween ()
{

	/* Initial position.  */
	var source =
	{
		x: treeTrunkStruct.posX,
		y: treeTrunkStruct.posY,
		z: treeTrunkStruct.posZ
	};

	/* Final position.  */
	var target =
	{
		x: treeTrunkStruct.posZ,
		y: treeTrunkStruct.posY-10,
		z: treeTrunkStruct.posZ
	};


	TWEEN.removeAll();

	var tween1 = new TWEEN.Tween (source)
		.to (target, 1200) /* Animation lasts 1200 ms.  */
		.repeat (Infinity) /* Animation never stops.  */
		.yoyo (true) /* Yoyo effect.  */
		/* Animation interpolating function.  */
		.easing (TWEEN.Easing.Elastic.InOut)
		.onUpdate (function () /* Tween update function.  */
		{
			/* Reassign old position at the end of each loop.  */
			treeTrunk.position.y = source.y;
			/* Give a rotation effect to the trunk.  */
			treeTrunk.rotation.x += 0.1;
		})

	tween1.start (); /* Animation loop.  */

}

