import React from 'react';

export default function PartnersCarousel({ partners = [] }) {
  return (
    <div className="py-6">
      <div className="overflow-x-auto">
        <div className="flex gap-6 items-center px-4">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center 
                         backdrop-blur-sm rounded-xl 
                          hover:scale-105 transition-transform duration-300"
            >
              <img src={p} alt={`partner-${idx}`} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
