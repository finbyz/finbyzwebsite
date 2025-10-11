import { motion } from 'framer-motion';
import { MediaItem } from '@/types/media';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SidebarMediaItemProps {
  item: MediaItem;
  onClick: () => void;
  isActive?: boolean;
}

export function SidebarMediaItem({ item, onClick, isActive }: SidebarMediaItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group cursor-pointer rounded-lg transition-colors duration-200",
        isActive ? "bg-primary/10" : "hover:bg-muted/40"
      )}
      onClick={onClick}
    >
      <div className="flex gap-3 p-2">
        {/* Thumbnail */}
        <div className="relative w-40 flex-shrink-0 aspect-video rounded overflow-hidden bg-secondary">
          <img
            src={`/web-api/fb/n${item.thumbnail}`}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2">
            <h4 className={cn(
              "font-medium text-sm line-clamp-2",
              isActive ? "text-primary" : "text-foreground"
            )}>
              {item.title}
            </h4>
            {item.type === 'video' && item.watched && (
              <Badge variant="secondary" className="h-5 px-1.5 py-0 text-[10px]">Watched</Badge>
            )}
          </div>

          {item.small_description && (
            <div className="text-[11px] text-muted-foreground line-clamp-2 mt-1" dangerouslySetInnerHTML={{ __html: item.small_description }}>
            </div>
          )}

          {item.duration && item.type === 'video' && (
            <div className="text-[11px] text-muted-foreground mt-1">{item.duration}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}


