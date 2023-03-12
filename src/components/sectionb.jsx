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

        <section className="mission">
             <h3> Our mission</h3>
             <p>"To provide Africans with food items with flexible payment plans and stressfree delivery"</p>

             <div className="mission-box">
                 
                  <div className="mission-img">
                      <div className="mission-img-a">
                         <img src={egusi} alt="" />
                         <img src={semoegusi} alt="" />
                      </div>
                      <div className="mission-img-b">
                         <img src={chefs} alt="" /> 
                      </div>
                  </div>

                  <div className="mission-vision">
                       <h3>Our Vision</h3>
                       <div className="vision-text">
                           <i>“Stressfree Delivery and Flexible Payment Plans”</i>
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
             </div>
        </section>
        </>
     );
}

export default Sectionb;