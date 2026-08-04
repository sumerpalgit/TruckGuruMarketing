// // src/components/HeroSpacerInjector.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import HeroDemoBadge from "./HeroDemoBadge";

// export default function HeroSpacerInjector() {
//   const [target, setTarget] = useState<Element | null>(null);

//   useEffect(() => {
//     const el = document.querySelector(".cms-content .hero-spacer");
//     if (el) setTarget(el);
//   }, []);

//   if (!target) return null;

//   return createPortal(<HeroDemoBadge />, target);
// }