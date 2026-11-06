import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap 5 grid & utilities first, then the custom design system
// (so global.css reliably overrides Bootstrap defaults).
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
