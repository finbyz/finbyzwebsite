interface BlogParagraphProps {
  children: React.ReactNode;
}

const BlogParagraph = ({ children }: BlogParagraphProps) => {
  return (
    <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
      {children}
    </p>
  );
};

export default BlogParagraph;
