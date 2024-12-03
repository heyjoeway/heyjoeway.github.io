import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onClick?: ((event: MouseEvent) => void) | string | undefined;
        iconSrc?: string | undefined;
        color?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
