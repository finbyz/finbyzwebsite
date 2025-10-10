import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MediaItem } from '@/types/media';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface MediaModalProps {
  item: MediaItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MediaModal({ item, isOpen, onClose }: MediaModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 gap-0 bg-card border-border overflow-hidden">
        {/* Media Content */}
        <div className="relative w-full bg-background">
          {item.type === 'video' ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.imageUrl || item.thumbnail}
                alt={item.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </motion.div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {item.title}
            </DialogTitle>
            {item.description && (
              <DialogDescription className="text-base text-muted-foreground pt-2">
                {item.description}
              </DialogDescription>
            )}
          </DialogHeader>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Additional Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
            {item.duration && (
              <>
                <span>
                  Duration: <span className="text-foreground font-medium">{item.duration}</span>
                </span>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
