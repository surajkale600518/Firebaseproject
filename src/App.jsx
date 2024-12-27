import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { HeaderDesign } from './assets/componet/Header'
import { Register } from './assets/componet/Form'
import { Login } from './assets/componet/Login'
import { Products } from './assets/componet/Products'
import logo from './assets/componet/image/raja.png';
import './assets/componet/Header.css';
import { About } from './assets/componet/About'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <div className="logo">
            <img src={logo} alt="logi" />
            <nav>
              <Link className='active'>Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/About">Abouts</Link>
              <Link to="">Service</Link>
              <Link to="">Contact</Link>
              <input type="search" id="search-input" name="query" placeholder="Search" required style={{ marginLeft: "20px" ,height:"40px"}} />
              <button type="submit" id="search-button" className="bi bi-search" style={{ padding: "10px" }}></button>
            </nav>
            <div className="buttons">
              <Link to="/register" className="btn green" style={{ height: "40px", marginTop: "5px" }}>Register</Link>
              <Link to="/login" className="btn bi bi-person-circle" style={{ fontSize: "30px", border: "none" }}></Link>
              <Link className="cart bi bi-cart-check-fill"></Link>
            </div>
          </div>
        </header>
        <div className="box-right">
          <Routes>
            <Route path='/' element={<HeaderDesign />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product' element={<Products />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>


    </div>
    
  )
}

export default App

{/* <header>
        <div className="logo">
          <img src={logo} alt="Kisan Logo" />
        </div>
        <nav>
          <Link to="/home" className="active">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/abouts">About</Link>
          <Link to="/service">Services</Link>
          <Link to="contact">Contact</Link>
        </nav>  
        <div className="buttons">
          <Link to="/register" className="btn green">Registration</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </header> */}