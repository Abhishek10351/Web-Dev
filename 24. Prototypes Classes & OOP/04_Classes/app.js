class Color {
	constructor(r, g, b, name = null) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calculateHSL();
	}
	// -for js class constructor we name it directly as "constructor" instead of "<function_name>"
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
	calculateHSL() {
		let { r, g, b } = this;
		let h, s, l;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;
		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		// Calculate lightness
		l = (cmax + cmin) / 2;
		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		// Multiply l and s by 100
		s = Math.round(s * 100);
		l = Math.round(l * 100);
		this.h = h;
		this.s = s;
		this.l = l;

	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
	}
	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
