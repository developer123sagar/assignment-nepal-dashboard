import { PROVIDER } from '../../types/tableOneData';
import ClientOne from '../../images/customer/customer-1.png';
import Clienttwo from '../../images/customer/customer-2.png';

const customerData: PROVIDER[] = [
  {
    logo: ClientOne,
    name: 'Katie Brown',
    rating: 4.5,
  },
  {
    logo: Clienttwo,
    name: 'Katie Brown',
    rating: 4.5,
  },
  {
    logo: ClientOne,
    name: 'Katie Brown',
    rating: 4.5,
  },
  {
    logo: Clienttwo,
    name: 'Katie Brown',
    rating: 4.5,
  },
];
const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="grid grid-cols-2">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white p-2.5 m-0 text-center">
          Recent Providers
        </h4>
        <h4 className="mb-6 text-lg font-semibold text-black dark:text-white p-2.5 m-0 text-center">
          <p className="bg-blue-500 rounded-lg w-32 p-2.5 text-white cursor-pointer">
            View All
          </p>
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 font-semibold">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm uppercase xsm:text-base">Providers</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm uppercase xsm:text-base">Rating</h5>
          </div>
        </div>
      </div>

      {customerData.map((customer, key) => (
        <div
          className={`grid grid-cols-2 ${
            key === customerData.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0 w-16">
              <img src={customer.logo} alt="customer" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              {customer.name}
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{customer.rating}K</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableOne;
