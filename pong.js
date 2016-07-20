window.onload = function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var canvasHeight = context.canvas.clientHeight;
	var canvasWidth = context.canvas.clientWidth;

	function Table(){
		context.beginPath();
		context.rect(0, 0, canvasWidth, canvasHeight);
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = "green";
		context.stroke();
	} 

	function Paddle(positionx, positiony){
		context.fillStyle="white";
		context.fillRect(positionx, positiony, 15, canvasHeight/4);
	}

	function Ball(){
		context.beginPath();
		context.arc(canvasHeight / 2, canvasWidth / 2, 8, 0, 2 * Math.PI, false)
		context.fiillStyle="white";
		context.fill();
	}
  var table = new Table();
	var cpuPaddle= new Paddle(2, canvasHeight / 2);
	var playerPaddle = new Paddle(canvasWidth - 17, canvasHeight / 2)
	var ball = new Ball();
	
}





