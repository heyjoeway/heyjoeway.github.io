import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onClick?: ((event: MouseEvent) => void) | string | undefined;
        iconSrc?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ContextMenuItemProps = typeof __propDef.props;
export type ContextMenuItemEvents = typeof __propDef.events;
export type ContextMenuItemSlots = typeof __propDef.slots;
export default class ContextMenuItem extends SvelteComponent<ContextMenuItemProps, ContextMenuItemEvents, ContextMenuItemSlots> {
}
export {};
