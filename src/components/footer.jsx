import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaMapMarked, FaTwitter, FaInstagram, FaLinkedin, FaFacebookF, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import logo from '../Images/afrimamalogo.png'
import Products from '../pages/products';
import Teams from '../pages/teams';
import {  Link } from 'react-router-dom';
import { useRef } from 'react';

function Footer( { onUnDisplay, scrollto} ) {
    const ref = useRef();
    return (  
        <div className="footer">
            <div className="first-box">
                <ul>
                    <li>  <span> GrittyStore </span>  {/* <img src={logo} alt="afrimama"  className='footer-logo'/> */}</li>
                    <li> <p> buy comfortable wears with us</p></li>
                    <li> <a href='#product'> <button className='buy-now' > Buy now</button></a></li>
                  
                </ul>
            </div>

            <div className="second-box">
                <ul>
                    <li className='footer-head'>Useful Links</li>
                        <li> <Link to='/' className="menu-item" onClick={()=>onUnDisplay()} style={ {color:"white"}}> Home </Link>  </li> 
                       <li> <Link to='/product' className="menu-item" onClick={()=>onUnDisplay()} style={ {color:"white"}}> Product   </Link> </li>
                       <li> <Link to='/Team' className="menu-item"  onClick={()=>onUnDisplay() } style={ {color:"white"}}> Team </Link>  </li>
                      {/*  <li> <a href='https://api.afrimamafarms.com/agent/Views/register.php' className="menu-item" target="_blank" onClick={()=>onUnDisplay() } style={ {color:"black"}}> Agent </a>  </li> */}
                     
                </ul>
            </div>

            <div className="third-box">
            <ul>
                    <li className='footer-head'>Contact Us</li>
                    <li>  
                             <span> <FaEnvelope style={ {color:"green"}} className="icons" /> </span>
                            <h3>sales@grittystore.com</h3>
                    </li>
                    <li>
                             <span> <FaPhone style={ {color:"green"}} className="icons" /> </span>
                            <h3>+2348059843257</h3>
                    </li>
                    <li>
                             <span> <FaMapMarked style={ {color:"green"}}  className="icons" /> </span>
                            <h3>Lagos, Nigeria</h3>
                    </li>

                    <li className='footer-icon-li'> 
                      <a href='https://web.facebook.com/afrimamafarm'> <FaFacebookF className='footer-icon'/> </a>
                      <a href='https://www.twitter.com/AfrimamaFarms'> <FaTwitter className='footer-icon'/> </a>
                      <a href='https://www.Instagram.com/afrimama_farm'> <FaInstagram  className='footer-icon' /> </a>
                      <a href='https://www.linkedin.com/company/afrimama_farms'> <FaLinkedin className='footer-icon'/> </a>
                      <a href='https://wa.me/message/Z47UKGHFXBCSG1'> <FaWhatsapp className='footer-icon' /> </a>
                     </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;