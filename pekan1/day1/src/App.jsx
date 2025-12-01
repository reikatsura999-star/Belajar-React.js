import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="logos">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Belajar React Pertama 🚀</h1>
      </header>

      <main>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Klik aku → {count}
          </button>
          <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
            Reset
          </button>
          <p>
            File utama ada di <code>src/App.jsx</code>. Coba edit dan lihat hasilnya langsung!
          </p>
        </div>
      </main>

      <footer>
        <p className="read-the-docs">
          Coba klik logo di atas untuk belajar lebih lanjut tentang Vite dan React.
        </p>
      </footer>
    </>
  )
}

export default App