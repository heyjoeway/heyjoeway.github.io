import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Array<string>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextfieldListProps = typeof __propDef.props;
export type TextfieldListEvents = typeof __propDef.events;
export type TextfieldListSlots = typeof __propDef.slots;
export default class TextfieldList extends SvelteComponent<TextfieldListProps, TextfieldListEvents, TextfieldListSlots> {
}
export {};
