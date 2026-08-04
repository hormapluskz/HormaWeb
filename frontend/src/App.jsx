import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import FoundersPage from './components/FoundersPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/founders" element={<FoundersPage />} />
    </Routes>
  )
}

export default App
