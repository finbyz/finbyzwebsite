
interface GallerySidebarItem {
    gallery: string;
    title: string;
    route: string;
    svg_image: string;
}

interface Gallery {
    name: string;
    title: string;
    seo_title: string;
    small_description: string;
    gallery_title: string;
    keywords: string;
    gallery_category: string;
    gallery_sub_category: string;
    route: string;
    description: string;
    youtube_link: string;
    video_duration?: string;
    svg_image: string;
    animated_image?: string;
    quote?: string;
    modified?: string;
    creation?: string;
    gallery_sidebar?: GallerySidebarItem[];
}

interface Galleries {
    parent: Gallery,
    gallery_sidebar?: Gallery[]
}