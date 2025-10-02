import type { Post } from "$lib/Feed";

export default class Skill {
    constructor(
        public text: string,
        public citation: null | Post | string = null,
    ) {}
}