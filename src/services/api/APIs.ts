import axiosInstance from "./axios.config";

// get
export const getWorkerList = () => axiosInstance.get("worker/list");
export const getCompanyUserList = (key: string, user: "client" | "worker") => axiosInstance.get(`${user}/list?merchantKey=${key}`);
export const getEmployerList = () => axiosInstance.get("employer/accepted");
export const getClientList = () => axiosInstance.get("client/list");
export const getWatcherList = () => axiosInstance.get("watcher/list");
export const getData = (api: string) => axiosInstance.get(api)
// post
export const loginAdmin = (form: { email: string, password: string }) => axiosInstance.post('login', form);
export const createPrivacyPolicy = (form: { Title: string, Description: string }) => axiosInstance.post('privacyPolicy', form);
export const addWatcher = (form: any) => axiosInstance.post("/watcher/register", form)
export const createPost = (url: string, form: any) => axiosInstance.post(url, form)
//edit
export const EditData = (api: string, form: any) => axiosInstance.put(api, form)