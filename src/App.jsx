import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="noise">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FloatingWhatsApp />
    </div>
  )
}
