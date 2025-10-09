export interface BlogPost {
  name: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  read_time?: string;
  category?: string;
  route?: string;
}


async function getBlogs(filters: any[][] = []): Promise<RelatedLinksData[]> {
  const webpagePayload = `${process.env.FRAPPE_URL}/api/resource/Blog Post?filters=${encodeURIComponent(JSON.stringify(filters))}&fields=${encodeURIComponent(JSON.stringify(["name", "route", "title", "seo_title", "image_seo as image"]))}`;

  const blogsResponse = await fetch(webpagePayload, {
    headers: {
      Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
  });

  const blogsJson = await blogsResponse.json();
  const blogsData: RelatedLinksData[] = blogsJson.data || [];
  // console.log("blogsData------------",blogsData)

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

export async function getBlogPosts({
  search = "",
  category = "",
  start_date = "",
  end_date = ""
}: {
  search?: string;
  category?: string;
  start_date?: string;
  end_date?: string;
}): Promise<BlogPost[]> {
  const params = new URLSearchParams();

  // if (search) params.append("search", search);
  // if (category) params.append("category", category);
  // if (start_date && end_date) {
  //   params.append("start_date", start_date);
  //   params.append("end_date", end_date);
  // }

  // const url = `https://website.finbyz.com/api/method/finbyz.api.get_blog_posts?${params.toString()}`;

  // const res = await fetch(url, {
  //   headers: {
  //     "Authorization": `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
  //   },
  //   cache: "no-store",
  // });
  const blogs = await getBlogs()
  // console.log(blogs)
  return blogs.map(blog => {
    return {
      "name": blog.name,
      "title": blog.title,
      "description": blog.seo_title,
      "date": "",
      "author": "Mukesh",
      "image": blog.image,
      "read_time": "5 min",
      "category": "business",
      "route": blog.route
    }
  })
}
