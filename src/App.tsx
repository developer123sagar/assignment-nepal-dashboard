import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import '../src/css/style.css';

import Loader from './common/Loader';

import Router from './Router';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Router />
    </>
  );
}

export default App;
