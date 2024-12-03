import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        theme?: import("./Theming.js").Theme | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FrameProps = typeof __propDef.props;
export type FrameEvents = typeof __propDef.events;
export type FrameSlots = typeof __propDef.slots;
export default class Frame extends SvelteComponent<FrameProps, FrameEvents, FrameSlots> {
}
export {};
