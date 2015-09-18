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

	// draw the ellipse face
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

	// draw ear
  fill(184,150,116);
	ellipse(20, 180, 20,30);


	//draw mouth
		var x = random(-40, 0);
	fill(255,255,255);
			ellipse(200 , 280, 100, 120 + x);

 //draw flying taco
		var y = random(100);
		var Lettuce = random(20,20);
	fill(3, 208, 0);
		 ellipse(500 - y, 280, Lettuce, Lettuce);
		 ellipse(480 - y, 280, Lettuce, Lettuce);
		 ellipse(520 - y, 280, Lettuce, Lettuce);
	fill(232, 182, 33);
				arc(500 - y, 280, 80, 80, 0, PI);
	fill(54,33,0);
			var tortillatext;
	 		tortillatext= random(1, 3);
			ellipse(500 - y,290, tortillatext, tortillatext);
			ellipse(480 - y,300, tortillatext, tortillatext);
			ellipse(510 - y,310, tortillatext, tortillatext);
			ellipse(530 - y,295, tortillatext, tortillatext);

		// draw eye
var Peye = random(0);
			if (Peye < 0.1) {
				fill(211, 162, 116);
				ellipse(random(200, 140), random(200, 140), 50 ,50);
			}






}
