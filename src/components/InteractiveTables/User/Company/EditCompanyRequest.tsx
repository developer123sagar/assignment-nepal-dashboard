import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DefaultLayout from '@/layout/DefaultLayout';
import { RootState, useAppSelector } from '@/redux/store';
import { createPost } from '@/services/api/APIs';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BiLoaderCircle } from 'react-icons/bi';

const EditCompanyRequest = () => {
  const { selectedData } = useAppSelector((state: RootState) => state.task);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleStatusUpdate = async () => {
    setLoading(true);
    try {
      const res = await createPost(
        `employer/status/${selectedValue}?_id=${selectedData?._id}`,
        undefined,
      );

      if (res.status === 200) {
        toast.success(res.data.message || 'Success');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Edit Company Request" />
      <div className="flex flex-col gap-y-7 w-[60%]">
        <Input value={selectedData?.name} disabled className="basis-[49%]" />
        <Input value={selectedData?.email} disabled className="basis-[49%]" />
        <Input value={selectedData?.status} disabled className="basis-[49%]" />
        <Input value={selectedData?.Vat_no} disabled className="basis-[49%]" />
        <div className="basis-[49%]">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="min-w-full">
              <SelectValue
                placeholder="Status"
                className="text-gray-400 placeholder:text-gray-400"
              />
            </SelectTrigger>
            <SelectContent className="bg-white w-[460px]">
              <SelectItem className="cursor-pointer" value="Accepted">
                Accept
              </SelectItem>
              <SelectItem className="cursor-pointer" value="rejected">
                Reject
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        onClick={handleStatusUpdate}
        type="button"
        className="mt-6 px-5 w-[140px]"
        disabled={loading}
      >
        {loading ? (
          <div className="flex gap-1 items-center w-fit mx-auto">
            <BiLoaderCircle className="animate-spin w-fit mx-auto" size={24} />
            <span>Submitting...</span>
          </div>
        ) : (
          'Submit'
        )}
      </Button>
    </DefaultLayout>
  );
};

export default EditCompanyRequest;
