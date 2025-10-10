import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Script from "next/script";

export default async function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-12 md:py-16">
      {/* JSON-LD structured data for Job pages */}
      <Script
        id="job-opening-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Job Opening | FinByz Tech",
            description:
              "Explore open job opportunities at FinByz Tech across engineering, product and operations.",
            url: "https://finbyz.tech/jobs",
            publisher: {
              "@type": "Organization",
              name: "FinByz Tech Pvt Ltd",
              url: "https://finbyz.tech",
              logo: {
                "@type": "ImageObject",
                url: "https://finbyz.tech/files/FinbyzLogo.png",
              },
            },
          }),
        }}
      />

      {/* Breadcrumbs for SEO */}
      <Script
        id="job-opening-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://finbyz.tech/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Jobs",
                item: "https://finbyz.tech/jobs",
              },
            ],
          }),
        }}
      />
      <Header />
      {children}
      <Footer />
    </main>
  );
}


