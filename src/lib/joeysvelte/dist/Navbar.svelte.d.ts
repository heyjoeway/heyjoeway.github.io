/** @typedef {typeof __propDef.props}  NavbarProps */
/** @typedef {typeof __propDef.events}  NavbarEvents */
/** @typedef {typeof __propDef.slots}  NavbarSlots */
export default class Navbar extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    left: {};
    center: {};
    right: {};
}> {
}
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        center: {};
        right: {};
    };
};
export {};
