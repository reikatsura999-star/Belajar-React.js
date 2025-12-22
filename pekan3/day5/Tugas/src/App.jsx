import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectRouter'
import Login from './pages/Login'
import Theme from './pages/Theme'
import "./App.css"

// Halaman Utama dengan tombol ke login
const Home = () => {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
    
      <h1>Ini adalah tampilan pertama aplikasi.</h1>
      <button
        onClick={() => navigate('/Dashboard')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Pergi ke Dashboard
      </button>
    </div>
  )
}

// Dashboard dengan tombol ke login
const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Dashboard</h1>

      <p>kamu bisa klik tombol di bawah ini untuk pergi ke halaman login</p>

      <button
        onClick={() => navigate('/login')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Login
      </button>
    </div>
  )
}

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard'element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}
        />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Theme' element={<Theme />} />
      </Routes>
    </Router>
  )
}

export default App
