import React from 'react'
import corn from "../Images/cornmaize.png"
import cocoa from "../Images/cocoayam.png"
import rice from "../Images/rice.png"
import banana from "../Images/banana.png"
import leg from "../Images/leg.jpg"
import chat from "../Images/Chatscreenshot.png"
import egusi from "../Images/egusi.png"
import semoegusi from "../Images/semoegusi.png"
import chefs from "../Images/chefscooking.png"
import van from "../icon/free-delivery.png"
import secured from "../icon/credit-card(1).png"
import support from "../icon/24-hours-support.png"
import exchange from "../icon/exchange.png"


function Sectionb() {
    return ( 
        <>
         

        <section className="section-why">
             <h3>Why should you <span style={ { color: "#FF6600"}}> try? </span></h3>

             <div className="farm-image-box">
                 <img src={corn} alt="" className='farm-imagea' />
                 <img src={cocoa} alt="cocoyam" className='farm-imageb' />
                 <img src={rice} alt="rice" className='farm-imagec' />
                 <img src={banana} alt="banana" className='farm-imaged' />
             </div>
        </section>

        <section className='our-client'>
            <div className="client-boxa">
               <img src={leg} alt="cocoyam" className='suit-images' />
            </div>
           
           <div className="client-boxb" >
           
                 <h3> What Our Client Says</h3>
                 <div className="delivered-con">
                      <div className="delivered">
                        <p> 600+</p>
                        <div className='italic-order'>Order delivered</div> 
                      </div>
                    
                     <div className="img-con">
                       <img src={chat} alt="cocoyam" className='chatimage' />  
                       <span>John doe</span>
                     </div>       
                  </div>
            </div>
        </section>

        <section className="greeny-order">
             <h3> We Serve You The Best Product At Best Prices </h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias officia commodi. Nemo maiores culpa saepe aut, debitis sunt aspernatur vel error repellendus suscipit, necessitatibus expedita? Repellendus mollitia a totam.</p>

             <div className="flex-container">
                <div className="box">
                    <img src={van} alt="" />
                    <p>Free delivery</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="box">
                    <img src={secured} alt="" />
                    <p>Secured Payments</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="box">
                    <img src={support} alt="" />
                    <p>24/7 Online Support</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="box">
                    <img src={exchange} alt="" />
                    <p>exchange</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>
             </div>
        </section>

        <section className="support">
             <img src={egusi} alt="" />
             <p>Visit Our Support Center</p>
             
        </section>
        </>
     );
}

export default Sectionb;