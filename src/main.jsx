import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' แนะนำให้ลบทิ้งหรือ comment ตั้งแต่แรกเพราะเราจะแต่งสวยเอง
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
