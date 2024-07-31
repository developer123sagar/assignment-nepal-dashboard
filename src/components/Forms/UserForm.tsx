import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const UserForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add your form submission logic here
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchInitialImage = async () => {
      try {
        const response = await fetch('../../../../public/stock-image.png');
        if (!response.ok) {
          throw new Error('Failed to fetch initial image');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setSelectedImage(imageUrl);
      } catch (error) {
        console.error('Error fetching initial image:', error);
      }
    };

    fetchInitialImage();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-4 p-4 bg-gray-100 rounded-md shadow-md"
    >
      <div className="flex-1 space-y-4 font-semibold">
        <div className="font-semibold text-3xl text-graydark">
          Personal Information
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="name" className="text-lg font-semibold">
              Name
            </Label>
            <Input id="name" type="text" placeholder="Input Your Name" />
          </div>
          <div className="flex-1">
            <Label htmlFor="number" className="text-lg font-semibold">
              Number
            </Label>
            <Input id="number" type="text" placeholder="Input Your Number" />
          </div>
        </div>

        <div className="flex-1">
          <Label htmlFor="email" className="text-lg font-semibold">
            Email
          </Label>
          <Input id="email" type="email" placeholder="Input Your Email" />
        </div>

        <div className="flex-1">
          <Label htmlFor="username" className="text-lg font-semibold">
            Username
          </Label>
          <Input id="username" type="text" placeholder="Input Your Username" />
        </div>

        <div className="flex-1">
          <Label htmlFor="bio" className="text-lg font-semibold">
            Enter your bio description
          </Label>
          <Input id="bio" type="text" placeholder="Input Your Bio" />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-400 text-white text-lg font-semibold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>

      <div className="w-1/3 space-y-4 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <Label htmlFor="imageUpload" className="font-semibold text-3xl">
            Upload Picture
          </Label>
          <div className="border-body">
            <Input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="mt-5"
              onChange={handleImageUpload}
            />
            {selectedImage && (
              <div className="mt-4 flex justify-center ">
                <img
                  src={selectedImage}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 p-1 bg-red-400 text-white text-lg font-semibold rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 p-2 bg-blue-400 text-white text-lg font-semibold rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
