// import { useState, useRef, useEffect } from "react";
// import { TiltCard, CursorTrail, ScrollRevealDemo, ImageDistortion } from "../components/animatedItems";
// import {visualItems} from "../data/lab";

// const builtItems = [
//   {
//     component: <TiltCard />,
//     title: "3D tilt card",
//     desc:  "Perspective rotation + dynamic shine overlay tracks cursor position.",
//     stack: "CSS perspective · JS mouse tracking",
//   },
//   {
//     component: <CursorTrail height={200} />,
//     title: "Cursor trail",
//     desc:  "Spring-physics chain of dots follows cursor with natural lag.",
//     stack: "Canvas 2D · spring physics · rAF",
//   },
//   {
//     component: <ScrollRevealDemo />,
//     title: "Scroll reveal",
//     desc:  "Words animate in one by one as they enter the viewport.",
//     stack: "IntersectionObserver · CSS transforms",
//   },
//   {
//     component: (
//       <div className="flex items-center justify-center w-full h-full">
//         <ImageDistortion width={240} height={150} />
//       </div>
//     ),
//     title: "Image distortion",
//     desc:  "Pixel-level sine wave displacement radiates from cursor.",
//     stack: "Canvas 2D · pixel manipulation",
//   },
// ];

// function MasonryItem({ src, alt, label, span }) {
//   const [hovered, setHovered] = useState(false);

//   const spanClass =
//     span === "tall" ? "sm:row-span-2" :
//     span === "wide" ? "sm:col-span-2" : "";

//   return (
//     <div
//       className={`${spanClass} relative overflow-hidden rounded-2xl cursor-pointer bg-stone-100`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
//         className={`w-full h-full object-cover block transition-transform duration-500 ease-out ${
//           hovered ? "scale-105" : "scale-100"
//         }`}
//       />
//       <div className={`absolute inset-0 flex items-end p-4 bg-black/40 transition-opacity duration-300 ${
//         hovered ? "opacity-100" : "opacity-0"
//       }`}>
//         <span className="text-white text-xs font-medium tracking-wide">{label}</span>
//       </div>
//     </div>
//   );
// }

// function BuiltCard({ component, title, desc, stack }) {
//   return (
//     <div className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden">
//       <div className="bg-stone-50 border-b border-stone-200/80 min-h-[180px] sm:min-h-[210px] flex flex-col items-center justify-center p-6 overflow-hidden">
//         {component}
//       </div>
//       <div className="p-4 flex flex-col gap-1.5">
//         <div className="flex items-start justify-between gap-2">
//           <h3 className="text-sm font-medium text-neutral-900">{title}</h3>
//           <span className="text-[10px] font-mono text-stone-300 shrink-0 pt-0.5 hidden sm:block">{stack}</span>
//         </div>
//         <p className="text-xs text-stone-400 leading-relaxed">{desc}</p>
//         {/* Stack label shown below on mobile */}
//         <span className="text-[10px] font-mono text-stone-300 pt-0.5 sm:hidden">{stack}</span>
//       </div>
//     </div>
//   );
// }

// const TABS = [
//   { id: "built",  label: "Built"  },
//   { id: "visual", label: "Visual" },
// ];

// function TabSwitcher({ active, onChange }) {
//   const refs = useRef({});
//   const indicatorRef = useRef(null);

//   useEffect(() => {
//     const el = refs.current[active];
//     const ind = indicatorRef.current;
//     if (!el || !ind) return;
//     ind.style.left  = el.offsetLeft + "px";
//     ind.style.width = el.offsetWidth + "px";
//   }, [active]);

//   return (
//     <div className="inline-flex relative bg-stone-100 rounded-full p-1">
//       <div
//         ref={indicatorRef}
//         className="absolute top-1 h-[calc(100%-8px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out"
//       />
//       {TABS.map((tab) => (
//         <button
//           key={tab.id}
//           ref={(el) => (refs.current[tab.id] = el)}
//           onClick={() => onChange(tab.id)}
//           className={`relative z-10 px-5 py-2 text-[13px] rounded-full transition-colors duration-200 cursor-pointer bg-transparent border-none ${
//             active === tab.id
//               ? "text-neutral-900 font-medium"
//               : "text-stone-400 font-normal"
//           }`}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default function Lab() {
//   const [tab, setTab] = useState("built");
//   const showBuilt  = tab === "built";
//   const showVisual = tab === "visual";

//   return (
//     <main className="page-grid">
//       <div className="px-5 sm:px-[6%] lg:px-[10%]">

//         {/* Header */}
//         <div className="pt-10 sm:pt-16 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-12 mb-8 sm:mb-0">
//           <p className="text-xl sm:text-2xl lg:text-3xl text-black font-plusJakarta font-regular leading-relaxed max-w-3xl sm:mb-8">
//             A curated space for the tiny things — visual studies, experiments, and playful explorations that inspire my larger work.
//           </p>
//           <div className="shrink-0">
//             <TabSwitcher active={tab} onChange={setTab} />
//           </div>
//         </div>

//         {/* Built section */}
//         {showBuilt && (
//           <section className="mb-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {builtItems.map((item, i) => (
//                 <BuiltCard key={i} {...item} />
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Visual / Masonry section */}
//         {showVisual && (
//           <section className="pb-16">
//             {/* Single column on mobile, masonry on sm+ */}
//             <div className="flex flex-col gap-3 sm:hidden">
//               {visualItems.map((item, i) => (
//                 <div key={i} className="relative overflow-hidden rounded-2xl cursor-pointer bg-stone-100 h-[220px]">
//                   <img
//                     src={item.src}
//                     alt={item.alt}
//                     loading="lazy"
//                     className="w-full h-full object-cover block"
//                   />
//                   <div className="absolute inset-0 flex items-end p-4 bg-black/30">
//                     <span className="text-white text-xs font-medium tracking-wide">{item.label}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Masonry grid — sm and up */}
//             <div
//               className="hidden sm:grid gap-2.5"
//               style={{ gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "210px" }}
//             >
//               {visualItems.map((item, i) => (
//                 <MasonryItem key={i} {...item} />
//               ))}
//             </div>
//           </section>
//         )}

//       </div>
//     </main>
//   );
// }

import { useLocation, Link } from 'react-router-dom';

export default function Lab() {
  return (
    <div className="page-grid px-5 sm:px-[8%] lg:px-[15%] min-h-[100vh]">
      <div class="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className='text-[100px]'>🚧</h1>
        <h1 className="font-plusJakarta font-bold text-[100px]">Under Construction :)</h1>
        <p classname="font-inter font-light text-secondary-text text-md">I'm working on something special for you. In the mean time, check out my <Link to='/case-studies' className='underline decoration-solid hover:text-black transition'>Case studies</Link></p>
      </div>
    </div>
  )
}