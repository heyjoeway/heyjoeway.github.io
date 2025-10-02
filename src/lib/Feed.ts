export interface PostedAndEditedDate {
    posted: string | undefined;
    edited: string | undefined;
}

export interface Embed {
    platform: "youtube" | "self";
    originalUrl: string;
}

export interface EmbedYoutube extends Embed {
    platform: "youtube";
    id: string;
}

export interface EmbedSelf extends Embed {
    platform: "self";
    post: Post;
}

export interface Media {
    id: string;
    extension: string;
    url: string;
    date: string;
    lastModifiedDate: string;
    urlGitHub: string;
    exif?: ExifReader.Tags;
}

export interface Post {
    id: string;
    html: string;
    htmlShort: string;
    media: Media[];
    embeds: Embed[];
    fm: Record<string, any>;
    idFull: string;
    url: string;
    feed: Feed;
    raw: string;
}

export interface Feed {
    id: string;
    meta: Record<string, any>;
    url: string;
    rss: string;
    urlShort: string;
    posts?: Post[]
}

export async function getFeedPostEmbedsYoutube(postContents: string) {
    const regexYoutube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?\S*(?:\s|$)/g;
    const matches = postContents.matchAll(regexYoutube).toArray();
    
    // Remove all embeds from the contents
    let filteredPostContents = postContents;
    const embeds = matches.map(match => {
        const embed = {
            platform: "youtube",
            id: match[1],
            originalUrl: match[0]
        } as EmbedYoutube;
        filteredPostContents = filteredPostContents.replaceAll(
            embed.originalUrl,
            ""
        );
        return embed as Embed;
    });
    
    filteredPostContents = filteredPostContents.trim();
    
    return {
        filteredPostContents,
        embeds
    };
}

export function sortPosts(posts: Post[]) {
    // First sort by date
    posts.sort((a: Post, b: Post) => {
        const dateA = new Date(a.fm.date || 0).getTime();
        const dateB = new Date(b.fm.date || 0).getTime();
        return dateB - dateA;
    });
    // Then sort by whether they're pinned
    posts.sort((a: Post, b: Post) => {
        const pinnedA = a.fm.pinned || false;
        const pinnedB = b.fm.pinned || false;
        return pinnedB - pinnedA;
    });
}