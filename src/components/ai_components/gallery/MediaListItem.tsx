import { motion } from 'framer-motion';
import { Play, Clock, Image as ImageIcon, CheckCircle2, Eye } from 'lucide-react';
import { MediaItem } from '@/types/media';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MediaListItemProps {
  item: MediaItem;
  onClick: () => void;
  isActive?: boolean;
}

export function MediaListItem({ item, onClick, isActive }: MediaListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "group cursor-pointer rounded-lg transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col h-full max-h-96 min-h-96 m-2",
        isActive
          ? "bg-primary/10 border-primary shadow-sm"
          : "bg-card hover:border-primary/30"
      )}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-secondary hover:scale-105">
        <div className="relative">
          <img
            src={`/web-api/fb/n${item.thumbnail}`}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {item.type === 'video' && item.watched && (
            <Badge
              variant="default"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[10px] uppercase tracking-wide bg-amber-300 group-hover:hidden"
            >
              Watched
            </Badge>
          )}
        </div>


        {/* Play/View Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40">
          <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
            {item.type === 'video' ? (
              <Play className="w-10 h-10 ml-0.5 border-none fill-amber-300 stroke-amber-300" />
            ) : (
              <ImageIcon className="w-5 h-5 text-primary-foreground" />
            )}
          </div>
        </div>

        {/* Duration Badge */}
        {item.type === 'video' && item.duration && (
          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-xs bg-background/90 backdrop-blur-sm font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {item.duration}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-3 space-y-2 flex-1 flex flex-col">
        <div className="flex items-start gap-2">
          <h4 className={cn(
            "font-medium text-sm line-clamp-2 transition-colors",
            isActive ? "text-primary" : "text-foreground group-hover:text-primary"
          )}>
            {item.title}
          </h4>
        </div>

        {item.small_description && (
          <div
            className="text-xs text-muted-foreground line-clamp-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.small_description }}
          />
        )}

        {/* Views */}
        {item.views !== undefined && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Eye className="w-3 h-3" />
            <span>{item.views.toLocaleString()} views</span>
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
