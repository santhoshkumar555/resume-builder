import React from 'react';

export default function ImageUpload({ imageUrl, onImageChange }) {

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Create a local URL for the selected file
      const newImageUrl = URL.createObjectURL(file);
      onImageChange(newImageUrl);
    }
  };

  const removeImage = () => {
    onImageChange(null);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">User Image</label>
      
      {/* Show the preview and Remove button if an image is loaded */}
      {imageUrl ? (
        <div className="flex items-center gap-4">
          <img src={imageUrl} alt="User preview" className="w-20 h-20 rounded-full object-cover" />
          <button
            type="button"
            onClick={removeImage}
            className="bg-red-500 text-white py-1 px-3 rounded-md text-sm hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ) : (
        // Show the file input if no image is loaded
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      )}
    </div>
  );
}