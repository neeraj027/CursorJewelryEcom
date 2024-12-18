import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CursorProvider } from './context/CursorContext.jsx';

createRoot(document.getElementById('root')).render(
  <CursorProvider>
    <App />
  </CursorProvider>
);
