import React from 'react';

export default function ProjectsForm({ projects, onChange }) {
  
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [name]: value };
    onChange(updatedProjects);
  };

  const addProject = () => {
    onChange([...projects, { id: Date.now(), name: '', description: '' }]);
  };

  const removeProject = (index) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Projects</h3>
      {projects.map((project, index) => (
        <div key={project.id || index} className="p-4 border border-gray-200 rounded-lg space-y-3 relative">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Name</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows={3}
              value={project.description}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full input-field"
            />
          </div>
          <button
            type="button"
            onClick={() => removeProject(index)}
            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold"
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        + Add Project
      </button>
    </div>
  );
}