import React from 'react'
import Nav from '../components/Nav'
import '../styles/job.css'
import { MdArrowDropDown } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import Down from '../components/Down';

const Job = () => {
  return (
    <>
      <Nav/>
      <div className="jode">
        <div className="jobe-1">
          <div className="jober">
            <ul id='list'>
                <li id='book'>
                <FaBookmark id='mark' />
               <p id='opps'> My jobs</p>
                </li>
                <li id='book'>
                <LuMenu  id='mark'/>
                <p id='opps'>Prefrences</p>
                </li>
                <li id='book'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
    </svg>
                  <p id='opps'>Interveiw prep</p>
                </li>
                <li id='book'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"></path>
    </svg>
                  <p id='opps'>Build resume</p>
                </li>
                <li id='book'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
    </svg>
                <p id='opps'>Job seeker guidance</p>
                </li>
            </ul>
          </div>
          <button className='ontt'>
          <FaRegPenToSquare id='pen' />
    <p className="free">Post free job</p>
          </button>
        </div>
        <div className="sect">
        <section className='carde'>
          <div className="imi">
          <img id='sert' src="./asserts/background.jpg" alt="" />
          </div>
          <div className="items">
            <h3 id='toper'>See the full lists of job where you'd be top applicant</h3>
            <div className="imaes">
             <div className="edas">
             <img src="./asserts/pexels-1.jpg" id='one' alt="" />
              <img src="./asserts/pexels-2.jpg" id='tne' alt="" />
              <img src="./asserts/pexels-3.jpg" id='hne' alt="" />
             </div>
             <p className="ec">Millions of members use Premuim</p>
            </div>
            <button className='nou'>Try Premuim for NGN0</button>
            <p className="uno">1-month free trial.Cancel anytime</p>
          </div>
        </section>
        <div className="new">
          <div className="new-1">
            <h2 id='new1'>Recommended for you</h2>
            <p id='new2'>Based on your profile and search history</p>
          </div>
          <div className="new-2">
       <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.11 48.03" id="briefcase-jobs-small" aria-hidden="true" role="none" data-supported-dps="48x48" width="48" height="48" className='kein'>
  <path d="M1.05 26h46v13.93a3 3 0 01-3 3.09H4.1a3 3 0 01-3-3.09z" fill="#788fa5"/>
  <path d="M1.6 9h44.9a1.55 1.55 0 011.55 1.55v15.33A3.1 3.1 0 0145 29H3.15a3.11 3.11 0 01-3.1-3.1V10.59A1.56 1.56 0 011.58 9z" fill="#f8c77e"/>
  <rect x="20.05" y="25.02" width="8" height="8" rx="1.35" fill="#fff"/>
  <path d="M36.05 6a3 3 0 00-3-3h-18a3 3 0 00-3 3v3h2V6a1 1 0 011-1h18a1 1 0 011 1v3h2z" fill="#56687a"/>
</svg>
            <h2 className="veax">Want more jobs?</h2>
            <p className="ici">Click here to continue searching over 20 million jobs on Lindedin</p>
            <div className="tres-1">
            <button className='tres'>Search jobs</button>
            </div>
          </div>
        </div>
        </div>
        <div className="next">
          <section className='next-1'>
            <div className="seek">
              <h2 className="ker">Job seeker guildance</h2>
              <p className="ker-1">Recommended based on your activity</p>
            </div>
            <div className="over">
              <p className="as">I want to improbe my resume</p>
             <img id='ima' src="./asserts/ima.gif" alt="" />
            </div>
            <p className="time">
            Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.
            </p>
            <div className="ink">
              <p className='reo'>show more</p>
              <HiArrowNarrowRight id='hi' />
            </div>
          </section>
          <footer id='fter' className='ter'>
            <div className="unli">
              <ul className="first">
                <li id='first-1'>About</li>
                <li  id='first-2'>Accessibility</li>
                <li  id='first-3'>Help Center</li>
              </ul>
              <ul className='second'>
              <li id='second-1'>Privacy & terms <MdArrowDropDown /></li>
              <li  id='second-2'>Ad Choices</li>
              </ul>
              <ul className="third">
                <li id='third-1'>Advertising</li>
                <li id='third-2'>Business services <MdArrowDropDown /></li>
              </ul>
              <ul className="forth">
                <li id='forth-1'>Get the Linkedin app</li>
                <li id='forth-2'>More</li>
              </ul>
            </div>
            <div className="last">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" id="linkedin-logo-blue-xxsmall" aria-hidden="true" role="none" data-supported-dps="56x14" width="56" height="14">
           <g>
    <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.7 2.7 0 0011.89 6V5H10v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a3.23 3.23 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.3 4.3 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.26 4 4 0 010-.49 3.58 3.58 0 013.5-3.65h.26C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.45 1.45 0 00-1.51-1.4h-.08a1.63 1.63 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.45 2.45 0 01-2 .9 3.41 3.41 0 01-3.32-3.5 1.41 1.41 0 010-.2 3.35 3.35 0 013-3.68h.3a2.61 2.61 0 011.9.7zm.15 6.5a1.64 1.64 0 00-1.4-1.84h-.22A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.62 1.62 0 001.63-1.63.81.81 0 00-.01-.22zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2A1.25 1.25 0 1045 4.25 1.25 1.25 0 0046.25 3zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C51.82 6.8 52 7.94 52 8.73V12h2z" fill="#0a66c2"/>
           </g>
          </svg>
          <p className="righ">LinkedIn Corporation © 2024</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Job