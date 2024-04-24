import React from 'react'
import '../styles/network.css'
import Nav from './Nav'
import { MdArrowDropDown } from "react-icons/md";
const Connections = () => {
  return (
    <>
    <Nav/>
   <div className="whole">
   <div className="connection">
        <h2 className='yet'>You don't have any connections yet.</h2>
        <h3 className='fresh'>Discover fresh ideas and jobs on LinkedIn through your connections and their networks. Find your first connection below.</h3>
    </div>
    <div className="mah">
    <img id='jot' src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="Advertise on LinkedIn" border="0"/>
   <div className="sect">
   <footer id='fter' className='sect'>
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
   </div>
   {/* <footer class="global-footer-compact
         ph5 pb1" aria-label="LinkedIn Footer Content">
      
        <div id="ember1157" class="ember-view   ">
            
       <ul class="global-footer-compact__content global-footer-compact__links">
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://about.linkedin.com/" id="compactfooter-about" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    About
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/accessibility" id="compactfooter-accessibility" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    Accessibility
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_people" id="compactfooter-help" class="ember-view global-footer__link t-12 t-normal">
                  <span data-dyn-trk="">
                    Help Center
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                
    
    
    <div id="ember1166" class="artdeco-dropdown artdeco-dropdown--placement-top artdeco-dropdown--justification-right ember-view global-footer-dropdown">
      <button aria-expanded="false" id="compactfooter-privacy_dropdown-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-top ember-view global-footer-dropdown__trigger" type="button" tabindex="0">
        <span class="global-footer__link t-12 t-normal">
          <span class="text-align-left">
            Privacy &amp; Terms
            <svg role="none" aria-hidden="true" class="global-footer-dropdown__trigger-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
    

    <use href="#caret-small" width="16" height="16"></use>
</svg>

          </span>
        </span>
      
</button>
      <div tabindex="-1" aria-hidden="true" id="ember1168" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-top ember-view global-footer-dropdown__options"></div>
    </div>
  
  
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/help/linkedin/answer/62931" id="compactfooter-ad_choices" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    Ad Choices
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr" id="compactfooter-advertising" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    Advertising
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                
    
    
    <div id="ember1171" class="artdeco-dropdown artdeco-dropdown--placement-top artdeco-dropdown--justification-right ember-view global-footer-dropdown">
      <button aria-expanded="false" id="compactfooter-business_services_dropdown-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-top ember-view global-footer-dropdown__trigger" type="button" tabindex="0">
        <span class="global-footer__link t-12 t-normal">
          <span class="text-align-left">
            Business Services
            <svg role="none" aria-hidden="true" class="global-footer-dropdown__trigger-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
  

    <use href="#caret-small" width="16" height="16"></use>
</svg>

          </span>
        </span>
      
</button>
      <div tabindex="-1" aria-hidden="true" id="ember1173" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-top ember-view global-footer-dropdown__options"></div>
    </div>
  
  
            </li>
            <li class="global-footer-compact__item">
                
  <div>
    
    <div>
      <div id="ember1174" class="ember-view"></div>

      
  <button id="compactfooter-get_app_footer" class="global-footer__link t-12 t-normal" type="button">
    Get the LinkedIn app
  </button>

    </div>
  
  </div>

            </li>
            <li class="global-footer-compact__item">
                <button id="compactfooter-more" class="global-footer__link t-12 t-normal" aria-expanded="false" aria-label="More options" type="button">
                  More
                </button>
            </li>
        </ul>
          <div class="global-footer-compact__content t-12 t-normal text-align-center clear-both" id="compactfooter-copyright">
            <svg role="img" aria-hidden="false" aria-label="LinkedIn" class="global-footer-compact__linkedin-logo" xmlns="http://www.w3.org/2000/svg" width="56" height="14" viewBox="0 0 56 14" data-supported-dps="56x14" data-test-icon="linkedin-logo-blue-xxsmall">
   <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" x="0" y="0" width="56" height="14"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/34bl5fp6gi8t0nscavw94xa7x" x="0" y="0" width="56" height="14"></image>
    </svg>
</svg>


            LinkedIn Corporation © 2024
          </div>

        <div id="ember1162" class="ember-view"></div>
      
        </div>
  
    </footer> */}
    </>
  )
}

export default Connections