import React from 'react';

interface GalleryItem {
  link: string
  title: string
}

interface RelatedRead {
  route: string
  description: string
  image: string
  title: string
  reference_name: string
}

interface FinbyzGalleryProps {
  galleryItems: GalleryItem[]
  relatedReads: RelatedRead[]
}




async function getLinks(name: string): Promise<FinbyzGalleryProps> {
  const url = `https://finbyz.tech/api/method/frappe.desk.form.load.getdoc?doctype=Web%20Page&name=${name}&fields=["gallery_links"]`;
  
  const response = await fetch(url, {
    method: 'GET',
    cache:"force-cache",
    headers: {
      'Authorization': `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
  });

  const jsonData = await response.json();
  const data = jsonData.docs[0];
  console.log(jsonData.docs[0])

  return {
    relatedReads: data?.related_links || [],
    galleryItems: data?.gallery_links || [],
  }
}


const FinbyzGallery = async () => {
  // Duplicate items for seamless infinite scroll
  const {relatedReads,galleryItems} = await getLinks('hire-web-application-developer-in-usa-canada-uk-|-website-designing-company-|-finbyz-tech')
    console.log(relatedReads)
  const duplicatedGalleryItems = [...galleryItems, ...galleryItems];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Gallery</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="overflow-hidden p-8">
            <div className="overflow-hidden">
              <div
                className="flex gap-6 animate-scroll"
              >
                {duplicatedGalleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 group cursor-pointer"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <span className="text-4xl font-bold">{item.title.charAt(0)}</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <a href={item.link} className="text-blue-600 text-sm hover:underline">Learn more →</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Reads Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Related Read</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedReads.map((read, index) => (
              <a
                key={index}
                href={read.route}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1 block"
              >
                <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-full group-hover:animate-shimmer"></div>
                  </div>
                  <img src={`api/fb/n${read.image}`} alt="" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {read.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {read.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                      View More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style> */}
    </div>
  );
};

export default FinbyzGallery;