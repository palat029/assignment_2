function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
  noLoop();
}

function draw() {
	// clear the background
	background(255, 253, 170);

	// set a fill color
	fill(255, 255, 255);

	// draw the ellipse
fill(211,162,116);
	ellipse(25, 180, 500, 500);
fill(35,31,32);
	ellipse(150, 140, 50, 50);
	var diameter = random(50, 50);
	ellipse(100, 20, diameter, diameter);
	ellipse(100, 20, diameter, diameter);
	ellipse(130, 20, diameter, diameter);
	ellipse(170, 10, diameter, diameter);
	ellipse(200, 10, diameter, diameter);
	ellipse(60, 10, diameter, diameter);
	ellipse(30, 10, diameter, diameter);
	ellipse(60, 40, diameter, diameter);
	ellipse(20, 30, diameter, diameter);
	ellipse(10, 16, diameter, diameter);

	//draw mouth
		var x = random(-40, 0);
	fill(255,255,255);
			ellipse(200 , 280, 100, 120 + x);

 //draw flying taco
		var halftaco = random(100, 100);
		var y = random(70);
	fill(232, 182, 33);
				ellipse(500 - y, 280,halftaco, halftaco);
	fill(255, 253, 170);
	 			rect(440 - y, 200, 120, 80);
	fill(3, 208, 0);
							 		ellipse(500 - y, 280, 20, 20);





}
