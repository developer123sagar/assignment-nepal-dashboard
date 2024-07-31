import React from 'react';

import CustomForm from '@/components/Forms/CustomForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AddSubCategoryForm: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Add Sub Category</span>

        <Link to="/category">
          <Button variant="default" size="lg">
            Sub Category List
          </Button>
        </Link>
      </div>
      <CustomForm api='api/category' />
    </>
  );
};

export default AddSubCategoryForm;
