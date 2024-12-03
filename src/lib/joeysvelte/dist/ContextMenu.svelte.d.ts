import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
        x: any;
        y: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ContextMenuProps = typeof __propDef.props;
export type ContextMenuEvents = typeof __propDef.events;
export type ContextMenuSlots = typeof __propDef.slots;
export default class ContextMenu extends SvelteComponent<ContextMenuProps, ContextMenuEvents, ContextMenuSlots> {
}
export {};
