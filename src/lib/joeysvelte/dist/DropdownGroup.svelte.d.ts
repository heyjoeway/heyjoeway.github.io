import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownGroupProps = typeof __propDef.props;
export type DropdownGroupEvents = typeof __propDef.events;
export type DropdownGroupSlots = typeof __propDef.slots;
export default class DropdownGroup extends SvelteComponent<DropdownGroupProps, DropdownGroupEvents, DropdownGroupSlots> {
}
export {};
