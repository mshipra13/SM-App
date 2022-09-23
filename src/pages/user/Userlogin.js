import "./Userlogin.css"
import React from 'react'

function Userlogin() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="Img">
          <div className="container-img">
        <img className='profile' src="assest/nn.png" alt="" />
        </div>
        </div>
        <div>
        <h1>Login/Signup </h1>
          <div>
          {/* <img className='email' src="assest/ R.jpg" alt="email" /> */}
          <input type="text" placeholder="Email/username" />
          </div>
           <div className="second-input">
          {/* <img className='pass' src="assest/ pp.jpg" alt="pass" /> */}
          <input type="text" placeholder="Password" />
          </div>
          <div className="login-button">
          <button>Login</button>
          </div>
          <p className="link">
            <a href="#">Forgot Password</a>or <a href="#">Sign Up</a>
          </p>
          </div>
          </div>
          </div>
           </div>
 
         
  );
}

export default Userlogin



