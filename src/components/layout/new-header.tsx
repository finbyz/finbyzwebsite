// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, Menu, X, LogIn } from "lucide-react";
// import { useState } from "react";
// import { NAV } from "@/config/header-nav";

// export default function Header() {
//   const [open, setOpen] = useState<string | null>(null);
//   const [mobile, setMobile] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-14">
//           <Link href="/" className="flex items-center">
//             <Image src="/FinByz Logo 2025 copy.png" width={120} height={32} alt="FinByz" />
//           </Link>

//           {/* Desktop */}
//           <div className="hidden lg:flex items-center gap-6">
//             {NAV.map(menu => (
//               <div
//                 key={menu.title}
//                 className="relative"
//                 onMouseEnter={() => setOpen(menu.title)}
//                 onMouseLeave={() => setOpen(null)}
//               >
//                 {menu.items ? (
//                   <>
//                     <button className="flex items-center gap-1 hover:text-orange-400">
//                       {menu.title}
//                       <ChevronDown size={14} />
//                     </button>

//                     {open === menu.title && (
//                       <div className="absolute top-full mt-2 bg-white text-gray-900 rounded-lg shadow-xl w-56">
//                         {menu.items.map(i => (
//                           <Link
//                             key={i.href}
//                             href={i.href}
//                             className="block px-4 py-3 hover:bg-gray-100"
//                           >
//                             {i.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link href={menu.href!} className="hover:text-orange-400">
//                     {menu.title}
//                   </Link>
//                 )}
//               </div>
//             ))}

//             <Link href="/login" className="flex items-center gap-1 hover:text-orange-400">
//               <LogIn size={16} /> Login
//             </Link>
//           </div>

//           {/* Mobile */}
//           <button className="lg:hidden" onClick={() => setMobile(true)}>
//             <Menu size={24} />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobile && (
//         <div className="fixed inset-0 bg-white z-50 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <Image src="/FinByz Logo 2025 copy.png" width={120} height={32} alt="FinByz" />
//             <X onClick={() => setMobile(false)} />
//           </div>

//           {NAV.map(menu => (
//             <div key={menu.title} className="mb-4">
//               <p className="font-semibold mb-2">{menu.title}</p>
//               {menu.items?.map(i => (
//                 <Link key={i.href} href={i.href} className="block py-2 text-gray-700">
//                   {i.label}
//                 </Link>
//               ))}
//               {menu.href && <Link href={menu.href} className="block py-2">{menu.title}</Link>}
//             </div>
//           ))}

//           <Link href="/login" className="block mt-6 font-semibold text-orange-600">
//             Login
//           </Link>
//         </div>
//       )}
//     </>
//   );
// }
