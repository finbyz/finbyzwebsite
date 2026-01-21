import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Breadcrumbs from "@/components/sections/BreadCrumbs";

interface BlogHeroProps {
  title: string;
  description: string;
  primaryCategory: string;
  tags?: string[];
  author: {
    name: string;
    title: string;
    avatarSeed?: string;
  };
  publishDate: string;
  readTime: string;
}

const BlogHero = ({
  title,
  description,
  primaryCategory,
  tags = [],
  author,
  publishDate,
  readTime
}: BlogHeroProps) => {
  return (
    <div className="container-custom mx-auto">
      <div className="py-12 md:py-16">
        <div className="space-y-6">
          <Breadcrumbs
            textColor="text-gray-600"
            currentTextColor="text-gray-900"
            hoverColor="hover:text-orange-600"
            separatorColor="text-gray-400"
          />
          <div className="flex flex-wrap gap-3">
            <Badge variant="default" className="rounded-full">
              <Tag className="mr-1 h-3 w-3" />
              {primaryCategory}
            </Badge>
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground pt-4 border-t">
            <div className="flex items-center gap-2">
              <img
                src={`/images/Mukesh.jpg`}
                alt={author.name}
                className="w-10 h-10 rounded-full border-2 border-background"
              />
              <div>
                <p className="font-medium text-foreground">{author.name}</p>
                <p className="text-xs">{author.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(publishDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: '2-digit',
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;