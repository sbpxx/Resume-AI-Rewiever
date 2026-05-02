import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const starsContainer = document.getElementById('stars');
for (let i = 0; i < 80; i++) {
  const star = document.createElement('div');
  star.className = 'star-dot';
  const size = Math.random() * 2 + 1;
  star.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    --dur: ${3 + Math.random() * 5}s;
    --delay: ${Math.random() * 6}s;
    --op: ${0.3 + Math.random() * 0.5};
  `;
  starsContainer.appendChild(star);
}
