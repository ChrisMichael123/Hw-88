var canvas= new fabric.Canvas("mine");

//Set initial positions for ball and hole images.


ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;



function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object=Img;
		hole_object.scaleToWidth(150);
		hole_object.scaleToHeight(140);
		hole_object.set({
			top:holey,
			left: holex
		});
		canvas.add(player_object);
	
		});
	}
function new_image()
{
	fabric.Image.fromURL(ball.png, function(Img){
		ball_object=Img;
		ball_object.scaleToWidth(block_image_width);
		ball_object.scaleToHeight(block_image_height);
		ball_object.set({
			top:bally,
			left: ballx
		});
		canvas.add(block_image_object);
	
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally>=0){
			bally=bally-ball_image_height;
			canvas.romove(player_object);
			player_update();
	}

	function down()
	{
		if(bally>=500){
			bally=bally-ball_image_height;
			canvas.romove(player_object);
			player_update();
	}

	}

	function left()
	{
		
		{
			f(bally>=500){
				bally=ballx-ball_image_height;
				canvas.romove(player_object);
				player_update();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			f(ballx>=500){
				bally=bally-ball_image_height;
				canvas.romove(player_object);
				player_update();
		}
	}
	
}

