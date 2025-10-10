import { motion } from 'framer-motion';
import { Play, Clock, Image as ImageIcon, CheckCircle2, Eye } from 'lucide-react';
import { MediaItem } from '@/types/media';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MediaCardProps {
  item: MediaItem;
  onClick: () => void;
  index?: number;
}

export function MediaCard({ item, onClick, index = 0 }: MediaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer border-none"
      onClick={onClick}
    >
      <Card className="overflow-hidden bg-card transition-all duration-300 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.2)] relative">
        {/* Watched Badge */}
        {item.watched && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm flex items-center gap-1 shadow-lg">
              <CheckCircle2 className="w-3 h-3" />
              Watched
            </Badge>
          </div>
        )}

        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Watched Overlay */}
          {item.watched && (
            <div className="absolute inset-0 bg-background/20" />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play/View Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-colors">
              {item.type === 'video' ? (
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              ) : (
                <ImageIcon className="w-8 h-8 text-primary-foreground" />
              )}
            </div>
          </motion.div>

          {/* Duration Badge for Videos */}
          {item.type === 'video' && item.duration && (
            <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-background/90 backdrop-blur-sm flex items-center gap-1">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">{item.duration}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
              {item.title}
            </h3>
            
            {item.description && (
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Views */}
          {item.views !== undefined && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Eye className="w-3.5 h-3.5" />
              <span>{item.views.toLocaleString()} views</span>
            </div>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
              {item.tags.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  +{item.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
