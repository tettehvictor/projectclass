import React from 'react'
import '../styles/down.css'
import { BsThreeDots } from "react-icons/bs";
import { LuPenSquare } from "react-icons/lu";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoOptionsOutline } from "react-icons/io5";
import { useRef } from 'react';

const Down = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="dawn">
        <div className="dawn-1">
            <img id='gote' src="./asserts/background.jpg" alt="" />
            <span id='ess'>Messaging</span>
        </div>
        <div className="cen">
        <BsThreeDots id='dos' />
        <LuPenSquare />
        <div className="dropdown">

<button  onClick={toggleDropdown} className="dropdown-toggle"><MdOutlineArrowDropDown /></button>
{isOpen && (
   <div className="dropdown-menu-2">
    <div className="pui">
       <div className="pui-2">
       <label htmlFor=""><FaMagnifyingGlass id='fin' /></label>
        <input id='search' type="search" placeholder='search' />
        <label htmlFor=""><IoOptionsOutline id='fin' /></label>
       </div>
    </div>
    
   </div>
 )}
 </div>
        </div>

    </div>
    </>
  )
}

export default Down