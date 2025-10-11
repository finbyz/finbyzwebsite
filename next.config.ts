// import type { NextConfig } from "next";


// const nextConfig: NextConfig = {
//   /* config options here */
//   eslint:{
//     ignoreDuringBuilds:true
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'via.placeholder.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'source.unsplash.com',
//         port: '',
//         pathname: '/**',
//       }
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/frappe/:path*',
//         destination: 'https://finbyz.tech/api/method/:path*',
//       },
//     ];
//   },
// };

// export default nextConfig;



/**
@type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'web.finbyz.tech',
        port: '',
        pathname: '/api/fb/n/**',
        search: '',
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/fb/n/:path*",
        destination: "https://finbyz.tech/:path*",

        
      },
      {
        source: "/api/fb/:path*",
        destination: "https://finbyz.tech/api/method/:path*",
      },
      {
        source: "/web-apo/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

export default nextConfig;