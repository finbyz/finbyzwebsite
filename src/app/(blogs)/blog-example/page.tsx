'use client'

import BlogHero from "@/components/ai_components/blog/BlogHero";
import BlogContent from "@/components/ai_components/blog/BlogContent";
import BlogTableOfContents from "@/components/ai_components/blog/BlogTableOfContents";

const Index = () => {
  const tocItems = [
    { id: "introduction", title: "Introduction", isActive: true },
    { id: "benefits", title: "Key Benefits" },
    { id: "cost-efficiency", title: "Cost Efficiency" },
    { id: "flexibility", title: "Enhanced Flexibility" },
    { id: "scalability", title: "Scalability" },
    { id: "conclusion", title: "Conclusion" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHero
        title="Blog Example"
        description="Sample blog page rendering with hero, TOC and content."
        primaryCategory="Blog"
        author={{ name: 'FinByz', title: 'Author' }}
        publishDate="2025-10-07"
        readTime="4 min read"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 mx-auto w-full bg-muted/30 border-b max-w-screen-xl">
        <BlogTableOfContents items={tocItems} />
        <BlogContent>
          <section id="introduction" className="space-y-4">
            <h2>Introduction</h2>
            <p>This is a working example using existing blog components.</p>
          </section>

          <section id="benefits" className="space-y-4">
            <h2>Key Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Reusable hero and TOC components</li>
              <li>Simple content slots</li>
            </ul>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2>Conclusion</h2>
            <p>Replace sections with your real content.</p>
          </section>
        </BlogContent>
      </div>
    </div>
  );
};

export default Index;
