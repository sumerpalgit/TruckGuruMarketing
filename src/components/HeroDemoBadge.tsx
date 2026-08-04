// // src/components/HeroDemoBadge.tsx


// export default function HeroDemoBadge() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2 style={{ fontSize: 40, fontWeight: 800, color: "#fff" }}>
//         This is demo
//       </h2>
//       <p style={{ color: "#ccc" }}>Any component content goes here</p>
//     </div>
//   );
// }


// src/components/HeroDemoBadge.tsx

// OLD CODE (select dropdown version) — kept for reference
// "use client";
// import { useState } from "react";
// const CITIES = [
//   "Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata",
//   "Hyderabad", "Pune", "Ahmedabad",
// ];
// export default function HeroDemoBadge() {
//   const [pickup, setPickup] = useState("");
//   const [delivery, setDelivery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleCheckFare = () => {
//     if (!pickup || !delivery) {
//       alert("Please select both pickup and delivery city");
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert(`Checking fare from ${pickup} to ${delivery}...`);
//     }, 800);
//   };
//   return (
//     <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-linear-to-b from-slate-700/60 to-slate-800/60 p-6 shadow-2xl backdrop-blur-sm">
//       <h3 className="mb-5 text-center text-lg font-bold text-white">
//         Book Your Truck in Minutes
//       </h3>
//       <div className="relative mb-3">
//         <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-green-500" />
//         <select
//           value={pickup}
//           onChange={(e) => setPickup(e.target.value)}
//           className="w-full appearance-none rounded-xl bg-white py-3.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none"
//         >
//           <option value="">Select Pickup City</option>
//           {CITIES.map((city) => (
//             <option key={city} value={city}>{city}</option>
//           ))}
//         </select>
//       </div>
//       <div className="relative mb-5">
//         <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-500" />
//         <select
//           value={delivery}
//           onChange={(e) => setDelivery(e.target.value)}
//           className="w-full appearance-none rounded-xl bg-white py-3.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none"
//         >
//           <option value="">Select Delivery City</option>
//           {CITIES.map((city) => (
//             <option key={city} value={city}>{city}</option>
//           ))}
//         </select>
//       </div>
//       <button
//         onClick={handleCheckFare}
//         disabled={loading}
//         className="w-full hover:-translate-y-0.5 font-manrope disabled:opacity-60 disabled:hover:translate-y-0"
//         style={{
//           background: "linear-gradient(120deg, #F47C20, #DD6A10)",
//           border: 0,
//           borderRadius: 14,
//           font: ".96rem",
//           letterSpacing: ".02em",
//           padding: "17px 20px",
//           color: "#fff",
//           fontFamily: "Manrope, sans-serif",
//           fontWeight: 600,
//           boxShadow: "0 12px 26px rgba(244, 124, 32, .4)",
//           transition: "transform .2s var(--tg-ease), box-shadow .25s",
//           cursor: loading ? "not-allowed" : "pointer",
//         }}
//       >
//         {loading ? "Checking..." : "Check Truck Fare"}
//       </button>
//       <p className="mt-4 text-center text-[11.5px] leading-relaxed text-white/60">
//         Get instant rates with transparent pricing confirmed before dispatch —
//         no hidden charges. Only pay at booking confirmation, advance after
//         loading, and the balance upon unloading.
//       </p>
//     </div>
//   );
// }







'use client';

import { useState } from 'react';

export default function HeroDemoBadge() {
  const [pickup, setPickup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckFare = () => {
    if (!pickup || !delivery) {
      alert('Please select both pickup and delivery city');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Checking fare from ${pickup} to ${delivery}...`);
    }, 800);
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-linear-to-b from-slate-700/60 to-slate-800/60 p-6 shadow-2xl backdrop-blur-sm">
      <h3 className="mb-5 text-center text-lg font-bold text-white">
        Book Your Truck in Minutes
      </h3>

      {/* Pickup City */}
      <div className="relative mb-3">
        <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-green-500" />
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Select Pickup City"
          className="w-full rounded-xl bg-white py-3.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Delivery City */}
      <div className="relative mb-5">
        <span className="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-500" />
        <input
          type="text"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
          placeholder="Select Delivery City"
          className="w-full rounded-xl bg-white py-3.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* CTA Button */}
      <button
        onClick={handleCheckFare}
        disabled={loading}
        className="w-full hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        style={{
          background: 'linear-gradient(120deg, #F47C20, #DD6A10)',
          border: 0,
          borderRadius: 14,
          fontSize: '.96rem',
          letterSpacing: '.02em',
          padding: '17px 20px',
          color: '#fff',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          boxShadow: '0 12px 26px rgba(244, 124, 32, .4)',
          transition: 'transform .2s, box-shadow .25s',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Checking...' : 'Check Truck Fare'}
      </button>

      <p className="mt-4 text-center text-[11.5px] leading-relaxed text-white/60">
        Get instant rates with transparent pricing confirmed before dispatch —
        no hidden charges. Only pay at booking confirmation, advance after
        loading, and the balance upon unloading.
      </p>
    </div>
  );
}
