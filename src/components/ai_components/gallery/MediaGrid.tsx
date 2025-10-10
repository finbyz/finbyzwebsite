import { MediaItem } from '@/types/media';
import { MediaCard } from './MediaCard';

interface MediaGridProps {
  items: MediaItem[];
  onItemClick: (item: MediaItem) => void;
}

export function MediaGrid({ items, onItemClick }: MediaGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mb-4 border-none">
          <div className="text-4xl text-muted-foreground">📁</div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No media found</h3>
        <p className="text-muted-foreground text-center max-w-md">
          There are no items in this category yet. Check back later for updates.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <MediaCard
          key={item.id}
          item={item}
          onClick={() => onItemClick(item)}
          index={index}
        />
      ))}
    </div>
  );
}
