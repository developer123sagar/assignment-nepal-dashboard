import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>
      <Router>
        <Toaster position="top-right" />
        <App />
      </Router>
    </Provider>
  </>,
);
