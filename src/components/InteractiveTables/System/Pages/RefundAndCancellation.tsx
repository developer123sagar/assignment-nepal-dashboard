
import CustomForm from '@/components/Forms/CustomForm';

const RefundAndCancellation = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Refund and Cancellation Page</span>
      </div>
      <CustomForm api='api/refund' />
    </>
  );
};

export default RefundAndCancellation;
