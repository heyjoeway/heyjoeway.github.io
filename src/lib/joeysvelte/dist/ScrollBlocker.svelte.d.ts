import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScrollBlockerProps = typeof __propDef.props;
export type ScrollBlockerEvents = typeof __propDef.events;
export type ScrollBlockerSlots = typeof __propDef.slots;
export default class ScrollBlocker extends SvelteComponent<ScrollBlockerProps, ScrollBlockerEvents, ScrollBlockerSlots> {
}
export {};
