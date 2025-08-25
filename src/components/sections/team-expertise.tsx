import { Users, Code, Database, Cloud, Shield, Zap, Globe, Cpu, GitBranch, Award, Clock, Target } from "lucide-react";
import "@/styles/components/team-expertise.css";

const expertiseAreas = [
  {
    category: "Frontend Development",
    icon: Code,
    experts: 15,
    experience: "8+ years",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Angular"],
    description: "Expert frontend developers creating responsive, accessible, and performant user interfaces.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8",
    projects: 200
  },
  {
    category: "Backend Development",
    icon: Database,
    experts: 12,
    experience: "10+ years",
    skills: ["Node.js", "Python", "Java", "Go", "PostgreSQL"],
    description: "Senior backend engineers building scalable, secure, and high-performance server solutions.",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5",
    projects: 150
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    experts: 8,
    experience: "6+ years",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    description: "DevOps specialists ensuring reliable, scalable, and secure cloud infrastructure.",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2",
    projects: 80
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    experts: 6,
    experience: "5+ years",
    skills: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "MLOps"],
    description: "AI engineers developing intelligent solutions and automation systems.",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8",
    projects: 45
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    experts: 5,
    experience: "7+ years",
    skills: ["Penetration Testing", "SOC 2", "GDPR", "ISO 27001", "OAuth"],
    description: "Security experts ensuring enterprise-grade protection and compliance standards.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8",
    projects: 60
  },
  {
    category: "Quality Assurance",
    icon: Target,
    experts: 10,
    experience: "6+ years",
    skills: ["Automated Testing", "Manual Testing", "Performance Testing", "Security Testing"],
    description: "QA specialists ensuring high-quality, bug-free, and user-friendly applications.",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5",
    projects: 120
  },
  {
    category: "Project Management",
    icon: Users,
    experts: 8,
    experience: "8+ years",
    skills: ["Agile", "Scrum", "Kanban", "Risk Management", "Stakeholder Management"],
    description: "Experienced project managers ensuring successful delivery and client satisfaction.",
    iconColor: "#27AE60",
    iconBg: "#E8F8F2",
    projects: 100
  },
  {
    category: "UI/UX Design",
    icon: Award,
    experts: 6,
    experience: "5+ years",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems"],
    description: "Creative designers crafting beautiful, intuitive, and user-centered experiences.",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8",
    projects: 75
  }
];

export default function TeamExpertise({ data = {} }: { data?: Record<string, any> }) {

  // Use provided data or fallback to defaults
  const {
    component_type = "Card",
    title = "Team Expertise",
    subtitle = "Meet our diverse team of experts with deep domain knowledge and proven track records",
    team: customTeam = expertiseAreas
  } = data;

  return (
    <section className="team-expertise-section">
      {/* Background Pattern removed */}
      
      <div className="team-expertise-container">
        <div className={`team-expertise-header`}>
          <h2 className="team-expertise-title">
            {title}
          </h2>
          <p className="team-expertise-subtitle">
            {subtitle}
          </p>
        </div>
        
        <div className="team-expertise-grid">
          {customTeam.map((member: any, index: number) => (
            <div
              key={member.category || member.name || index}
              className={`team-expertise-card`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="team-expertise-area-icon-container">
                  {member.avatar ? (
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#1A5276] flex items-center justify-center text-white text-xl font-bold">
                      {(member.name || member.category || "T").charAt(0)}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#1A5276]">{member.experts || "Expert"}</div>
                  <div className="text-xs text-gray-500">Expert{member.experts !== 1 ? 's' : ''}</div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-[#1A5276] leading-tight">
                  {member.name || member.category}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed">
                  {member.bio || member.description}
                </p>
                
                {member.expertise && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill: string, skillIndex: number) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          +{member.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                {member.linkedin && (
                  <div className="mt-4">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1A5276] hover:text-[#0F3D5C] text-sm font-medium"
                    >
                      View LinkedIn Profile →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className={`mt-16 grid md:grid-cols-4 gap-8 transition-all duration-1000`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
