import React from 'react'
import './Header.scss'
import logo from '../../constants/images'

const Header = () => {
  return (
    <header>
      <nav className='header__wrapper'>
        <div className='header__logo'>
          <img src={logo} alt='logo' />
          <div className='header__title'>
            <h1>NEW JOURNEY</h1>
            <h3>PRIMARY SCHOOL</h3>
            <h4>KAMPALA, UGANDA</h4>
          </div>
        </div>
        <ul className='header__links'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#academics">Academics</a>
          </li>
          <li>
            <a href="#admissions">Admissions</a>
          </li>
          <li>
            <a href="#downloads">Downloads</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
