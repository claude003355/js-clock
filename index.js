
// ctx.fillRect(40, 80, 100, 100);


// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.fillStyle = 'green';
// ctx.fill();
// ctx.closePath();


// ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
// ctx.fillRect(10, 10, 100, 100);

// ctx.beginPath();
// ctx.moveTo(300,300);
// ctx.arc(200, 200, 100, 0, Math.PI / 2);

// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
// ctx.fill();

// ctx.font = "80px Times New Roman";
// ctx.fillText("Sample String", 5, 30);

// ctx.beginPath();
//     ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
//     ctx.moveTo(110,75);
//     ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
//     ctx.moveTo(65,65);
//     ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
//     ctx.moveTo(95,65);
//     ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
//     ctx.stroke()

const drawClock = ctx => {
	ctx.beginPath();
  ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  ctx.moveTo(110,75);
  ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
  ctx.moveTo(65,65);
  ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  ctx.moveTo(95,65);
  ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  ctx.stroke()
};

const main = () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	drawClock(ctx);
};

main();