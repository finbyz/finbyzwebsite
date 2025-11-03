interface GalleryItem {
    name: string
    route: string
    title: string
    image: string
    animated_gif: string
}

interface RelatedRead {
    route: string
    description: string
    image: string
    title: string
    reference_name: string
}

interface FinbyzGalleryProps {
    galleryItems: GalleryItem[]
    relatedReads: RelatedRead[]  
}


interface RelatedLinksData {
    name: string
    route: string
    title: string
    seo_title: string
    image: string
    animated_image?: string
    video?: string
}


interface GalleryLink {
    title: string
    gallery: string
}

interface RelatedLink {
    reference_doctype: string
    reference_name: string
    title: string
    image: string
    description: string
    route: string
}

interface Links {
    gallery_links: GalleryLink[]
    related_links: RelatedLink[]
    
}

type FAQItem = {
  question: string;
  answer: string;
  idx: number;
};

type WebpageFaqData = {
  name: string;
  route: string;
  faq?: FAQItem[];
};

