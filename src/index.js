const ImagesCanvas = require('canvas');
const fs = require('fs');

(async () => {
	const canvas = ImagesCanvas.createCanvas(512, 512);
	const context = canvas.getContext('2d');

	/** Register Font
	 * @type {bold} - Family font bold
	 * @type {medium} - Family font medium
	 */
	await ImagesCanvas.registerFont('./src/assets/fonts/Quicksand-Bold.ttf', {
		family: 'bold'
	});
	await ImagesCanvas.registerFont('./src/assets/fonts/Quicksand-Medium.ttf', {
		family: 'medium'
	});

	const background = await ImagesCanvas.loadImage('./src/assets/template/Card.png');
	context.drawImage(background, 0, 0);

	/** Full Name
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '40px bold';
	context.fillStyle = '#00C1CA';
	context.textAlign = 'center';
	context.fillText('Gifairu Xist.', canvas.width / 2, 240);

	/** Position
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '25px medium';
	context.fillStyle = '#C5C5DA';
	context.textAlign = 'center';
	context.fillText('Front-End Developer', canvas.width / 2, 270);

	/** Facebook
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '19px medium';
	context.fillStyle = '#C5C5DA';
	context.textAlign = 'left';
	context.fillText('Gifairu (Xist)', 75, 331);

	/** Instagram
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '19px medium';
	context.fillStyle = '#C5C5DA';
	context.textAlign = 'left';
	context.fillText('Gifairu', 75, 407);

	/** Discord
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '19px medium';
	context.fillStyle = '#C5C5DA';
	context.textAlign = 'left';
	context.fillText('Gifairu#0000', 75, 485);

	/** Image
	 * @type {avatar} - Load avatar images (url | static)
	 * @type {beginPath} - Begin path
	 * @type {arc} - Create circle (x, y, radius, start angle, end angle, anticlockwise)
	 * @type {closePath} - Close path
	 * @type {clip} - Clip images
	 * @type {drawImage} - Draw avatar images (images, x, y, size images x, size image y)
	 */
	const avatar = await ImagesCanvas.loadImage('https://github.com/Gifairu.png?size=460');
	context.beginPath();
	context.arc(canvas.width / 2, 110, 90, 0, 2 * Math.PI);
	context.closePath();
	context.clip();
	context.drawImage(avatar, 156, 10, 200, 200);

	const buffer = canvas.toBuffer('image/png');
	fs.writeFileSync('./results/Card.png', buffer);
})();
