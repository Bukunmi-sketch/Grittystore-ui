import React from 'react';
import first from '../Images/14.jpg'

function Sectiona() {
    return ( 
        <>
        <section className="sectiona" style={{border:"1px solid transparent"}}>
           

           
            {/* <div className="boxa"> 
                 <div className="boxa-content">
                     <h1 className="Natural"> Buy Casual Shoes </h1>
                     <p>Are you tired of waiting for your salary before eating and making excellent Meals? <br />
                     Tired of constant market stress and delivery prices? If yes <br />
                     Afrimama is here for you .You can <span className='spanbold'> Buy Now,PAY LATER </span> & still enjoy free delivery </p>
                     <a href='#product'><button className='buy-now' > Shop Now</button> </a> 
                 </div>
            </div> */}

            <div className="top-content" >
                <h1 className="Natural"> FIND YOUR NEXT FAVORITE SHOE </h1>
                <p> Shop Our Collection Now </p>
                <a href='#product'><button className='buy-now' > Shop Now</button> </a> 
        
            </div>             
        </section>

        <section className="greeny-order">
             <h3> We Serve You The Best Product At Best Prices </h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias officia commodi. Nemo maiores culpa saepe aut, debitis sunt aspernatur vel error repellendus suscipit, necessitatibus expedita? Repellendus mollitia a totam.</p>

             <div className="flex-container">
                <div className="box">
                    <img src={first} alt="" />
                    <p>Free delivery</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="box">
                    <img src={first} alt="" />
                    <p>Secured Payments</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="box">
                    <img src={first} alt="" />
                    <p>24/7 Online Support</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="box">
                    <img src={first} alt="" />
                    <p>exchange</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>
             </div>
        </section>

        </>
     );
}

export default Sectiona;