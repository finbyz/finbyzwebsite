import { Card } from "@/components/ui/card";

interface BlogHighlightProps {
  label: string;
  content: string;
}

const BlogHighlight = ({ label, content }: BlogHighlightProps) => {
  return (
    <Card className="p-6 bg-accent/5 border-accent/20 my-6">
      <p className="text-lg font-medium text-foreground mb-2">
        💡 <strong>{label}</strong>
      </p>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </Card>
  );
};

export default BlogHighlight;
