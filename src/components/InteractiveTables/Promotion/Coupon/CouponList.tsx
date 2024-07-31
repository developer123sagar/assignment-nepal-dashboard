import { ColumnDef } from '@tanstack/react-table';
import { createCheckboxColumn } from '@/components/InteractiveTables/TableStructure/Columns/createCheckboxColumn';
import { createColumn } from '@/components/InteractiveTables/TableStructure/Columns/createColumn';
import { createActionsColumn } from '@/components/InteractiveTables/TableStructure/Columns/createActionsColumn';
import { Payment } from '@/components/InteractiveTables/TableStructure/DataStructure';
import ActualTable from '@/components/InteractiveTables/TableStructure/ActualTable';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Payment>[] = [
  createCheckboxColumn(),
  createColumn('code', 'Code'),
  createColumn('discount', 'Discount'),
  createColumn('discountType', 'Discount Type'),
  createColumn('expireDate', 'Exprire Date'),
  createColumn('status', 'Status', true),
  createActionsColumn(),
];

export const data: Payment[] = [
  {
    id: '1',
    code: 'FKJDSAFLJ',
    discount: '$3.00',
    discountType: 'Fixed',
    expireDate: 'Sept 30, 2025',
    status: 'active',
  },
  {
    id: '2',
    code: 'FKJDSAFLJ',
    discount: '$3.00',
    discountType: 'Percentage',
    expireDate: 'Sept 30, 2025',
    status: 'active',
  },
];

const CouponListTable = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Coupon List</span>

        <Link to="/add-coupon">
          <Button variant="default" size="lg">Add Coupon</Button>
        </Link>
      </div>
      <ActualTable initialUserFilter={userId} data={data} columns={columns} />
    </>
  );
};

export default CouponListTable;
