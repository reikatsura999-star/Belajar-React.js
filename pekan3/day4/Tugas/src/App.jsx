import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Contact from './pages/Contact'
import Beranda from './pages/Beranda'
import About from './pages/About'
import './App.css'
import ProductDetail from './pages/ProductDetail'
import Auth from './pages/Auth'


function App () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'link-beranda'}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : 'link-about'}>
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : 'link-contact'}>
              Kontak
            </NavLink>
          </li>
          <li>
            <NavLink to='/product/1' className={({ isActive }) => isActive ? 'active-link' : 'link-contact'}>
            Produk 1#
            </NavLink>
          </li>
          <li>
            <NavLink to='/product/2' className={({ isActive }) => isActive ? 'active-link' : 'link-contact'}>
            Produk 2#
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={<Beranda />} >
          <Route path='/auth' element={<Auth />} />
          <Route index element={<h3>Login bro</h3>} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<ProductDetail/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
