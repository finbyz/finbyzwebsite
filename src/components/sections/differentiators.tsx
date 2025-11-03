import { Eye, Heart, CheckCircle, BarChart3,Brain,Infinity,Globe,Rocket,Activity,ShieldCheck,Star,Handshake,Users,Layers } from "lucide-react";
import "@/styles/components/differentiators.css";

interface DifferentiatorItem {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
}

interface DifferentiatorsProps {
  data?: {
    component_type?: "FOQ";
    title?: string;
    subtitle?: string;
    differentiators?: DifferentiatorItem[];
    quote?: {
      text?: string;
      highlight?: string;
      author?: string;
    };
  };
}

export default function Differentiators({ data = {} }: DifferentiatorsProps) {

  const {
    component_type = "FOQ",
    title = "Our Differentiators",
    subtitle = "What sets us apart in the technology landscape",
    differentiators = [
      {
        icon: "Eye",
        title: "Clarity Over Complexity",
        description: "We simplify tech jargon into action plans. No overengineering, just elegant problem-solving.",
        iconColor: "#1A5276",
        iconBg: "#EAF1F8"
      },
      {
        icon: "Heart",
        title: "Ownership with Empathy",
        description: "Your goals become our goals. We bring care into consulting.",
        iconColor: "#FF8C00",
        iconBg: "#FFF4E5"
      },
      {
        icon: "CheckCircle",
        title: "Precision in Execution",
        description: "We sweat the details — ERP flows, automations, dashboards — done right the first time.",
        iconColor: "#16A085",
        iconBg: "#E6F7F4"
      },
      {
        icon: "BarChart3",
        title: "Adaptable Team Model",
        description: "Need a full-time developer or quick AI prototype? Our team scales as you grow.",
        iconColor: "#8E44AD",
        iconBg: "#F3EAF8"
      }
    ],
    quote = {
      text: "You bring the vision — we'll build the roadmap.",
      highlight: "we'll build the roadmap",
      author: "— The Finbyz Promise"
    }
  } = data;

  // Ensure distinct icons across items (fallback rotates through pool)
  const allIconNames = ["Eye", "Heart", "CheckCircle", "BarChart3"];
  const normalizeDistinct = (items: DifferentiatorItem[]) => {
    const used = new Set<string>();
    return items.map((item) => {
      let name = item.icon;
      if (used.has(name) || !allIconNames.includes(name)) {
        name = allIconNames.find((n) => !used.has(n)) || name;
      }
      used.add(name);
      return { ...item, icon: name } as DifferentiatorItem;
    });
  };
  const distinctDifferentiators = normalizeDistinct(differentiators);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Eye":
        return Eye;
      case "Heart":
        return Heart;
      case "CheckCircle":
        return CheckCircle;
      case "BarChart3":
        return BarChart3;
      case "Brain":
        return Brain;
      case "Infinity":
        return Infinity;
      case "Globe":
          return Globe;
      case "Rocket":
          return Rocket;
      case "Activity":
          return Activity;
      case "ShieldCheck":
          return ShieldCheck;
      case "Star":
          return Star;
      case "Handshake":
          return Handshake;
      case "Users":
          return Users;
      case "Layers":
          return Layers;
      default:
        return Eye;
    }
  };

  return (
    <section className="differentiators-section">
      <div className="differentiators-container">
        <div className={`differentiators-header`}>
          <h2 className="differentiators-title">
            {title}
          </h2>
          <p className="differentiators-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="differentiators-grid">
          {distinctDifferentiators.map((item, index) => {
            const IconComponent = getIconComponent(item.icon);
            
            return (
              <div
                key={item.title}
                className={`differentiators-card-wrapper`}
                style={{ 
                  transitionDelay: `${index * 0.2}s`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="differentiators-card">
                  <div
                    className="differentiators-icon-container"
                    style={{ background: item.iconBg }}
                  >
                    <IconComponent className="differentiators-icon" style={{ color: item.iconColor }} />
                  </div>
                  <div className="differentiators-content">
                    <h3 className="differentiators-card-title">
                      {item.title}
                    </h3>
                    <p className="differentiators-card-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Quote Section */}
        <div className={`differentiators-quote`} style={{ transitionDelay: '0.8s' }}>
          <div className="differentiators-quote-container">
            <div className="differentiators-quote-content">
                             <div className="differentiators-quote-text">
                 "{(quote.text || "").split(quote.highlight || "").map((part, index) => 
                   index === 0 ? (
                     <span key={index}>{part}<span className="differentiators-quote-highlight">{quote.highlight}</span></span>
                   ) : (
                     <span key={index}>{part}</span>
                   )
                 )}"
               </div>
              <div className="differentiators-quote-author">
                {quote.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

