import React from 'react'
import '../styles/navbar.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const [clicked, setClicked] = useState(false);

 
  const handleClick = () => {
    setClicked(!clicked); 
  }
  return (
    <>
    <header>
    <div className="sea">
   <div className="svg">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="blue"  class="mercado-match" width="34" height="34" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
   </div>
   <div className="putin">
   <div className="fen"><FaMagnifyingGlass className='fam' /></div>
    <input type="search" placeholder='Search' className='puit' />
   </div>
   </div>
    <nav>
   <div className="anchor">
    <ul className='order'>
      <li className='list'>
        <Link to='/' className='btm'>
          <div className='ext'>
            <div className='tre'>
            <IoHome className='oner' />
            </div>
            <p  id='nit' className={clicked ? 'clickedStyle' : 'defaultStyle'} onClick={handleClick}>Home</p>
          </div>
        </Link>
      </li>
      <li className='list'>
        <Link to='/network' className='btm'>
          <div className='ext'>
            <div className='tre'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="grey" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
    </svg>
            </div>
            <p className='omen'>My network</p>
          </div>
        </Link>
      </li>
      <li className='list'>
        <Link to='/jobs' className='btm'>
          <div className='ext'>
            <div className='tre'>
            <MdWork className='oner' />
            </div>
            <p className='ome'>Jobs</p>
          </div>
        </Link>
      </li>
      <li className='list'>
        <Link to='/message' className='btm'>
          <div className='ext'>
            <div className='tre'>
            <RiMessage2Fill className='oner' />
            </div>
            <p className='ome'>Messaging</p>
          </div>
        </Link>
      </li>
      <li className='list'>
        <Link to='/notification' className='btm'>
          <div className='ext'>
            <div className='tre'>
            <IoNotifications className='oner' />
            </div>
            <p className='ome'>Notifications</p>
          </div>
        </Link>
      </li>
      <div className="nod">
        <img src="./asserts/background.jpg" id='und' alt="" />
        <div className="doem">
          <p>me</p>
          <div className="dropdown">

<button  onClick={toggleDropdown} className="dropdown-toggle"> <MdOutlineArrowDropDown /></button>
{isOpen && (
   <div className="dropdown-menu">
     <div className="profile">
       <div className="pro">
         <img className='mag' src="./asserts/background.jpg" alt="" />
         <div className="text">
           <h3 className='tet'>Tetteh victor</h3>
           <p className='txte'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
       </div>
       <button className='prof'><Link className='profe'>view profile</Link></button>
       <hr className='hed' />
       <div className="cotn">

       </div>
     </div>
   </div>
 )}
 </div>
        </div>
      </div>
      <hr className='rend' />
      <button aria-expanded="false"  id='geta' class="global-nav__primary-link
          global-nav__primary-item--divider pl3
          global-nav__app-launcher-trigger pr3" type="button">
    
          
    <div class="ivm-image-view-model    global-nav__icon-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        display-flex">
        <li-icon aria-hidden="true" type="grid" class=" " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
    </svg></li-icon>
    </div>
  
          </div>
  

        <span class="global-nav__primary-link-text" id='bols'  title="For Business">
         <p id='timer'>For Business</p>
         <MdOutlineArrowDropDown />
        </span>
      
  </button>
  
    </ul>
   </div>
    </nav>
    </header>
    </>
  )
}

export default Nav