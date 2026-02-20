interface RelatedRead {
    route: string
    description: string
    image: string
    title: string
    reference_name: string
}

interface FinbyzGalleryProps {
    relatedReads: RelatedRead[]
}


interface RelatedLinksData {
    name: string
    route: string
    title: string
    seo_title: string
    image: string
    image_seo?: string
    blog_intro_image?: string
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

type FAQ = {
  id: number;
  name: string;
  question: string;
  answer: string;
};

type FAQGroup = {
  name: string;
  faqs: FAQ[];
};
