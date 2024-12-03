import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value?: string | undefined;
        onChange: (event: Event) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
export default class Dropdown extends SvelteComponent<DropdownProps, DropdownEvents, DropdownSlots> {
}
export {};
