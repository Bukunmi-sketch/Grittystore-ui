import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus,FaBars,  FaTimes, FaSearch, FaUser, FaUserCircle, FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import cart from '../icon/add-cart.png'
import menu from '../icon/menu.png'


function Header( {countCartitems, cartdisplay, onDisplay, onShow,  onUnDisplay, onSearch, searchterm, }) {

   const navigate= useNavigate();

     return ( 
          <>
         <header>
                <div className='bar-box'>
                     <img src={menu} alt="" style={ {height:'30px', weight:"30px"}} onClick={()=>onDisplay()}/>
                </div>  
             
                 <h4 className='logo'>
                 <Link to='/' className="menu-item" onClick={()=>onCarticon()} > <span> GrittyStore </span>   {/* <img src={logo} alt='afrimama' style={ {width:'100%', } }/> */}  </Link>
                 </h4>

                 <input type="search" name="" id=""  value={searchterm} placeholder="search by name or description" onChange={ (e)=>onSearch(e.target.value)}/>

                 <div className="otherside"  >
                       
                  <ul style={ {left:cartdisplay.left }}>
                      <li className="closebar">
                        <FaTimes onClick={()=>onUnDisplay()} className='icons' />
                      </li>               
                       <li> <Link to='/' className="menu-item" onClick={()=>onUnDisplay()}> Home </Link>  </li> 
                       
                       <li> <Link to='/product' className="menu-item" onClick={()=>onUnDisplay()} > Brands  </Link> </li>
                       <li> <Link to='/Team' className="menu-item"  onClick={()=>onUnDisplay() } > Contact us </Link>  </li>
                       <li> <Link to='/about' className="menu-item" onClick={()=>onUnDisplay()}> About us </Link>  </li>     
               </ul>  
              
                <div className='cartlist'>
                     <img src={cart} alt="" style={ {height:'30px', weight:"30px"}} onClick={()=>onShow() }/>
                    { countCartitems ? ( <div className="count" onClick={()=>onShow() } >  { countCartitems} </div>) : ( ''  ) }
                </div>
                               
            </div>
         </header>

              
                   

                      
                 
                     
</>
      );
    }
 
 export default Header;