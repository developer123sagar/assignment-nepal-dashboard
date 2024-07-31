import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '../../TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '../../TableStructure/Columns/createColumn';
import { createActionsColumn } from '../../TableStructure/Columns/createActionsColumn';
import ActualTable from '../../TableStructure/ActualTable';
import { useEffect, useState } from 'react';
import { getData } from '@/services/api/APIs';
import toast from 'react-hot-toast';
import { IEmployer } from 'types';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const columns: ColumnDef<IEmployer>[] = [
  createCheckboxColumn<IEmployer>(),
  createColumn('name', 'Name'),
  createColumn('merchantKey', 'Merchant Code'),
  createColumn('Vat_no', 'Vat'),
  createColumn('joinDate', 'Joining Date'),
  createColumn('email', 'Email'),
  createColumn('status', 'Status'),
  createActionsColumn<IEmployer>(),
];

const CompanyListTable = ({ userId }: { userId?: string }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await getData('employer/accepted');
        if (res.status === 200) {
          setData(res.data.data);
        }
      } catch (error: any) {
        toast.error(error.message || 'Something went wrong');
      }
    })();
  }, []);

  return (
    <>
      <ActualTable
        initialUserFilter={userId}
        data={data}
        columns={columns}
        button={
          <Button onClick={() => navigate('/company/company-list/add-company')}>
            Add Company
          </Button>
        }
      />
    </>
  );
};

export default CompanyListTable;
