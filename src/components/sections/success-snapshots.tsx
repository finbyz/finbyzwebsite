const palette = [
  { border: "#1A5276", badge: "#1A5276", badgeBg: "#EAF1F8", btn: "#1A5276" }, // Blue
  { border: "#FF8C00", badge: "#FF8C00", badgeBg: "#FFF4E5", btn: "#FF8C00" }, // Orange
  { border: "#8E44AD", badge: "#8E44AD", badgeBg: "#F3EAF8", btn: "#8E44AD" }, // Purple
];

const cases = [
  {
    title: "3x Lead Conversion",
    subtitle: "Sales Process Optimization",
    challenge: "Scattered sales follow-ups",
    result: "3x Lead Conversion with ERP-Linked AI Tasks",
    badge: "Success Story",
    icon: "📈",
    palette: palette[0]
  },
  {
    title: "75% Time Reduction",
    subtitle: "Report Automation",
    challenge: "Manual report creation",
    result: "Auto-Reports Delivered in 1/4th Time via Workflow Automation",
    badge: "Success Story",
    icon: "⏱️",
    palette: palette[1]
  },
  {
    title: "40% Cost Savings",
    subtitle: "Process Automation",
    challenge: "Redundant manual processes",
    result: "40% Operational Cost Reduction through Intelligent Automation",
    badge: "Success Story",
    icon: "✅",
    palette: palette[2]
  }
];

export default function SuccessSnapshots() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1A5276" }}>
            Success Snapshots
          </h2>
          <p className="text-xl text-gray-700">
            Real challenges, measurable results
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col border-t-4"
              style={{ borderTopColor: c.palette.border }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full mr-3"
                  style={{ background: c.palette.badgeBg }}
                >
                  <span style={{ fontSize: 22, color: c.palette.badge }}>{c.icon}</span>
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: "#1A5276" }}>{c.title}</div>
                  <div className="text-sm text-gray-500">{c.subtitle}</div>
                </div>
              </div>
              <div className="mb-2">
                <span className="font-semibold" style={{ color: "#FF8C00" }}>Challenge:</span>
                <span className="text-gray-700 ml-1">{c.challenge}</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold" style={{ color: c.palette.border }}>Result:</span>
                <span className="text-gray-700 ml-1">{c.result}</span>
              </div>
              <div className="mt-auto">
                <span
                  className="inline-block px-4 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ background: c.palette.btn }}
                >
                  {c.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow"
            style={{ background: "#1A5276" }}
          >
            Read Full Case Studies
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-8 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#1A5276" }}></span>
            200+ Success Stories
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#FF8C00" }}></span>
            95% Success Rate
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#8E44AD" }}></span>
            Proven Results
          </span>
        </div>
      </div>
    </section>
  );
}