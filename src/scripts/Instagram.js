const ImagesCanvas = require('canvas');
const fetch = require('node-fetch');
const fs = require('fs');

const Instagram = async (username) => {
	const canvas = ImagesCanvas.createCanvas(512, 200);
	const context = canvas.getContext('2d');

	const res = await fetch(`https://www.instagram.com/${username}?__a=1`);
	const result = await res.json();

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

	const background = await ImagesCanvas.loadImage('./src/assets/template/Instagram.png');
	context.drawImage(background, 0, 0);

	/** Username
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '13px medium';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'center';
	context.fillText(result.graphql.user.username, 88, 183);

	/** Posts
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '19px bold';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'center';
	context.fillText(result.graphql.user.edge_owner_to_timeline_media.count, 202, 53);

	/** Followers
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '19px bold';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'center';
	context.fillText(result.graphql.user.edge_followed_by.count, 326, 53);

	/** Following
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '19px bold';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'center';
	context.fillText(result.graphql.user.edge_follow.count, 456, 53);

	/** Text Wrap
	 * @type {wrap} - Result text wrap
	 * @type {text} - Text to wrap
	 */
	const wrap = [];
	let text = result.graphql.user.biography.split('');
	while (text.length) wrap.push(text.splice(0, 50).join(''));
	text = '';
	wrap.map((v) => (text += v + '\n'));

	/** Biography
	 * @type {font} - Font decoration (size, family font)
	 * @type {fillStyle} - Font color (#color)
	 * @type {textAlign} - Text align (right | center | left)
	 * @type {fillText} - Fill text (text, x, y)
	 */
	context.font = '13px medium';
	context.fillStyle = '#FFFFFF';
	context.textAlign = 'left';
	context.fillText(text, 188, 100);

	/** Avatar
	 * @type {avatar} - Load avatar images (url | static)
	 * @type {beginPath} - Begin path
	 * @type {arc} - Create circle (x, y, radius, start angle, end angle, anticlockwise)
	 * @type {closePath} - Close path
	 * @type {clip} - Clip images
	 * @type {drawImage} - Draw avatar images (images, x, y, size images x, size image y)
	 */
	const avatar = await ImagesCanvas.loadImage(result.graphql.user.profile_pic_url_hd);
	context.drawImage(avatar, 13, 12, 150, 150);

	const buffer = canvas.toBuffer('image/png');
	fs.writeFileSync('./results/Instagram.png', buffer);
};

module.exports = Instagram;
