export interface GalleryDescriptor {
    name: string;
    description: string;
    images: Record<string, any>;
    thumbs: Record<string, any>;
}