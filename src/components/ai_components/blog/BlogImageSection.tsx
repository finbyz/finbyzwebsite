interface BlogImageSectionProps {
  src: string;
  alt: string;
  height?: string;
}

const BlogImageSection = ({ src, alt, height = "400px" }: BlogImageSectionProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover rounded-xl mb-8 shadow-lg"
      style={{ height }}
    />
  );
};

export default BlogImageSection;
