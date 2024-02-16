import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <div className='header container'>
        <div>
        <h2>Logo</h2>
        </div>
        <div className='melumat'>
            <h4>Haqqimizda</h4>
            <h4>Kitablar</h4>
            <h4>Imtahanlar</h4>
            <h4>Bizimle Elaqe</h4>
            <select>
                <option>Az</option>
                <option>En</option>
                <option>Ru</option>
            </select>
        </div>
        <div>
          <button type="button" class="btn btn-outline-dark">Daxil Ol</button>
          <button type="button" class="btn btn-dark">Qeydiyyat</button>
        </div>
    </div>
  )
}

export default Header