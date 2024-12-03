import { quartOut } from 'svelte/easing';
import { UAParser } from 'ua-parser-js';

const { browser, cpu, device } = UAParser();

function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurFall(node: HTMLElement, params?: {
	delay?: number,
	duration?: number,
	radiusStart?: number,
	radiusEnd?: number,
	rotateStart?: number,
	rotateEnd?: number
}) {
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 500,
		css: (t: number) => {
			const radiusStart = params?.radiusStart || 64;
			const radiusEnd = params?.radiusEnd || 0;
			const radius = mapRange(t, 0, 1, radiusStart, radiusEnd);
			t = quartOut(t);

			let out = `
				filter: blur(${radius}px);
				opacity: t;
			`;
			
			if (device.type !== 'mobile') {
				const rotateStart = params?.rotateStart || 15;
				const rotateEnd = params?.rotateEnd || 0;
				const rotate = mapRange(t, 0, 1, rotateStart, rotateEnd);
				out += `
					scale: ${1 + (1 - t)};
					rotate: z ${rotate}deg;
				`;
			}
			return out;
		}
	};
}

function blurSink(node: HTMLElement, params?: {
	delay?: number,
	duration?: number,
	radius?: number
}) {
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 500,
		css: (t: number) => {
			const radius = params?.radius || 64;
			let out = `
				filter: blur(${radius * (1 - t)}px);
				opacity: t;
			`;
			if (device.type !== 'mobile') out += `
				scale: ${t};
			`;
			return out;
		}
	};
}

export default { blurFall, blurSink };