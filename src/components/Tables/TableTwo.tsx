// importing customer image
import { CUSTOMER } from '../../types/tableTwoData';
import ClientOne from '../../images/customer/customer-3.png';

const customerData: CUSTOMER[] = [
  {
    logo: ClientOne,
    name: 'Martin Henry',
    date: 'May 28, 2024 / 11: 33 PM',
  },
  {
    logo: ClientOne,
    name: 'Abdulkader Tarrab',
    date: 'May 28, 2024 / 8:21 PM',
  },
  {
    logo: ClientOne,
    name: 'Sam Miah',
    date: 'May 28, 2024 / 3:54 PM',
  },
  {
    logo: ClientOne,
    name: 'Aadil Nabi',
    date: 'May 28, 2024 / 3:15 PM',
  },
];

const TableTwo = () => {
  return (
    <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="grid grid-cols-2">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white p-2.5 m-0 text-center">
          Recent Customers
        </h4>
        <h4 className="mb-6 text-lg font-semibold text-black dark:text-white p-2.5 m-0 text-center">
          <p className="bg-blue-500 rounded-lg w-32 cursor-pointer text-white p-2.5">
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
            <h5 className="text-sm uppercase xsm:text-base">Date</h5>
          </div>
        </div>
      </div>

      {customerData.map((brand, key) => (
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
              <img src={brand.logo} alt="Brand" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              {brand.name}
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{brand.date}K</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
