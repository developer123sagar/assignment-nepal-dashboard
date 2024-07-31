import CustomForm from '@/components/Forms/CustomForm';
import { Button } from '@/components/ui/button';

import React from 'react';
import { Link } from 'react-router-dom';

const AddTaxForm: React.FC = () => {

  return (

    <>
    <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Tax List</span>

        <Link to="/tax">
          <Button variant="default" size="lg">Tax List</Button>
        </Link>
      </div>
      <CustomForm api='api/tax' />
    </>

  );
};

export default AddTaxForm;
