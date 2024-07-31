
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';



const Settings = ({ userId }: { userId?: string }) => {
  console.log(userId);

  return (
    <>
      <div className="flex justify-between items-center mb-4 bg-gray-3 dark:bg-graydark p-5 rounded-2xl">
        <span className="text-2xl text-black">Frontend Settings</span>

        <Link to="/add-tax">
          <Button variant="default" size="lg">
            Frontend Settings
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Settings;
