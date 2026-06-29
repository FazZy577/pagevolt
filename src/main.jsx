import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// SSG: Export routes for static generation
export const routes = [
  '/',
  '/pago',
  '/privacidad',
  '/terminos',
  '/diseno-web-restaurantes',
  '/diseno-web-negocios-locales'
];

// Client-side hydration
if (typeof window !== 'undefined') {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
