 
import Image from "next/image";
import { cn } from "@/lib/utils";

import "@/styles/components/responsive-card-grid.css";
import { Award, TrendingUp, Globe, Target, BarChart3, Zap, Shield, Cpu,Monitor,Truck,HardHat,ShieldCheck,Users,Layers,Box,Settings2,BarChart2,ClipboardCheck,Eye,Trophy,Rocket,Building,Repeat,SearchCheck,UserPlus,LifeBuoy,Medal,UserCheck2,CalendarRange,ActivitySquare,WandSparkles ,Handshake,Timer,Frown,PieChart,TrendingDown,Activity,DollarSign,CalendarClock,MessageSquare,Database,AlertTriangle,Share2,Search,Server,Code,UserCheck,MessageCircle,ClipboardList,CheckCircle2,Star,FileCheck,BarChart,ShoppingCart,FileText,Wallet,PackageCheck,Calculator,Users2,Wrench,Contact,FilePlus2,Warehouse,Network,FileStack,FileCheck2,FileBarChart,Bot,CheckCircle,HelpCircle,Book,KeyRound,Phone,Gavel,FileWarning,ServerCog,Brain,Code2,Lightbulb,FlaskConical,Cross,Hammer,CupSoda,
GraduationCap,HeartPulse,Scissors,Leaf,Square,Coins,Factory,PackageOpen,Smartphone,LayoutDashboard,Building2,ShoppingBag,BookOpenCheck,Globe2,MapPinned,LayoutGrid,Puzzle,Briefcase,HeartHandshake,BadgeCheck,Ship,Stethoscope,Recycle,Hospital,PackageX,Package,ArrowLeftRight,CreditCard,RefreshCcw,Settings,Boxes,Sliders,FileBadge,LineChart,Send,Plug,Bell,Lock,Cloud,Workflow,Repeat2,Heart,Store,BarChartHorizontal,RotateCw,BookUser,UserCircle,BedDouble,PackageSearch,LayoutList,Folders,Layers3,ListChecks,Compass,Sprout,TestTube2,Mic,FileSearch,UserCog,PenTool,Sparkles,BookOpen,Pill,TabletSmartphone,BeakerIcon,RefreshCw,Gauge,CloudUpload,Smile,Calendar,Mail
} from "lucide-react";

// ============================================================================
// RESPONSIVE CARD GRID SECTION
// ============================================================================

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  icon?: string; // lucide-react icon name
  iconColor?: string;
  iconBg?: string;
}

export interface ResponsiveCardGridData {
  title?: string;
  subtitle?: string;
  cards: CardItem[];
  layout?: 'standard' | 'compact';
  showImage?: boolean;
  imageHeight?: number;
  imageWidth?: number;
  className?: string;
  cardClassName?: string;
  variant?: 'standard' | 'iconCard';
  debug?: boolean;
}

interface ResponsiveCardGridProps {
  data?: ResponsiveCardGridData;
  className?: string;
}

/**
 * Responsive card grid section component that automatically handles different numbers of cards in rows.
 * Can receive data through JSON following the existing section component pattern.
 * 
 * Layout rules:
 * - 2 cards: 1 row (2 columns)
 * - 3 cards: 1 row (3 columns)
 * - 4 cards: 1 row (4 columns)
 * - 6 cards: 2 rows (3 columns each)
 * - 8 cards: 2 rows (4 columns each)
 */
