
export async function getPageData(doctype:string,route: string): Promise<FinbyzGalleryProps> {
    const links = await getLinks(doctype, route)
    const webpages = await getWebpages(
        links.related_links
            .filter(item => item.reference_doctype === "Web Page")
            .map(item => item.reference_name)
    )
    const galleries = await getGalleries(links.gallery_links.map(gallery => gallery.gallery))
    const blogs = await getBlogs(links.related_links
        .filter(item => item.reference_doctype === "Blog Post")
        .map(item => item.reference_name))

    const galleryItems: GalleryItem[] = galleries.map(gallery => {
        return {
            name: gallery.name,
            description: gallery.title || gallery.seo_title,
            image: gallery.image,
            reference_name: gallery.name,
            title: gallery.title,
            route: gallery.route,
            animated_gif: gallery.animated_image || ''
        }
    })

    const relatedReads: RelatedRead[] = []
    for (const webpage of webpages) {
        relatedReads.push({
            description: webpage.seo_title,
            image: webpage.image,
            route: webpage.route,
            reference_name: webpage.name,
            title: webpage.title
        })
    }

    for (const blog of blogs) {
        relatedReads.push({
            description: blog.seo_title,
            image: blog.image,
            route: blog.route,
            reference_name: blog.name,
            title: blog.title
        })
    }

    return {
        galleryItems,
        relatedReads
    }
}


async function getLinks(doctype: string, route: string): Promise<Links> {
    const url = `${process.env.FRAPPE_URL}/api/resource/${doctype}?filters=${encodeURIComponent(
        JSON.stringify([["route", "=", route]])
    )}`;
    const response = await fetch(url, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
        cache: 'force-cache'
    });
    const jsonData = await response.json();
    if(!response.ok || jsonData?.data?.length == 0){
        return {
            related_links:[],
            gallery_links:[]
        }
    }
    const ID = jsonData.data?.[0]['name'] || '';

    const docUrl = `${process.env.FRAPPE_URL}/api/resource/${doctype}/${ID}`;
    const docResponse = await fetch(docUrl, {
        headers: {
            "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });
    const docJson = await docResponse.json()
    const doc = docJson['data']
    return {
        related_links: doc.related_links || [],
        gallery_links: doc.gallery_links || []
    }
}

async function getWebpages(names: string[]): Promise<RelatedLinksData[]> {
    if (names.length === 0) return [];

    const webpagePayload = `${process.env.FRAPPE_URL}/api/resource/Web Page?filters=${encodeURIComponent(JSON.stringify([
        ["name", "in", names]
    ]))}&fields=${encodeURIComponent(JSON.stringify(["name", "route", "title", "seo_title", "image", "video"]))}`;

    const webpagesResponse = await fetch(webpagePayload, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });

    const webpagesJson = await webpagesResponse.json();
    const webpagesData: RelatedLinksData[] = webpagesJson.data || [];

    return webpagesData.map(webpage => {
        return {
            name: webpage.name,
            route: webpage.route,
            title: webpage.title,
            seo_title: webpage.seo_title,
            image: webpage.image,
            video: webpage.video
        }
    })
}

async function getBlogs(names: string[]): Promise<RelatedLinksData[]> {
    if (names.length === 0) return [];

    const webpagePayload = `${process.env.FRAPPE_URL}/api/resource/Blog Post?filters=${encodeURIComponent(JSON.stringify([
        ["name", "in", names]
    ]))}&fields=${encodeURIComponent(JSON.stringify(["name", "route", "title", "seo_title", "image_seo as image"]))}`;

    const blogsResponse = await fetch(webpagePayload, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });

    const blogsJson = await blogsResponse.json();
    const blogsData: RelatedLinksData[] = blogsJson.data || [];

    return blogsData.map(blog => {
        return {
            name: blog.name,
            route: blog.route,
            title: blog.title,
            seo_title: blog.seo_title,
            image: blog.image
        }
    })
}

async function getGalleries(names: string[]): Promise<RelatedLinksData[]> {
    if (names.length === 0) return [];

    const galleryPayload = `${process.env.FRAPPE_URL}/api/resource/Gallery?filters=${encodeURIComponent(JSON.stringify([
        ["name", "in", names]
    ]))}&fields=${encodeURIComponent(JSON.stringify(["name", "route", "gallery_title as title", "seo_title", "svg_image as image", "animated_image"]))}`;

    const galleriesResponse = await fetch(galleryPayload, {
        headers: {
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        },
    });

    const galleriesJson = await galleriesResponse.json();
    const galleriesData: RelatedLinksData[] = galleriesJson.data || [];

    return galleriesData.map(gallery => {
        return {
            name: gallery.name,
            route: gallery.route,
            title: gallery.title,
            seo_title: gallery.title || gallery.seo_title,
            image: gallery.image,
            animated_image: gallery.animated_image,
        }
    })
}
