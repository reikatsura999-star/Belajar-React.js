1.import { useState } from 'react'
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
2.html adalah bahasa markup untuk membuat struktur halaman web

jsx mirip dengan html akan tetapi ia adalah bagian dari javascript

perbedaannya atribut:
html : class = "judul"
jxs : className = "judul"

react juga bisa menyisipkan di html dengan kurung kurawa {}
contoh:

const name = {"react"}
<h1>hello ${name}</h1>

3.Virtual DOM adalah representasi ringan dari DOM (Document Object Model) yang sebenarnya, disimpan dalam memori. React menggunakan VDOM untuk mengoptimalkan pembaruan pada DOM yang sebenarnya.

cara kerja VODM => 

1.React bikin Virtual DOM dari komponen.
2.Saat ada perubahan (misalnya klik tombol), React bikin Virtual DOM baru.
3.React membandingkan Virtual DOM lama dan baru.
4.- React hanya memperbarui bagian DOM asli yang berubah, bukan seluruh halaman.

SPA - Aplikasi web yang hanya punya satu halaman utama.

cara kerjannya yaitu Saat kita klik menu, halaman tidak dimuat ulang. React/JavaScript hanya mengganti bagian konten yang berubah.

kelebihannya:
- Cepat, karena tidak reload seluruh halaman.
- Pengalaman pengguna lebih mulus.

kekurangannya:
- Butuh JavaScript banyak.
- SEO (pencarian Google) lebih sulit kalau tidak diatur.



MPA- Aplikasi web dengan banyak halaman terpisah.

kelebihannya:
- SEO lebih mudah (setiap halaman punya URL sendiri).
- Cocok untuk website besar dengan banyak konten.

kekurangannya:
- Lebih lambat karena setiap klik harus reload halaman.
- Pengalaman pengguna bisa terasa “putus-putus”.

