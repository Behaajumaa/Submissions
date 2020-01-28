import React from "react";
import "./App.css";


export default function App(props) {
  console.log(props);
  return (

    
<div>

        <div className="container-contact100">
                <div className="wrap-contact100">
                  <form className="contact100-form validate-form">
                    <span className="contact100-form-title">
                      Contact Us To Donate
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                      <label className="label-input100" htmlFor="name">Full name</label>
                      <input id="name" className="input100" type="text" name="name" placeholder="Enter your name..." />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                      <label className="label-input100" htmlFor="email">Email Address</label>
                      <input id="email" className="input100" type="text" placeholder="Enter your email..." />
                    </div>
                    <div className="wrap-input100 validate-input ">
                      <label className="label-input100">Phone Number</label>
                      <input id="email" className="input100" type="text" placeholder="Enter your Phone Number" />
                    </div>
                    <div className="wrap-input100 validate-input ">
                      <label className="label-input100">Location</label>
                      <input id="email" className="input100" type="text" placeholder="Enter your Location" />
                    </div>
                    <div className="container-contact100-form-btn">
                      <button className="contact100-form-btn">
                        Send
                      </button>
                    </div>
                  </form>
                  <div className="contact100-more flex-col-c-m" style={{backgroundImage: 'url("./img.cont.png")'}}>
                  </div>
                </div>
              </div>






</div>
      

  );
}