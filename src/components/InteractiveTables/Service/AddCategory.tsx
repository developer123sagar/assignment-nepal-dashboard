import CustomForm from '@/components/Forms/CustomForm';
import { Button } from '@/components/ui/button';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCategoryForm: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Add Category</span>

        <Link to="/category">
          <Button variant="default" size="lg">
            Category List
          </Button>
        </Link>
      </div>
      <CustomForm />
    </>
  );
};

export default AddCategoryForm;
