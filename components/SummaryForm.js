'use client';
import React, { useState } from 'react';

// We now accept an `onEnhance` prop and pass the `onChange` prop through
export default function SummaryForm({ summary, onChange, onEnhance }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleEnhanceClick = async () => {
    setIsLoading(true);
    await onEnhance(); // Call the parent function
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Professional Summary</h3>
        <button
          type="button"
          onClick={handleEnhanceClick}
          disabled={isLoading}
          className="bg-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-full hover:bg-purple-700 disabled:bg-gray-400"
        >
          {isLoading ? 'Generating...' : '✨ AI Enhance'}
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <textarea
          name="summary"
          rows={5}
          value={summary}
          onChange={handleChange}
          className="mt-1 block w-full input-field"
        />
      </div>
    </div>
  );
}