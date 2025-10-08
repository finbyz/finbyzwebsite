


'use client';
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ALL_CATEGORIES = ["Technology", "Business", "General"];

interface BlogPost {
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

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm transition-colors border shadow-sm ${
        active
          ? "bg-finbyz-orange text-white border-finbyz-orange"
          : "bg-secondary/30 text-foreground/80 border-border hover:bg-secondary"
      }`}
    >
      {label}
    </button>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
   <Link href={post.route || ""} >
   
    <div className="group overflow-hidden rounded-xl bg-card hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
        <Badge variant="default" className="absolute top-3 left-3">
          {post.category}
        </Badge>
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>
        <div className="pt-2 text-xs text-muted-foreground flex items-center gap-3">
          <span>{post.date ? new Date(post.date).toLocaleDateString("en-IN") : "N/A"}</span>
          <span>•</span>
          <span>{post.read_time || "5 min read"}</span>
        </div>
      </div>
    </div>
   </Link>
  );
}

export default function BlogPostPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All Posts");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  const categories = useMemo(() => ["All Posts", ...ALL_CATEGORIES], []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        
        if (query) params.append('search', query);
        if (activeCategory !== "All Posts") params.append('category', activeCategory);
        if (startDate) params.append('start_date', startDate);
        if (endDate) params.append('end_date', endDate);

        const url = `/api/blog-posts${params.toString() ? `?${params.toString()}` : ''}`;
        console.log("Fetching URL:", url);

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }

        const result = await response.json();
        setPosts(result.data || []);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [query, activeCategory, startDate, endDate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0b1c2d] text-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,_rgba(0,140,255,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_10%,_rgba(255,140,0,0.12),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span>Insights &amp; </span>
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80">
            Discover the latest trends, insights, and best practices in business
            consulting and technology
          </p>

          {/* Search */}
          <div className="mt-10 max-w-4xl">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 px-5 pr-12 text-base outline-none focus:ring-2 focus:ring-finbyz-orange/40 placeholder:text-white/70 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8">
            <div className="w-full px-4 py-3">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                  {categories.map((c) => (
                    <CategoryPill
                      key={c}
                      label={c}
                      active={activeCategory === c}
                      onClick={() => setActiveCategory(c)}
                    />
                  ))}
                </div>

               
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Blog Grid */}
      <main className="container mx-auto px-4 py-16">
        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No blog posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.name} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
