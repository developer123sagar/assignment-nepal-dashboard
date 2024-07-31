import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import { createPost } from '@/services/api/APIs';
import { BiLoaderCircle } from 'react-icons/bi';

const CustomForm = ({ api }: { api: string }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createPost(api, formData);
      console.log(res);
      if (res.status === 200) {
        toast.success(
          res.data.message || res.data.msg || 'Successfully created !',
        );
      }
    } catch (err: any) {
      toast.error(err.message || 'Someting went wrong !');
    } finally {
      setLoading(false);
    }
  };

  const handleBoldClick = () => {
    document.execCommand('bold');
  };

  const handleItalicClick = () => {
    document.execCommand('italic');
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline');
  };

  const handleHeadingClick = (level: number) => {
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      const headingElement = document.createElement(`h${level}`);
      headingElement.appendChild(range.extractContents());
      headingElement.style.fontSize = `${24 - level * 2}px`; // Adjust the font size as needed
      range.insertNode(headingElement);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-gray rounded-md shadow-md"
    >
      <div className="flex space-x-4">
        <div className="flex-1">
          <Input
            type="text"
            required
            placeholder="Title"
            value={formData?.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
      </div>

      {/* text editor */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <div className="flex items-center mt-1">
          <button
            onClick={handleBoldClick}
            className="mx-1 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={handleItalicClick}
            className="mx-1 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <em>I</em>
          </button>
          <button
            onClick={handleUnderlineClick}
            className="mx-1 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <u>U</u>
          </button>
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => handleHeadingClick(level)}
              className="mx-1 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              H{level}
            </button>
          ))}
        </div>
        <textarea
          className="mt-1 block w-full p-2 border border-bodydark rounded-md h-32"
          name="description"
          id="description"
          required
          cols={5}
          rows={5}
          value={formData?.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-400 text-white text-lg rounded-md hover:bg-blue-600"
      >
        {loading ? (
          <div className="flex gap-1 items-center w-fit mx-auto">
            <BiLoaderCircle className="animate-spin w-fit mx-auto" size={24} />
            <span>Submitting...</span>
          </div>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
};

export default CustomForm;
