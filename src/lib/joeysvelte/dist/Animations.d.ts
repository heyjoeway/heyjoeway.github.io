declare function blurFall(node: HTMLElement, params?: {
    delay?: number;
    duration?: number;
    radiusStart?: number;
    radiusEnd?: number;
    rotateStart?: number;
    rotateEnd?: number;
}): {
    delay: number;
    duration: number;
    css: (t: number) => string;
};
declare function blurSink(node: HTMLElement, params?: {
    delay?: number;
    duration?: number;
    radius?: number;
}): {
    delay: number;
    duration: number;
    css: (t: number) => string;
};
declare const _default: {
    blurFall: typeof blurFall;
    blurSink: typeof blurSink;
};
export default _default;
