import { Card } from "@/components/ui/card";

interface BlogCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const BlogCTA = ({ title, description, buttonText, onButtonClick }: BlogCTAProps) => {
  return (
    <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 my-6">
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <button
        onClick={onButtonClick}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        {buttonText}
      </button>
    </Card>
  );
};

export default BlogCTA;
