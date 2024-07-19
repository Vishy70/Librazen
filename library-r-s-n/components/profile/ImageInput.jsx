'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ImageInput = ({ id, name, label, onChange, previewClassName, ...props }) => {
  const [preview, setPreview] = useState(null);
  const [previewWidth, setPreviewWidth] = useState(100); // Default width
  const [previewHeight, setPreviewHeight] = useState(100); // Default height
  console.log(`Preview ${preview}`)
  console.log(`Preview width ${previewWidth}`)
  console.log(`Preview height ${previewHeight}`)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);

        // Create a new image element to get the dimensions
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setPreviewWidth(img.width);
          setPreviewHeight(img.height);
        };
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        {...props}
      />
      {preview && (
        <div className={`mt-2 max-w-xs rounded-full ${previewClassName}`}>
          <Image
            src={preview}
            alt="Preview"
            width={previewWidth}
            height={previewHeight}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
