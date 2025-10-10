import { motion } from 'framer-motion';
import { MediaItem } from '@/types/media';
import { Badge } from '@/components/ui/badge';
import { Eye, Clock } from 'lucide-react';

interface MediaViewerProps {
  item: MediaItem;
}

export function MediaViewer({ item }: MediaViewerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Media Content */}
      <div className="relative w-full bg-background rounded-lg overflow-hidden shadow-lg">
        {item.type === 'video' ? (
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative bg-secondary">
            <img
              src={item.imageUrl || item.thumbnail}
              alt={item.title}
              className="w-full h-auto max-h-[70vh] object-contain mx-auto"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <div>
          <h2 className="responsive-card-grid-title mb-3">
            {item.title}
          </h2>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-b border-border pb-1">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="default" className="text-sm px-3 py-1 bg-slate-400">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            {item.views !== undefined && (
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>{item.views.toLocaleString()} views</span>
              </div>
            )}
            {item.type === 'video' && item.duration && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{item.duration}</span>
                </div>
              </>
            )}
          </div>

          {item.description && (
            <div dangerouslySetInnerHTML={{ __html: item.description }} className="text-base text-muted-foreground leading-relaxed">
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
