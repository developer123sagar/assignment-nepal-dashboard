export type Package = {
  name: string;
  price: number;
  invoiceDate: string;
  status: string;
};

export const packagesList: Package[] = [
  {
    name: 'Basic Plan',
    price: 19.99,
    invoiceDate: '2024-01-15',
    status: 'Paid',
  },
  {
    name: 'Standard Plan',
    price: 29.99,
    invoiceDate: '2024-02-10',
    status: 'Due',
  },
  {
    name: 'Premium Plan',
    price: 49.99,
    invoiceDate: '2024-03-05',
    status: 'Overdue',
  },
  {
    name: 'Enterprise Plan',
    price: 99.99,
    invoiceDate: '2024-04-20',
    status: 'Paid',
  },
  {
    name: 'Starter Plan',
    price: 9.99,
    invoiceDate: '2024-01-25',
    status: 'Due',
  },
  {
    name: 'Pro Plan',
    price: 39.99,
    invoiceDate: '2024-02-28',
    status: 'Paid',
  },
  {
    name: 'Ultimate Plan',
    price: 59.99,
    invoiceDate: '2024-03-15',
    status: 'Overdue',
  },
  {
    name: 'Business Plan',
    price: 79.99,
    invoiceDate: '2024-04-10',
    status: 'Due',
  },
];