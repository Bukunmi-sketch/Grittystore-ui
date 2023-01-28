import React from 'react';
import strpic from '../Images/shoebanner.jpg'
import translate from '../Images/14.jpg'

function Sectiona() {
    return ( 
        <section className="sectiona" style={{border:"1px solid transparent"}}>

            <div className="boxa">
                 <div className="boxa-content">
                     <h1 className="Natural"> Buy Casual Shoes </h1>
                     <p>Are you tired of waiting for your salary before eating and making excellent Meals? <br />
                     Tired of constant market stress and delivery prices? If yes <br />
                     Afrimama is here for you .You can <span className='spanbold'> Buy Now,PAY LATER </span> & still enjoy free delivery </p>
                     <a href='#product'><button className='buy-now' > Shop Now</button> </a> 
                 </div>
            </div>

            <div className="boxb" >

                <div >
                   <img src={strpic} alt="" className="imga" />
                </div>
        
            </div>
             
        </section>
     );
}

export default Sectiona;