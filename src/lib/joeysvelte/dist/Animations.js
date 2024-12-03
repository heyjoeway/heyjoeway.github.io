import { quartOut } from 'svelte/easing';
import { UAParser } from 'ua-parser-js';
const { browser, cpu, device } = UAParser();
function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function blurFall(node, params) {
    return {
        delay: params?.delay || 0,
        duration: params?.duration || 500,
        css: (t) => {
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
function blurSink(node, params) {
    return {
        delay: params?.delay || 0,
        duration: params?.duration || 500,
        css: (t) => {
            const radius = params?.radius || 64;
            let out = `
				filter: blur(${radius * (1 - t)}px);
				opacity: t;
			`;
            if (device.type !== 'mobile')
                out += `
				scale: ${t};
			`;
            return out;
        }
    };
}
export default { blurFall, blurSink };
