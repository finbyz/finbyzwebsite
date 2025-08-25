 
 
import "@/styles/components/client-logos.css";

// Intersection Observer Hook
// Server-side render: static grid; no intersection observer

// Default client logos data
const defaultClientLogos = [
  {
    name: "South India Trading Co.",
    location: "DELHI, INDIA",
    logo: "SJC",
    colors: {
      primary: "#FFD700", // Yellow
      secondary: "#FF6B35", // Orange
      accent: "#4CAF50" // Green
    },
    description: "Multi-colored map of India with bold yellow text"
  },
  {
    name: "Elkins Trade Link Ltd.",
    location: "TRADE LINK LTD.",
    logo: "elkins",
    colors: {
      primary: "#87CEEB", // Light blue
      secondary: "#808080" // Gray
    },
    description: "Light blue text with stylized 'k' as shopping bag"
  },
  {
    name: "G.M.'s Tulsi Tea",
    location: "TEA",
    logo: "Tulsi",
    colors: {
      primary: "#8A2BE2", // Purple
      secondary: "#FFD700", // Yellow
      text: "#FFFFFF" // White
    },
    description: "Purple background with yellow banner and white text"
  },
  {
    name: "Farmindia Impex Pvt. Ltd.",
    location: "IMPEX PVT. LTD.",
    logo: "FARMINDIA",
    colors: {
      primary: "#228B22", // Dark green
      secondary: "#808080" // Gray
    },
    description: "Dark green leaf with bold company name"
  },
  {
    name: "Raymond",
    location: "",
    logo: "R",
    colors: {
      primary: "#DC143C", // Red
      secondary: "#DC143C" // Red
    },
    description: "Mirrored red 'R's with script text"
  },
  {
    name: "Aditya Birla Tanfac",
    location: "TANFAC",
    logo: "ABT",
    colors: {
      primary: "#FF4500", // Orange-red
      secondary: "#FFD700", // Yellow
      accent: "#008080" // Teal
    },
    description: "Geometric sunburst pattern with teal band"
  }
];

// No carousel settings in server-only mode



interface ClientLogosProps {
  data?: {
    component_type?: "Carousal";
    title?: string;
    subtitle?: string;
    clients?: any[];
    carousel?: {
      autoPlay?: boolean;
      interval?: number;
      showArrows?: boolean;
      showIndicators?: boolean;
    };
  };
}

export default function ClientLogos({ data }: ClientLogosProps) {

  // Use provided data or defaults
  const {
    component_type = "Carousal",
    clients: clientLogos = defaultClientLogos,
    title = "Some of The Loyal Clients of FinByz",
    subtitle = "Trusted by leading companies worldwide"
  } = data || {};

  return (
    <section className="client-logos-section">
      <div className="client-logos-container">
        {/* Banner Title */}
        <div className="client-logos-header">
          <h2 className="client-logos-title">
            {title}
          </h2>
          {subtitle && (
            <p className="client-logos-subtitle">{subtitle}</p>
          )}
        </div>

        {/* Static Grid Container */}
        <div className="client-logos-grid-container">
          <div className="client-logos-grid">
            {clientLogos.map((clientItem, actualIndex) => (
              <div key={actualIndex} className="client-logo-item group">
                <div className="client-logo-container">
                            {/* South India Trading Co. */}
                            {clientItem.name === "South India Trading Co." && (
                              <div className="text-center">
                                <div className="client-logo-india-map">
                                  {/* India map outline */}
                                  <div className="client-logo-india-map-bg"></div>
                                  <div className="client-logo-india-map-inner">
                                    <span className="text-lg font-bold text-gray-800">SJC</span>
                                  </div>
                                </div>
                                <div className="client-logo-india-text">SOUTH INDIA TRADING CO.</div>
                                <div className="client-logo-location">DELHI, INDIA</div>
                              </div>
                            )}

                            {/* Elkins Trade Link Ltd. */}
                            {clientItem.name === "Elkins Trade Link Ltd." && (
                              <div className="text-center">
                                <div className="client-logo-elkins">elkins</div>
                                <div className="client-logo-location">TRADE LINK LTD.</div>
                              </div>
                            )}

                            {/* G.M.'s Tulsi Tea */}
                            {clientItem.name === "G.M.'s Tulsi Tea" && (
                              <div className="client-logo-tulsi-container">
                                <div className="client-logo-tulsi-bg">
                                  <div className="client-logo-tulsi-banner">
                                    <span className="client-logo-tulsi-banner-text">G.M.'s</span>
                                  </div>
                                  <div className="client-logo-tulsi-main">
                                    <span className="client-logo-tulsi-text">Tulsi</span>
                                  </div>
                                  <span className="client-logo-tulsi-tm">TM</span>
                                </div>
                                <div className="client-logo-tulsi-tea">TEA</div>
                              </div>
                            )}

                            {/* Farmindia Impex Pvt. Ltd. */}
                            {clientItem.name === "Farmindia Impex Pvt. Ltd." && (
                              <div className="text-center">
                                <div className="client-logo-farmindia-leaf">
                                  <div className="client-logo-farmindia-inner"></div>
                                </div>
                                <div className="client-logo-farmindia-text">
                                  <span className="client-logo-farmindia-farm">FARM</span>
                                  <span className="client-logo-farmindia-india">INDIA</span>
                                </div>
                                <div className="client-logo-location">IMPEX PVT. LTD.</div>
                              </div>
                            )}

                            {/* Raymond */}
                            {clientItem.name === "Raymond" && (
                              <div className="text-center">
                                <div className="client-logo-raymond-r">R</div>
                                <div className="client-logo-raymond-text">raymond</div>
                              </div>
                            )}

                            {/* Aditya Birla Tanfac */}
                            {clientItem.name === "Aditya Birla Tanfac" && (
                              <div className="text-center">
                                <div className="client-logo-abt-title">ADITYA BIRLA</div>
                                <div className="client-logo-abt-sunburst"></div>
                                <div className="client-logo-abt-band">
                                  <span className="client-logo-abt-tanfac">TANFAC</span>
                                </div>
                              </div>
                            )}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
