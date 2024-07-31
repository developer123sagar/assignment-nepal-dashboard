import CustomForm from '@/components/Forms/CustomForm';

const TermsAndConditions = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Terms and Conditions Page</span>
      </div>
      <CustomForm api="termsAndCondition" />
    </>
  );
};

export default TermsAndConditions;
