import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus,FaBars,  FaTimes, FaSearch, FaUser, FaUserCircle, FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'

function Rightbar( {countCartitems, cartdisplay, onDisplay, onShow,  onUnDisplay, onSearch, searchterm, }) {

   const navigate= useNavigate();

     return ( 
          <>
         <div className='rightbar'>
                       
                  <ul style={ {left:cartdisplay.left }}>
                      <li className="closebar">
                        <FaTimes onClick={()=>onUnDisplay()} className='icons' />
                      </li>               
                       <li> <Link to='/' className="menu-item" onClick={()=>onUnDisplay()}> Home </Link>  </li> 
                       
                       <li> <Link to='/product' className="menu-item" onClick={()=>onUnDisplay()} > Brands  </Link> </li>
                       <li> <Link to='/Team' className="menu-item"  onClick={()=>onUnDisplay() } > Contact us </Link>  </li>
                       <li> <Link to='/about' className="menu-item" onClick={()=>onUnDisplay()}> About us </Link>  </li>     
               </ul>  
                               
         </div>

              
                   

                      
                 
                     
</>
      );
    }
 
 export default Rightbar;