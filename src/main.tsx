import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init(
  {
    duration: 500,
    once: false,
    easing: 'ease-in-out', 
  }
); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
