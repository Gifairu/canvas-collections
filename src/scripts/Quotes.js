const ImagesCanvas = require('canvas');
const fs = require('fs');

const Quotes = async (quotes, author, images) => {
	const canvas = ImagesCanvas.createCanvas(1000, 1000);
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

	const image = await ImagesCanvas.loadImage(images);
	context.drawImage(image, 0, 0);

	const background = await ImagesCanvas.loadImage('./src/assets/template/Quotes.png');
	context.drawImage(background, 0, 0);

	/** Text Wrap
	 * @type {wrap} - Result text wrap
	 * @type {text} - Text to wrap
	 */
	const wrap = [];
	let text = quotes.split(' ');
	while (text.length) wrap.push(text.splice(0, 5).join(' '));
	text = '';
	wrap.map((v) => (text += v + '\n'));

	/** Quotes
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '45px medium';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'center';
	context.fillText(text, canvas.width / 2, 240);

	/** Author
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '30px bold';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'center';
	context.fillText(`- ${author} -`, canvas.width / 2, 150);

	const buffer = canvas.toBuffer('image/png');
	fs.writeFileSync('./results/Quotes.png', buffer);
};

module.exports = Quotes;
