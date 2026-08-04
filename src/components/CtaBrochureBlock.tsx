'use client';

import Link from "next/link";

interface Props {
  phone?: string;
  pdfUrl?: string;
  docUrl?: string;
}

export default function CtaBrochureBlock({
  phone = '72020 45678',
  pdfUrl = '#',
  docUrl = '#',
}: Props) {
  return (
    <div className="w-full px-4 py-8">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4">
      {/* Left — CTA */}
      <div
        className="flex-1 p-8 flex flex-col justify-center gap-5 rounded"
        style={{
          background: '#0d1b2a',
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 8px)',
        }}
      >
        <span
          className="self-start text-xs font-semibold tracking-widest text-white border border-white/30 rounded-full px-3 py-1"
        >
          LET&apos;S TALK
        </span>

        <h2 className="text-2xl font-extrabold text-white uppercase leading-tight">
          Need a Truck? Get Your Rate Now
        </h2>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/60">Call Us For Instant Quotes</p>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-orange-400 font-bold text-lg">
              {phone}
            </a>
          </div>
        </div>

        <Link
          href="/contact"
          className="self-start px-6 py-2.5 text-xs font-bold text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-600 transition-colors rounded"
        >
          Contact Us
        </Link>
      </div>

      {/* Right — Download Brochure */}
      <div className="flex-1 bg-gray-200 p-8 flex flex-col justify-center gap-6 rounded">
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-gray-800">
            Download Brochure
          </h3>
          <div className="mt-1.5 w-8 h-0.5 bg-red-500" />
          <div className="mt-0.5 w-2 h-0.5 bg-red-500" />
        </div>

        <div className="flex gap-4">
          {/* PDF */}
          <a
            href={pdfUrl}
            download
            className="flex-1 flex flex-col items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400 transition-colors py-6 rounded text-center"
          >
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Download PDF</span>
          </a>

          {/* DOC */}
          <a
            href={docUrl}
            download
            className="flex-1 flex flex-col items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400 transition-colors py-6 rounded text-center"
          >
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Download Doc</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
