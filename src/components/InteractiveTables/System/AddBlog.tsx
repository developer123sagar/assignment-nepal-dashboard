import CustomForm from '@/components/Forms/CustomForm';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddBlogForm: React.FC = () => {


  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Add Blog</span>

        <Link to="/blog">
          <Button variant="default" size="lg">
            Blog List
          </Button>
        </Link>
      </div>
      <CustomForm />

    </>
  );
};

export default AddBlogForm;
