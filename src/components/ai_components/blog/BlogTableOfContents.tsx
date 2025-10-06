import { Card } from "@/components/ui/card";

interface TableOfContentsItem {
  id: string;
  title: string;
  isActive?: boolean;
}

interface BlogTableOfContentsProps {
  items: TableOfContentsItem[];
}

const BlogTableOfContents = ({ items }: BlogTableOfContentsProps) => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20">
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Table of Contents
          </h3>
          <nav className="space-y-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm transition-colors ${
                  item.isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-accent"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </Card>
      </div>
    </aside>
  );
};

export default BlogTableOfContents;
