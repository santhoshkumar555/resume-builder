import React from 'react';

export default function EducationForm({ education, onChange }) {

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    onChange(updatedEducation);
  };

  const addEducation = () => {
    onChange([...education, { id: Date.now(), school: '', degree: '', startDate: '', endDate: '' }]);
  };

  const removeEducation = (index) => {
    onChange(education.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Education</h3>
      {education.map((edu, index) => (
        <div key={edu.id || index} className="p-4 border border-gray-200 rounded-lg space-y-3 relative">
          <div>
            <label className="block text-sm font-medium text-gray-700">School / University</label>
            <input
              type="text"
              name="school"
              value={edu.school}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              name="degree"
              value={edu.degree}
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
                placeholder="e.g., 2021-01-01"
                value={edu.startDate}
                onChange={(e) => handleChange(e, index)}
                className="mt-1 block w-full input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="text"
                name="endDate"
                placeholder="e.g., 2025-01-01"
                value={edu.endDate}
                onChange={(e) => handleChange(e, index)}
                className="mt-1 block w-full input-field"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeEducation(index)}
            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold"
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        + Add Education
      </button>
    </div>
  );
}