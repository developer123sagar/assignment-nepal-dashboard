import { formatTimestamp } from '@/helpers';
import { RootState, useAppSelector } from '@/redux/store';
import { MdLocationPin } from 'react-icons/md';
import { ITask } from 'types';

const ViewTaskCard = () => {
  const selectedData: ITask = useAppSelector(
    (state: RootState) => state.task.selectedData,
  );

  const { role } = useAppSelector((state: RootState) => state.task);

  return (
    <div className="h-full px-4 relative">
      <div className="w-full flex justify-between mb-4">
        <div className="flex items-center gap-1 py-1.5 px-2.5 bg-gray/80 w-fit">
          <MdLocationPin className="text-boxdark" />
          <span className="text-graydark">Kathmandu</span>
        </div>
      </div>
      <div>
        <h1 className="capitalize md:text-3xl my-2 text-lime-800">
          {selectedData?.taskName}
        </h1>
        <div className="flex justify-between">
          <div className="w-full flex justify-between mt-1">
            <span className="text-sm text-graydark">
              Published {formatTimestamp(selectedData?.createdAt!)}
            </span>
            {role === 'employer' && (
              <span className="text-gray-500 text-sm">
                Project Amount: <span>Rs. {selectedData?.projectAmount}</span>
              </span>
            )}
          </div>
          <ul className="absolute top-2 right-3 flex flex-col text-sm">
            <li className="text-base hover:underline">
              <span className="font-normal text-graydark">
                Posted by:&nbsp;&nbsp;
              </span>
              <span className="capitalize">{selectedData?.clientName}</span>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="underline font-medium text-xl mb-2">About the task</h2>
          <div className="browser-css">
            {selectedData?.taskDescription && selectedData.taskDescription}
          </div>
        </div>
        {selectedData?.fieldType?.length! > 0 && (
          <div className="mt-8">
            <h1 className="text-graydark text-xl">Fieldtype</h1>
            <span className="capitalize text-graydark">
              {selectedData?.fieldType[0]}
            </span>
          </div>
        )}
        <div className="mt-8">
          <h1 className="text-graydark text-xl">Skills required</h1>
          <div className="w-full flex gap-2 mt-2">
            {selectedData?.skills.map((skill) => (
              <div
                key={skill}
                className="text-graydark px-5 text-nowrap truncate py-1 bg-gray"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskCard;
