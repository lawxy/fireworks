let context = canvas.getContext('2d')

export default function clearCanvas(){
	// context.fillStyle = '#000000';
	// context.globalCompositeOperation = 'lighter';

	// context.globalCompositeOperation = 'destination-out';
	context.fillStyle = 'rgba(0,0,0,0.05)';
	// context.fillStyle = 'rgba(0,0,0,0.1)';
	context.fillRect(0,0,canvas.width,canvas.height);
	// context.fillRect(0,0,canvas.width,canvas.height);

	// context.globalCompositeOperation = 'destination-out';
	// context.fillStyle = 'rgba(0,0,0,'+10/100+')';
	// context.fillRect(0,0,canvas.width,canvas.height);
	// context.globalCompositeOperation = 'lighter';
	// context.fillRect(0,0,canvas.width,canvas.height);

}