//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {
		r: r,
		g: g,
		b: b,
	}
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function () {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function () {
		const { r, g, b } = this; // - destructuring
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}
const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"
const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

const firsth1 = document.querySelector('h1');
firsth1.style.color = firstColor.rgb();

const secondh1 = document.querySelectorAll('h1')[1];
secondh1.style.color = makeColor(20, 215, 102).hex();