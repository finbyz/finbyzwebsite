'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ArrowBigLeft, ArrowLeft, Search } from 'lucide-react';
import { MediaViewer } from '@/components/ai_components/gallery/MediaViewer';
import { MediaListItem } from '@/components/ai_components/gallery/MediaListItem';
import { SidebarMediaItem } from '@/components/ai_components/gallery/SidebarMediaItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MediaItem, MediaCategory } from '@/types/media';
import QuoteBlock from '@/components/ai_components/QuoteBlock';

interface TutorialsProps {
  data: Galleries | null;
}

const Tutorials = ({ data }: TutorialsProps) => {
  const [selectedItem, setSelectedItem] = useState<Gallery | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'videos' | 'images'>('videos');
  // Category filtering removed; we always show all
  const [watchedItems, setWatchedItems] = useState<Set<string>>(new Set());
  const [isHovering, setIsHovering] = useState(false);

  const allItems = data?.gallery_sidebar || []
  // Separate videos and images based on youtube_link presence
  const allVideos = allItems.filter(item => item.youtube_link);
  const allImages = allItems.filter(item => !item.youtube_link);

  // Check if we have gallery_sidebar, if not show details view
  const hasGallerySidebar = data?.gallery_sidebar && data.gallery_sidebar.length > 0;

  // Categories removed

  // Load watched items from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('watchedMediaItems');
    if (stored) {
      setWatchedItems(new Set(JSON.parse(stored)));
    }
  }, []);

  const handleItemClick = (item: Gallery) => {
    setSelectedItem(item);

    // Mark videos as watched
    if (item.youtube_link && !watchedItems.has(item.name)) {
      const newWatched = new Set(watchedItems);
      newWatched.add(item.name);
      setWatchedItems(newWatched);
      localStorage.setItem('watchedMediaItems', JSON.stringify(Array.from(newWatched)));
    }
  };

  const filterItems = (items: Gallery[], _category: string | null) => {
    let filtered = items;

    // Category filter removed

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.small_description?.toLowerCase().includes(query) ||
        item.keywords?.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredVideos = filterItems(allVideos, null);
  const filteredImages = filterItems(allImages, null);

  const extractYouTubeId = (url?: string): string | undefined => {
    if (!url) return undefined;
    try {
      const patterns = [
        /(?:v=)([\w-]{11})/,
        /youtu\.be\/([\w-]{11})/,
        /youtube\.com\/embed\/([\w-]{11})/
      ];
      for (const p of patterns) {
        const m = url.match(p);
        if (m && m[1]) return m[1];
      }
      const u = new URL(url);
      return u.searchParams.get('v') || undefined;
    } catch {
      return undefined;
    }
  };

  const toMediaItem = (g: Gallery): MediaItem => ({
    id: g.name,
    type: g.youtube_link ? 'video' : 'image',
    title: g.seo_title,
    description: g.description || g.small_description,
    small_description: g.small_description,
    thumbnail: g.svg_image,
    category: g.gallery_category || 'uncategorized',
    watched: g.youtube_link ? watchedItems.has(g.name) : undefined,
    videoId: g.youtube_link ? extractYouTubeId(g.youtube_link) : undefined,
    imageUrl: !g.youtube_link ? g.svg_image : undefined,
    tags: g.keywords ? g.keywords.split(',').map(k => k.trim()).filter(Boolean) : undefined,
  });

  // Show loading or empty state if no data
  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">No gallery data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background mx-auto w-full border-b max-w-screen-xl">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "name": data.parent.seo_title || data.parent.gallery_title || data.parent.title || "Learning Hub",
            "headline": data.parent.small_description || data.parent.description || "Explore our comprehensive collection of tutorials and resources",
            "author": {
              "@type": "Person",
              "name": "FinByz Tech Pvt Ltd"
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "image": data.parent.svg_image ? `/web-api/fb/n${data.parent.svg_image}` : "/images/FinbyzLogo.png",
            "publisher": {
              "@type": "Organization",
              "name": "FinByz Tech Pvt Ltd",
              "sameAs": "https://finbyz.tech",
              "email": "info@finbyz.com",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/FinbyzLogo.png",
                "height": "300px",
                "width": "300px"
              }
            },
            "description": data.parent.description || data.parent.small_description || "Explore our comprehensive collection of tutorials and resources",
            "keywords": data.parent.keywords || "",
            "url": `https://finbyz.tech/${data.parent.route || ''}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://finbyz.tech/${data.parent.route || ''}`
            }
          })
        }}
      />
      
      {/* Header */}
      <motion.header
        className="border-b border-border sticky top-12 z-40 bg-white"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="responsive-card-grid-title mb-2">
                {data.parent.gallery_title || 'Learning Hub'}
              </h1>
              <div className="text-muted-foreground">
                {data.parent.small_description || 'Explore our comprehensive collection of tutorials and resources'}
              </div>
              {data.parent.quote && (
                <div className='w-full mx-auto mt-4'>
                  <QuoteBlock text={data.parent.quote || ''} />
                </div>
              )}
            </div>


            {/* Search */}
            {hasGallerySidebar && (
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
            )}
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {hasGallerySidebar ? (
          <Tabs value={activeTab} onValueChange={v => setActiveTab(v as 'videos' | 'images')}>
            {!selectedItem ? (
              // Grid View - Initial state (no category sidebar)
              <div className="flex flex-col gap-6 ">
                {/* Grid Content */}
                <main className="flex-1 min-w-0">
                  <TabsContent value="videos" className="mt-2 mb-2">
                    {filteredVideos.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div onClick={() => handleItemClick(item)} className="cursor-pointer">
                              <MediaListItem
                                item={toMediaItem(item)}
                                onClick={() => handleItemClick(item)}
                                isActive={false}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-64">
                        <p className="text-muted-foreground">No videos found</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="images" className="mt-0">
                    {filteredImages.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div onClick={() => handleItemClick(item)} className="cursor-pointer">
                              <MediaListItem
                                item={toMediaItem(item)}
                                onClick={() => handleItemClick(item)}
                                isActive={false}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-64">
                        <p className="text-muted-foreground">No images found</p>
                      </div>
                    )}
                  </TabsContent>
                </main>
              </div>
            ) : (
              // Sidebar View - After clicking a video
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Sidebar - Media List */}
                <aside className="lg:w-[380px] order-2 lg:order-2">
                  <div className="sticky top-32">
                    <div className="bg-card border border-border rounded-lg">
                      <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            All {activeTab === 'videos' ? 'Videos' : 'Images'}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {activeTab === 'videos' ? filteredVideos.length : filteredImages.length} items
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedItem(null)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ArrowLeft className='inline-block' /> Go Back
                        </button>
                      </div>

                      <ScrollArea>
                        <div className="p-3 space-y-3">
                          <TabsContent value="videos" className="mt-0">
                            {filteredVideos.map(item => (
                              <SidebarMediaItem
                                key={item.name}
                                item={toMediaItem(item)}
                                onClick={() => handleItemClick(item)}
                                isActive={selectedItem?.name === item.name}
                              />
                            ))}
                          </TabsContent>

                          <TabsContent value="images" className="mt-0">
                            {filteredImages.map(item => (
                              <SidebarMediaItem
                                key={item.name}
                                item={toMediaItem(item)}
                                onClick={() => handleItemClick(item)}
                                isActive={selectedItem?.name === item.name}
                              />
                            ))}
                          </TabsContent>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </aside>

                {/* Main Viewer - Right Side */}
                <main className="flex-1 min-w-0 order-1 lg:order-1">
                  <MediaViewer
                    item={toMediaItem(selectedItem)}
                  />
                </main>
              </div>
            )}
          </Tabs>
        ) : (
          // Details View - When no gallery_sidebar
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="mb-8">
                <div className="grid grid-cols-1 gap-6">
                  {/* SVG Image with hover effect */}
                  {data.parent.svg_image && (
                    <div className="space-y-4">
                      <div
                        className="bg-muted/30 rounded-lg p-4 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-muted/50"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <img
                          src={isHovering && data.parent.animated_image
                            ? `/web-api/fb/n${data.parent.animated_image}`
                            : `/web-api/fb/n${data.parent.svg_image}`}
                          alt={data.parent.title || 'SVG Image'}
                          className="max-w-full max-h-96 object-contain transition-all duration-300"
                        />
                      </div>
                    </div>
                  )}

                  {/* Static animated image (if no SVG image) */}
                  {!data.parent.svg_image && data.parent.animated_image && (
                    <div className="space-y-4">
                      <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center">
                        <img
                          src={`/web-api/fb/n${data.parent.animated_image}`}
                          alt={data.parent.title || 'Animated Image'}
                          className="max-w-full max-h-96 object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Title and Description */}
              <div className="mb-8">
                {data.parent.small_description && (
                  <p className="text-lg text-muted-foreground mb-6">
                    {data.parent.small_description}
                  </p>
                )}
                {data.parent.description && (
                  <div
                    className="prose prose-lg max-w-none text-foreground"
                    dangerouslySetInnerHTML={{ __html: data.parent.description }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorials;