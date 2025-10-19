import React from 'react';

export default function ExperienceForm({ experience, onChange }) {
  
  // Update a specific experience item
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...experience]; // Copy the array
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    onChange(updatedExperience);
  };

  // Add a new, empty experience item
  const addExperience = () => {
    const newExperience = {
      id: Date.now(), // Simple unique ID
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    onChange([...experience, newExperience]);
  };

  // Remove an experience item by its index
  const removeExperience = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    onChange(updatedExperience);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Professional Experience</h3>
      
      {experience.map((job, index) => (
        <div key={job.id || index} className="p-4 border border-gray-200 rounded-lg space-y-3 relative">
          
          {/* Inputs for one job */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={job.company}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full input-field"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="text"
                name="startDate"
                placeholder="e.g., 2025-09-01"
                value={job.startDate}
                onChange={(e) => handleChange(e, index)}
                className="mt-1 block w-full input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="text"
                name="endDate"
                placeholder="e.g., Present"
                value={job.endDate}
                onChange={(e) => handleChange(e, index)}
                className="mt-1 block w-full input-field"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows={3}
              value={job.description}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full input-field"
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeExperience(index)}
            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold"
          >
            X
          </button>
        </div>
      ))}

      {/* Add New Button */}
      <button
        type="button"
        onClick={addExperience}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        + Add Experience
      </button>
    </div>
  );
}

// Helper style for inputs (add this to app/globals.css)
// .input-field {
//   @apply block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm;
// }