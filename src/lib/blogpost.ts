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

const DOCTYPE = "NextJS Page";

interface BlogData {
  name: string;
  route: string;
  title: string;
  meta_title?: string;
  image?: string;
}

async function getBlogs(filters: any[][] = []): Promise<BlogData[]> {
  // Always include page_type filter for Blog Post
  const allFilters = [
    ["page_type", "=", "Blog Post"],
    ...filters
  ];
  const webpagePayload = `${process.env.FRAPPE_URL}/api/resource/${DOCTYPE}?filters=${encodeURIComponent(JSON.stringify(allFilters))}&fields=${encodeURIComponent(JSON.stringify(["name", "route", "title", "meta_title", "image"]))}`;

  const blogsResponse = await fetch(webpagePayload, {
    headers: {
      Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
  });

  const blogsJson = await blogsResponse.json();
  const blogsData: BlogData[] = blogsJson.data || [];

  return blogsData;
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
} = {}): Promise<BlogPost[]> {
  const filters: any[][] = [];

  if (search) {
    filters.push(["title", "like", `%${search}%`]);
  }
  if (category) {
    filters.push(["keywords", "like", `%${category}%`]);
  }
  if (start_date && end_date) {
    filters.push(["published_on", "between", [start_date, end_date]]);
  } else if (start_date) {
    filters.push(["published_on", ">=", start_date]);
  } else if (end_date) {
    filters.push(["published_on", "<=", end_date]);
  }

  const blogs = await getBlogs(filters);
  return blogs.map(blog => {
    return {
      name: blog.name,
      title: blog.title,
      description: blog.meta_title || blog.title,
      date: "",
      author: "Mukesh",
      image: blog.image,
      read_time: "5 min",
      category: "business",
      route: blog.route
    }
  })
}
