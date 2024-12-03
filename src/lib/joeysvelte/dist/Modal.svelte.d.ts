import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        body: {};
        footer: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponent<ModalProps, ModalEvents, ModalSlots> {
}
export {};
