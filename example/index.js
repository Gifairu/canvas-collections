const { Card, Instagram, Quotes } = require('../src/index.js');

/** Card Example
 * @type {name}
 * @type {position}
 * @type {facebook}
 * @type {instagram}
 * @type {discord}
 * @type {avatar}
 */
Card(
	'Gifairu Xist',
	'Front-End Developer',
	'Gifairu (Xist)',
	'Gifairu',
	'Gifairu#0001',
	'https://github.com/Gifairu.png?size=460'
);

/** Instagram Example
 * @type {username}
 */
Instagram('discord');

/** Quotes Example
 * @type {quotes}
 * @type {author}
 * @type {images}
 */
Quotes(
	`“I'm lonely. And I'm lonely in some horribly deep way and for a flash of an instant, I can see just how lonely, and how deep this feeling runs. And it scares the shit out of me to be this lonely because it seems catastrophic.”`,
	'Gifairu Xist.',
	'https://cdn.wallpapersafari.com/87/18/iftcpq.jpg'
);
