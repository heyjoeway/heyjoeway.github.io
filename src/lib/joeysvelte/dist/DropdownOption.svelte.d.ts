import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownOptionProps = typeof __propDef.props;
export type DropdownOptionEvents = typeof __propDef.events;
export type DropdownOptionSlots = typeof __propDef.slots;
export default class DropdownOption extends SvelteComponent<DropdownOptionProps, DropdownOptionEvents, DropdownOptionSlots> {
}
export {};
