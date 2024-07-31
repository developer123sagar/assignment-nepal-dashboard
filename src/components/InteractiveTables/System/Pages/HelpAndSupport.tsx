
import CustomForm from '@/components/Forms/CustomForm';

const HelpAndSupport = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Help and Support Page</span>
      </div>
      <CustomForm api='api/help' />
    </>
  );
};

export default HelpAndSupport;
