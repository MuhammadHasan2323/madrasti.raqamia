import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Debug helper: load only when ?debug=overflow is present
if (typeof window !== 'undefined' && window.location && window.location.search.includes('debug=overflow')) {
  import('./utils/overflowDebug').then((m) => {
    try {
      m.default && m.default();
    } catch (e) {
      // ignore
      // console.error('overflow debug init failed', e)
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
