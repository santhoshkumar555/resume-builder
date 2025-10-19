'use client';
import React, { useState } from 'react';

// This component will wrap our forms
export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // Closed by default

  return (
    <div className="border border-gray-200 rounded-lg">
      
      {/* --- The Header Button --- */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {/* This is the chevron icon that rotates */}
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>

      {/* --- The Collapsible Content --- */}
      {/* This is where the form (e.g., PersonalInfoForm) will go */}
      {isOpen && (
        <div className="p-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}