import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type OverlayProps = typeof __propDef.props;
export type OverlayEvents = typeof __propDef.events;
export type OverlaySlots = typeof __propDef.slots;
export default class Overlay extends SvelteComponent<OverlayProps, OverlayEvents, OverlaySlots> {
}
export {};
