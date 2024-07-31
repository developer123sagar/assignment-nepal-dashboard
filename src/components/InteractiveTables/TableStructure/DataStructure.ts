export type Payment = {
  id: string;
  service?: string;
  description?: string;
  featured?: string;
  category?: string;
  categoryName?: string;
  price?: string;
  serviceName?: string;
  value?: string;
  author?: string;
  totalViews?: string;
  name?: string;
  customer?: string;
  rating?: number;
  review?: string;
  worker?: string;
  code?: string;
  discount?: string;
  discountType?: string;
  expireDate?: string;
  title?: string;
  user?: string;
  joiningDate?: string;
  history?: string;
  paidStatus?: string;
  paidAmount?: string;
  dueAmount?: string;
  providerType?: string;
  paymentType?: string;
  dateTime?: string;
  contactNumber?: string;
  totalAmount?: string;
  status?: 'active' | 'pending' | 'inactive';
  verify?: any;
  userType?: string;
  address?: string;
  provider?: string;

  // properties for old-earning table
  commission?: string;
  booking?: number;
  totalEarning?: string;
  Tax?: string;
  adminEarning?: string;
  providerEarning?: string;

  // properties for provider-earning-table
  workerTotalEarning?: string;
  providerPayDue?: string;
  providerPaidAmount?: string;

  formName?: string;
};
