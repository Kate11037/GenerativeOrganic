function setup() {
	createCanvas(600, 600);
	background(255, 236, 101);

	for(var i = 0; i < 10; i ++) {
		fill(99, 50, 49);
		drawFace(random(0,width/2),random(0,height/2),random(25,50),random(0, 2 * PI));
	}

	for(var i = 0; i < 10; i ++) {
		fill(156, 135, 169);
		drawFace(random(width/2, width),random(0,height/2),random(25,50),random(0, 2 * PI));
	}

	for(var i = 0; i < 10; i ++) {
	    fill(255, 240, 200);
	    drawFace(random(0, width/2), random(height/2, height), random(40, 75),random(0, 2 * PI));
	  }

	for(var i = 0; i < 10; i ++) {
		fill(73, 105, 225);
		drawFace(random(width/2, width), random(height/2, height), random (40, 75), random(0, 2 * PI));
	}
}

function drawFace(x, y, w, rot) {
	push();
	translate(x, y);
	rotate(rot);
	ellipse(0, 0, w, w); //face
	line(-w/4, w/4, w/4, w/4); //mouth
	fill(255, 182, 220);
	ellipse(0, 0, -w/4, -w/4); //nose
	fill(255);
	ellipse(-w/4, -w/4, w/2, w/5); //left eye
	ellipse(w/4, -w/4, w/2, w/5); //right eye
	fill(0);
	ellipse(-w/4, -w/4, w/6, w/6); //left eyeball
	ellipse(w/4, -w/4, w/6, w/6); //right eyeball
	pop();
}

