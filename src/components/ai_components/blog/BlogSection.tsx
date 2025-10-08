import { Separator } from "@/components/ui/separator";

interface BlogSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const BlogSection = ({ id, title, children }: BlogSectionProps) => {
  return (
    <>
      <section id={id} className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        {children}
      </section>
      <Separator className="my-2" />
    </>
  );
};

export default BlogSection;
