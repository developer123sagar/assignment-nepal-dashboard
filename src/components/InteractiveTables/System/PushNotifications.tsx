import CustomForm from '@/components/Forms/CustomForm';

const PushNotifications = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Push Notifications</span>
      </div>
      <CustomForm api='api/push' />
    </>
  );
};

export default PushNotifications;
