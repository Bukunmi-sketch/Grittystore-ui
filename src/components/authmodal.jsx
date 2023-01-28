import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useLocalStorage from '../hooks/uselocalstorage';
import Track from '../pages/track';
import Payment from '../pages/payment';
import Success from '../pages/success';
import { FaCartPlus,FaBars, FaTrash, FaHome, FaTeamspeak, FaInfo,FaShoppingBag, FaTimes, FaInfoCircle  } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
import Klumpsuccess from '../pages/klumpsuccess';

function AuthModalBox( { onAuthModal, authModal, Loader, unLoader, onHideAuthModal }) {
  const navigate = useNavigate();
  

  const [inputs, setinputs] =useState({
    payment_status: "unpaid",
    order_status: "incomplete",
  });
  const [confirmpay, setconfirmpay] = useState(false);
  const [Errormsg, setErrormsg] = useState("");
  const [localgov, setLga] = useState([]);


  const options = ["", "Oyo", "Lagos", "Osun", "Ondo"];

  //handle the changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.charAt(0).toUpperCase()+ event.target.value.slice(1);

   // console.log(addedcart.toString());
    setinputs((values) => ({
      ...values, [name]: value,
    }));

   // console.log(inputs);
    if (inputs.state == "Lagos") {
      setLga([]);
      setLga([
        "", "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju/Lekki", "Ifako-Ijaye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere",
      ]);
    } else if (inputs.state == "Oyo") {
      setLga([]);
      setLga([
        "", "Afijio", "Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan Central", "Ibadan North", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona-Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"
       ]);
    } else if (inputs.state == "Osun") {
      setLga([]);
      setLga([
        "", "Aiyedade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesha East", "Ilesha West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo-Otin", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"
      ]);
    }else if (inputs.state == "Ondo") {
      setLga([]);
      setLga([
        "", "Akoko North East", "Akoko North West", "Akoko South Akure East", "Akoko South West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji", "Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"
      ]);

    }
    console.log(inputs);
    // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
  };

  //when button is submitted
  const handlesubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
  
      [name]: value,
    }));
    //console.log(inputs);

        const API="http://api.afrimamafarms.com/Api/createOrder.php";
    //  const API = "http://localhost/websites/mamapi/Api/createOrder.php";
     // const API="https://afrimamafarms.com/endpoint/Api/createOrder.php";
    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
      //    setOrders(response.data);
         console.log(response.data);
           if(response.data.status !== 500){
            navigate(`/pay/${response.data.orderid} `);
            onClear();
            onUnShow();
            unLoader();
           }else{
             setErrormsg(response.data.message);
             unLoader();
           }        
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        unLoader();
      });
  };

     const linkurl="http://localhost/sales/Grittystore/Images/Product-img/";
 //  const linkurl="http://api.afrimamafarms.com/Images/product-img/";
  // const linkurl = "https://afrimamafarms.com/endpoint/Images/product-img/";

  return (
    <>
        {/* <Routes>
        <Route
          path="/pay/:id"
          element={<Payment Loader={Loader} unLoader={unLoader} />}
        />
        <Route
          path="/track/:id"
          element={<Track Loader={Loader} unLoader={unLoader} />}
        />
        <Route
          path="/success/:id"
          element={<Success Loader={Loader} unLoader={unLoader} />}
        />
        <Route path="/complete/" element={<Klumpsuccess />} />
      </Routes>
*/}
      {authModal.show ? (
        <div className="navright" style={{ width: authModal.width }}>

      <div className="times">
            <span>
            
              <FaTimes
                onClick={() => onHideAuthModal()}
                className="icons"
                style={{  marginTop: "5px",  marginLeft: "90%",  fontSize: "1.2em", }} />
            </span>
          </div>

          <div className="items">
            {/*  first box */}
            <div className="checkout-first-box">
              <ul>
                <li>
                  <img src={logo} alt="afrimama" className="footer-logo" />
                </li>
                <li>
                  <p>
                    Signup or Login get access to your bought items
                  </p>
                </li>
              </ul>
            </div>
            <div className="subtotal-container">
                 
                  <div className="form">
                    <form onSubmit={handlesubmit}>
                        <div className="form-container">
                      
                          <p className="contact-info">Contact Information</p>
                          {authModal.show ? (  //SIGNUP PAGE
                            <>
                          <div className="errorinfo"></div>
                          <div className="flexnameboxa">
                            <div className="namebox">
                              <label htmlFor="Name">FirstName: </label>
                              <input
                                type="text"
                                name="firstname"
                                value={inputs.firstname || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="namebox">
                              <label htmlFor="Name">LastName: </label>
                              <input
                                type="text"
                                name="lastname"
                                value={inputs.lastname || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="flexnameboxb">
                            <div className="namebox">
                              <label htmlFor="address">State </label>
                              <select
                                name="state"
                                onChange={handleChange}
                                required
                              >
                                {options.map((option) => (
                                  <option
                                    key={option}
                                    value={option}
                                    onChange={handleChange}
                                  >
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="namebox">
                              <label htmlFor="email">Email Address</label>
                              <input
                                type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="flexnameboxb">
                            <div className="namebox">
                              <label htmlFor="phono_no">Phone No</label>
                              <input
                                type="number"
                                name="phone"
                                value={inputs.phone || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="namebox">
                              <label htmlFor="address">Local Government </label>
                              <select
                                name="lga"
                                onChange={handleChange}
                                required
                              >
                                {localgov.map((lga) => (
                                  <option
                                    key={lga}
                                    value={lga}
                                    onChange={handleChange}
                                  >
                                    {lga}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="namebox">
                            <label htmlFor="address"> Password </label>
                            <input
                              type="text"
                              name="password"
                              value={inputs.password || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>

                         
                          <div className="namebox">
                            <label htmlFor="address"> Confirm Password </label>
                            <input
                              type="text"
                              name="confirmpass"
                              value={inputs.confirmpass || ""}
                              onChange={handleChange}
                            />
                          </div>

                          

                          <div className="namebox">
                           
                             <div style={{ color: "#FF6600" }}> {Errormsg} </div>  
                             <button type="submit" className="checkout-btn">Sign up  </button>                       
                          </div>

                          </> 
                          ) : (   //LOGIN PAGE
                          <>
                           <div className="namebox">
                            <label htmlFor="address">Email or  Mobile No </label>
                            <input
                              type="text"
                              name="address"
                              value={inputs.address || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>

                         
                          <div className="namebox">
                            <label htmlFor="address">Password</label>
                            <input
                              type="text"
                              name="referral"
                              value={inputs.referral || ""}
                              onChange={handleChange}
                            />
                          </div>
                          </>
                          ) }
                        </div>
                   
                    </form>
                  </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
 
 export default AuthModalBox;