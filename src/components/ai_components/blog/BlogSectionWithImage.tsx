import Image from 'next/image';
import { ReactNode } from 'react';

interface BlogSectionWithImageProps {
  id: string;
  title: string;
  children: ReactNode;
  image?: {
    src: string;
    alt: string;
    title?: string;
    width?: number;
    height?: number;
    cover?: boolean;
  };
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  imageSize?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'highlighted' | 'minimal';
}

const imageSizeMap = {
  small: { width: 180, height: 180, className: 'w-48' },
  medium: { width: 220, height: 220, className: 'w-64' },
  large: { width: 280, height: 280, className: 'w-80' }
};

const variantStyles = {
  default: {
    container: 'bg-white rounded-xl p-4',
    imageWrapper: 'rounded-xl p-6'
  },
  highlighted: {
    container: 'rounded-xl p-8 shadow-md',
    imageWrapper: 'bg-white rounded-xl p-6'
  },
  minimal: {
    container: 'py-8',
    imageWrapper: 'bg-gray-50 rounded-lg p-4'
  }
};

export default function BlogSectionWithImage({
  id,
  title,
  children,
  image,
  imagePosition = 'right',
  imageSize = 'medium',
  variant = 'default'
}: BlogSectionWithImageProps) {
  const sizeConfig = imageSizeMap[imageSize];
  const styles = variantStyles[variant];
  const isCover = image?.cover;

  // Float-specific styles
  let floatStyles = 'float-left mr-6 mb-4'
  switch (imagePosition) {
    case 'left':
      floatStyles = 'float-left mr-6 mb-4';
      break;

    case 'right':
      floatStyles = 'float-right ml-6 mb-4';
      break;

    case 'top':
      floatStyles = 'mx-auto mb-4 block';
      break;

    case 'bottom':
      floatStyles = 'mx-auto mt-4 block';
      break;

    default:
      floatStyles = 'float-left mr-6 mb-4';
      break;
  }

  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-500 pb-3 inline-block">
        {title}
      </h2>

      <div className={styles.container}>
        {/* Cover image - full width, no float */}
        {image && isCover && (
          <div className="w-full mb-6">
            <div className={`${styles.imageWrapper} w-full p-0 rounded-none transform hover:scale-105 transition-transform duration-300`}>
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title || image.alt}
                width={image.width || 800}
                height={image.height || 400}
                className="object-cover rounded-xl aspect-video"
              />
            </div>
          </div>
        )}

        {/* Content with floated image */}
        <div className="clearfix">
          {/* Floated image */}
          {image && !isCover && (
            <div className={`${floatStyles} ${sizeConfig.className}`}>
              <div className={`${styles.imageWrapper} transform hover:scale-105 transition-transform duration-300`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.title || image.alt}
                  width={image.width || sizeConfig.width}
                  height={image.height || sizeConfig.height}
                  // className=""
                />
              </div>
            </div>
          )}

          {/* Text content that wraps around the floated image */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clearfix::after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>
    </section>
  );
}