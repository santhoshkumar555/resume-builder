import React from 'react';

// Define our available colors and templates
const COLORS = [
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Purple', hex: '#9333ea' },
  { name: 'Red', hex: '#e11d48' },
  { name: 'Gray', hex: '#4b5563' },
];

const TEMPLATES = [
  { id: 'professional', name: 'Professional' }, // Renamed from 'modern'
  { id: 'sidebar', name: 'Sidebar' },         // Our new template
  { id: 'classic', name: 'Classic' },
];

export default function StyleControls({ accentColor, template, onColorChange, onTemplateChange }) {
  return (
    <div className="space-y-6">
      
      {/* Accent Color Picker */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Accent Color</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <button
              key={color.hex}
              type="button"
              title={color.name}
              onClick={() => onColorChange(color.hex)}
              className={`h-10 w-10 rounded-full border-2 ${accentColor === color.hex ? 'border-black' : 'border-transparent'}`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      {/* Template Switcher */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Template</h3>
        <div className="flex flex-col space-y-2">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onTemplateChange(t.id)}
              className={`w-full py-2 px-4 rounded-md text-left font-medium ${
                template === t.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}