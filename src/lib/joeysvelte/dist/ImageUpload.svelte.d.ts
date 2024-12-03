import { SvelteComponent } from "svelte";
import type { ImageUploadFile } from "./ImageUpload.ts";
declare const __propDef: {
    props: {
        value: ImageUploadFile;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImageUploadProps = typeof __propDef.props;
export type ImageUploadEvents = typeof __propDef.events;
export type ImageUploadSlots = typeof __propDef.slots;
export default class ImageUpload extends SvelteComponent<ImageUploadProps, ImageUploadEvents, ImageUploadSlots> {
}
export {};
