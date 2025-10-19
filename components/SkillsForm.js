import React from 'react';

export default function SkillsForm({ skills, onChange }) {

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], name: value };
    onChange(updatedSkills);
  };

  const addSkill = () => {
    onChange([...skills, { id: Date.now(), name: '' }]);
  };

  const removeSkill = (index) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={skill.id || index} className="flex gap-2">
            <input
              type="text"
              name="name"
              value={skill.name}
              onChange={(e) => handleChange(e, index)}
              className="block w-full input-field"
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="bg-red-500 text-white rounded-md h-10 w-10 flex items-center justify-center font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addSkill}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        + Add Skill
      </button>
    </div>
  );
}