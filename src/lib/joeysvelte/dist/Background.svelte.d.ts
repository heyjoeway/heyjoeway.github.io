import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        topLeft: {};
        bottomRight: {};
    };
};
export type BackgroundProps = typeof __propDef.props;
export type BackgroundEvents = typeof __propDef.events;
export type BackgroundSlots = typeof __propDef.slots;
export default class Background extends SvelteComponent<BackgroundProps, BackgroundEvents, BackgroundSlots> {
}
export {};
