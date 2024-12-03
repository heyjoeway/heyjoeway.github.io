import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        width?: string | undefined;
        height?: string | undefined;
        onClick?: ((event: MouseEvent) => void) | string | undefined;
        onContextMenu?: ((event: MouseEvent) => void) | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ClickableProps = typeof __propDef.props;
export type ClickableEvents = typeof __propDef.events;
export type ClickableSlots = typeof __propDef.slots;
export default class Clickable extends SvelteComponent<ClickableProps, ClickableEvents, ClickableSlots> {
}
export {};
