import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FeatureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

gsap.registerPlugin(ScrollTrigger);

const BlogFeatureCard = ({
  title,
  description,
  children,
  image,
  imagePosition = "left",
  className,
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white overflow-hidden mb-2 mt-2 ${className}`}
    >
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <div
          className={`flex flex-col md:flex-row items-start gap-6 ${
            image && imagePosition === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          {image && (
            <div className="w-full md:w-1/5 flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-48 md:h-full object-cover rounded-xl"
              />
            </div>
          )}

          <div className="p-6 flex-1 flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">{description}</p>
            {children && <div>{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureCard;
