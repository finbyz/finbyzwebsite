interface BlogCheckListProps {
  items: string[];
}

const BlogCheckList = ({ items }: BlogCheckListProps) => {
  return (
    <ul className="space-y-3 my-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
            ✓
          </span>
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BlogCheckList;
