import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value?: string | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        autofocus?: boolean | undefined;
        onInput?: ((event: Event) => void) | undefined;
        onKeydown?: ((event: KeyboardEvent) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextfieldProps = typeof __propDef.props;
export type TextfieldEvents = typeof __propDef.events;
export type TextfieldSlots = typeof __propDef.slots;
export default class Textfield extends SvelteComponent<TextfieldProps, TextfieldEvents, TextfieldSlots> {
}
export {};
