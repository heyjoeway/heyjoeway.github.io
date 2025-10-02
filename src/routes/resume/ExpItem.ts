import type { Post } from "$lib/Feed";

export default class ExpItem {
    constructor(
        public text: string,
        public citation: null | Post | string = null,
        public children: ExpItem[] = []
    ) {}
}