export default function ResponsiveCardGrid({ data = { cards: [] }, className }: ResponsiveCardGridProps) {
  const {
    title = "Our Services",
    subtitle = "Discover our comprehensive range of services designed to help your business grow",
    cards = [],
    layout = 'standard',
    showImage = true,
    imageHeight = layout === 'compact' ? 150 : 200,
    imageWidth = layout === 'compact' ? 250 : 300,
    cardClassName = "",
    variant = 'standard',
    debug = false,
  } = data;

  // Map of supported icons (extend as needed)
  const iconMap: Record<string, any> = {
    Award,
    TrendingUp,
    Globe,
    Target,
    BarChart3,
    Zap,
    Shield,
    Cpu,
    Monitor,
    Truck,
    HardHat,
    ShieldCheck,
    Users,
    Layers,
    Box,
    Settings2,
    BarChart2,
    ClipboardCheck,
    Eye,
    Trophy,
    Rocket,
    Building,
    Repeat,
    SearchCheck,
    UserPlus,
    LifeBuoy,
    Medal,
    UserCheck2,
    CalendarRange,
    ActivitySquare,
    WandSparkles,
    Handshake,
    Timer,
    Frown,
    PieChart,
    TrendingDown,
    Activity,
    DollarSign,
    CalendarClock,
    MessageSquare,
    Database,
    AlertTriangle,
    Share2,
    Search,
    Server,
    Code,
    UserCheck,
    MessageCircle ,
    ClipboardList,
    CheckCircle2,
    Star,
    FileCheck,
    BarChart,
    ShoppingCart,
    FileText,
    Wallet,
    PackageCheck,
    Calculator,
    Users2,
    Wrench,
    Contact,
    FilePlus2,
    Warehouse,
    Network,
    FileStack,
    FileCheck2 ,
    FileBarChart,
    Bot,
    CheckCircle,
    HelpCircle,
    Brain,
    Book,
    KeyRound,
    Phone,
    Gavel,
    FileWarning,
    ServerCog,
    Code2,
    Lightbulb,
    FlaskConical,
    Cross,
    Hammer,
    CupSoda,
    GraduationCap,
    HeartPulse,
    Scissors,
    Leaf,
    Square,
    Coins,
    Factory,
    PackageOpen,
    Smartphone,
    LayoutDashboard,
    Building2,
    ShoppingBag,
    BookOpenCheck,
    Globe2,
    MapPinned,
    LayoutGrid,
    Puzzle,
    Briefcase,
    HeartHandshake,
    BadgeCheck,
    Ship,
    Stethoscope,
    Recycle,
    Hospital,
    PackageX,
    Package,
    ArrowLeftRight,
    CreditCard,
    RefreshCw,
    Settings,
    Boxes,
    Sliders,
    Send,
    Plug,
    FileBadge,
    LineChart,
    Lock,
    Bell,
    Cloud,
    Workflow,
    Store,
    BarChartHorizontal,
    Repeat2,
    Heart,
    RotateCw,
    RefreshCcw,
    BookUser,UserCircle,BedDouble,PackageSearch,LayoutList,
    Folders,Layers3,ListChecks,Compass,Sprout,TestTube2,Mic,FileSearch,UserCog,
    PenTool,Sparkles,BookOpen,Pill,TabletSmartphone,BeakerIcon,Smile
    ,Gauge,CloudUpload,Calendar,Mail



    


    
  };

  // Dynamic color palette assignment based on number of cards
  // Use only the 4 brand colors (blue, orange, green, purple)
  const fullPalette = [
    "#1A5276", // blue
    "#FF8C00", // orange
    "#27AE60", // green
    "#8E44AD", // purple
    "#FF3333", // red
    "#FFB347", //light-orange
    

  ];

  const getPaletteSubset = (count: number): string[] => {
    const size = Math.min(count, fullPalette.length);
    return fullPalette.slice(0, size);
  };

  const palette = getPaletteSubset(cards.length);

  // Utility to compute hover colors (slightly darker bg, lighter icon)
  const darken = (hex: string, amount = 0.1) => {
    try {
      const c = hex.replace('#', '');
      const num = parseInt(c.length === 3 ? c.split('').map((x) => x + x).join('') : c, 16);
      let r = (num >> 16) & 0xff;
      let g = (num >> 8) & 0xff;
      let b = num & 0xff;
      r = Math.round(r * (1 - amount));
      g = Math.round(g * (1 - amount));
      b = Math.round(b * (1 - amount));
      const toHex = (v: number) => v.toString(16).padStart(2, '0');
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    } catch {
      return hex;
    }
  };



  if (!cards || cards.length === 0) {
    return (
      <section className={cn("responsive-card-grid-section", className)}>
        <div className="responsive-card-grid-container">
          <div className="responsive-card-grid-empty">
            <h3>No Cards Available</h3>
            <p>Please provide card data to display the grid.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("responsive-card-grid-section", className)}>
      <div className="container-custom" style={{ width: '100%' }}>
        {/* Section Header */}
        <div className="responsive-card-grid-header responsive-card-grid-fade-in">
          <h2 className="responsive-card-grid-title">{title}</h2>
          {subtitle && (
            <p className="responsive-card-grid-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        {/* Responsive Card Grid */}
        <div
          className={cn(
            "responsive-card-grid",
            layout,
            cardClassName
          )}
          data-cards={cards.length <= 8 ? cards.length.toString() : "default"}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={cn(
                "responsive-card",
                layout === 'compact' ? 'compact' : '',
                variant === 'iconCard' ? 'icon-card' : '',
                card.className
              )}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {variant === 'iconCard' ? (
                <>
                  <div className="icon-card-media">
                    {card.icon && iconMap[card.icon] ? (
                      <div
                        className="icon-badge"
                        style={{
                          ['--icon-bg' as any]: (card.iconBg || palette[index % palette.length] || "#1A5276"),
                          ['--icon-fg' as any]: (card.iconColor || "#fff"),
                          ['--icon-bg-hover' as any]: darken(card.iconBg || palette[index % palette.length] || "#1A5276", 0.12),
                          ['--icon-fg-hover' as any]: '#ffffff',
                        } as any}
                      >
                        {(() => {
                          const Icon = iconMap[card.icon];
                          return Icon ? <Icon size={36} /> : null;
                        })()}
                      </div>
                    ) : (
                      showImage && card.image && (
                        <Image
                          src={card.image}
                          alt={card.imageAlt || card.title}
                          width={120}
                          height={120}
                          className="icon-card-image"
                          priority={index < 3}
                        />
                      )
                    )}
                  </div>
                  {card.icon && iconMap[card.icon] && <div className="icon-card-separator" />} 
                  <div className="icon-card-content">
                    <h3 className="icon-card-title">{card.title}</h3>
                    <p className="icon-card-description">{card.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Card Image */}
                  {showImage && card.image && (
                    <div className="responsive-card-image-container">
                      <Image
                        src={card.image}
                        alt={card.imageAlt || card.title}
                        width={imageWidth}
                        height={imageHeight}
                        className="responsive-card-image"
                        priority={index < 3}
                      />
                    </div>
                  )}
                  {/* Card Content */}
                  <div className="responsive-card-content">
                    <div>
                      <h3 className="responsive-card-title">{card.title}</h3>
                      <p className="responsive-card-description">{card.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Debug Info (optional) */}
        {debug && (
          <div className="responsive-card-grid-debug">
            <p>
              Layout: {layout} • Cards: {cards.length} • Grid: {cards.length <= 8 ? cards.length.toString() : "default"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
