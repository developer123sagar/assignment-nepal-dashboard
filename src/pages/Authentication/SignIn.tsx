import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';
import LoginImage from '../../images/loginimage.svg';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { IoCode } from 'react-icons/io5';
import { createPost, loginAdmin } from '@/services/api/APIs';
import { BiLoaderCircle } from 'react-icons/bi';
import { decodeToken } from '@/helpers';
import { useAppDispatch } from '@/redux/store';
import { setRole } from '@/redux/slices/TaskSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [merchantKey, setMerchantKey] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (merchantKey) {
        localStorage.setItem('merchantKey', merchantKey);
        const res = await createPost(
          `login?merchantKey=${merchantKey}`,
          formData,
        );
        if (res.status === 200) {
          const role = decodeToken(res.data.token);
          dispatch(setRole(role));
          if (role) {
            navigate('/dashboard');
            localStorage.setItem('token', res.data.token);
          }
        }
        return;
      }
      const res = await loginAdmin(formData);
      const { message, token } = res.data;
      toast.success(message || 'Successfully login !');
      const role = decodeToken(token);
      dispatch(setRole(role));
      if (role === 'admin') {
        navigate('/dashboard');
        localStorage.setItem('token', token);
      }
    } catch (err: any) {
      toast.error(err.message || 'Someting went wrong !');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center h-screen">
      {/* phone icon */}
      <div className="hidden w-full xl:block xl:w-1/2">
        <div className="py-17.5 px-26 text-center">
          <span className="mt-15 inline-block">
            <img className="dark:block" src={LoginImage} alt="LoginImage" />
          </span>
        </div>
      </div>

      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
        <div className="w-full p-8 sm:p-12.5 xl:p-17.5">
          <div className="flex items-center justify-center mb-6">
            <img
              className="dark:hidden"
              src={Logo}
              alt="AsssignnmentHubLogo"
              style={{ width: 200, height: 150 }}
            />
          </div>

          <h2 className="mb-3 text-lg font-bold text-black dark:text-white sm:text-title-xl2">
            Sign In to Assignment Nepal
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Merchant Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={merchantKey}
                  onChange={(e) => setMerchantKey(e.target.value)}
                  placeholder="Enter the merchant code"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                <span className="absolute right-4 top-4">
                  <IoCode className="fill-current" size={22} />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                <span className="absolute right-4 top-4">
                  <FaEnvelope className="fill-current" size={22} />
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Re-type Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="6+ Characters, 1 Capital letter"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                <span className="absolute right-4 top-4">
                  <FaLock className="fill-current" size={22} />
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mb-5 w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              disabled={loading}
            >
              {loading ? (
                <div className="flex gap-1 items-center w-fit mx-auto">
                  <BiLoaderCircle
                    className="animate-spin w-fit mx-auto"
                    size={24}
                  />
                  <span>Signing...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
              <FaGoogle className="fill-current" size={24} />
              <span>Sign in with Google</span>
            </button>

            <div className="mt-6 text-center">
              <p>
                Don’t have any account?{' '}
                <Link to="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
