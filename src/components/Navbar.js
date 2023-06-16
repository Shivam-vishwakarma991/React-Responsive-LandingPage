import React,{useState} from 'react';
import './Navbar.css'
import logo from '../logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const[nav,setnav]= useState(false)

  const handleNAvbar= ()=>{

    setnav(!nav)

  }

  return (


    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div>
      <ul className={ nav ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-itmes'><a href='/'>About</a> </li>
        <li className='nav-itmes'><a href='/'>Contact</a></li>
        <li className='nav-itmes'><a href='/'>Blog</a></li>
        <li className='nav-itmes'><a href='/'>Carrer</a></li>
      </ul>

      <div className='hamburger' onClick={handleNAvbar}>
         {  nav ? (<FaTimes size={30} style={{color: '#f8f8f8'}}/>)  : (<FaBars size={30} style={{color: '#f8f8f8'}}/>)  }
        
      </div>
    </div>
  )
}

export default Navbar