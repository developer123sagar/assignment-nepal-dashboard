export type DecodedToken = {
  _id: string;
  role: string;
  iat: number;
};

interface IUserField {
  name: string;
  activeStatus: boolean;
  isGoogleLinked: boolean;
  isFacebookLinked: boolean;
  verificationToken: string;
  role: string;
  verificationStatus: string;
  hasProfileSave: boolean;
  uploadPhoto: boolean;
  merchantKey: string;
  joinDate: string;
  email: string;
  _id: string;
  createdDateTime:string;
}
export interface IEmployer extends IUserField {
  Vat_no: string;
  status: string;
}
export interface IWorker extends IUserField {
  employerId: string;
  employerName: string;
  workingfield: []
}
export interface IClient extends IUserField {
  phone: string;
}
export interface ICompanyWorker extends IWorker {
  phone: string;
}

type projectpaymentway = {
  _id: string;
  name: string;
  amount: number;
  paymentDone: boolean;
  description: string;
}
export interface ITask {
  _id: string;
  clientId: string;
  clientName: string;
  taskDescription: string;
  taskName: string;
  projectpaymentway: projectpaymentway[] | [];
  OneTimePayment: boolean;
  skills: string[];
  fieldType: string[];
  documentation: string;
  fullPaymentDone: string;
  projectAmount: number;
  projectStatus: string;
  createdAt: string;
}

export type CompanyClient = {
  _id: string,
  phone: string,
  email: string,
  name: string,
  isGoogleLinked: boolean,
  isFacebookLinked: boolean,
  verificationStatus: string,
  hasProfileSave: boolean,
  uploadPhoto: boolean
}