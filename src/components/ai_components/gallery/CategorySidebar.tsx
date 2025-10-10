import { motion } from 'framer-motion';
import { MediaCategory } from '@/types/media';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Folder } from 'lucide-react';
interface CategorySidebarProps {
  categories: MediaCategory[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}
export function CategorySidebar({
  categories,
  activeCategory,
  onCategoryChange
}: CategorySidebarProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Folder className="w-4 h-4" />
          Categories
        </h3>
      </div>
      
      <div className="p-3 space-y-2">
        <Button
          variant={activeCategory === null ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onCategoryChange(null)}
        >
          All
        </Button>
        
        {categories.map((category) => (
          <motion.div key={category.id} whileHover={{ x: 4 }}>
            <Button
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-between",
                activeCategory === category.id && "bg-primary text-primary-foreground"
              )}
              onClick={() => onCategoryChange(category.id)}
            >
              <span>{category.name}</span>
              <span className="text-xs opacity-70">{category.count}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}