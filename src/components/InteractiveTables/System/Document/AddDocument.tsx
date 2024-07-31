import CustomForm from '@/components/Forms/CustomForm';
import { Button } from '@/components/ui/button';

import React from 'react';
import { Link } from 'react-router-dom';

const AddDocument: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Add Document</span>

        <Link to="/document-list">
          <Button variant="default" size="lg">
            Document List
          </Button>
        </Link>
      </div>
      <CustomForm api='api/document' />
    </>
  );
};

export default AddDocument;
