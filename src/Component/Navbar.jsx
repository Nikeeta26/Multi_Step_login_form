import React from 'react'
import homeImage from './home.png';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
 
  
  return (
    < >
    <div className='header'>
            <div className='header1'>
           
            <img className="img" src={homeImage} alt="Home" />

            </div>

              <div className='header2'>

              
                <div className="form-container">
                <div className="member"><p>Already a member?<Link className={(e)=>{return e.isActive?"red":""}}to="/contact">Signup</Link></p></div>
                      <form className='form' >
                        <div class="heading">
                       
                            <h3>Sign Up to Dibbler</h3>
                            
                            <li>Username has already been taken</li>
                          </div>
                        
                          <div className="form-group first">
                          <div>
                            <div className='InputLable'>
                            <label for="name" className="label label1">Name:</label>
                            </div>
                            <div className='Input input1'>
                            <input type="text" id="name" name="name" className="form-control Input" placeholder=' john' required style={{ backgroundColor: 'rgb(247, 241, 241)'}}/>
                            </div>
                            </div>
                            <div>
                            <div className='InputLable'>
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <label for="name" className="label label1">Username:</label>
                            </div>
                            <div className='Input input1'>
                            <input type="text" id="username" name="username" className="form-control Input" required placeholder=' john' style={{ backgroundColor: ' rgb(234, 217, 223)'}}/>
                            </div>
                          </div>
                          </div>
                          <div className="form-group">
                            <label for="email">Email:</label>
                            <div className='Input'>
                            <input type="email" id="email" name="email" placeholder='abc@gmail.com' className="form-control Input"required style={{ backgroundColor: ' rgb(247, 241, 241)'}}/>
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="password">Password:</label>
                            <div className='InputPass'>
                            <input type="password" id="password" name="password" placeholder='6 character'className="form-control Input" required style={{ backgroundColor: ' rgb(247, 241, 241)'}}/>
                            </div>
                          </div>
                            <div class="form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <p>Creating an account means you're okay with our Terms of Service Privacy Policy and our default Notification
                                Settings</p>
                            </div>
                          
                          <div className="form-group">
                            <button type="submit" class="btn">Create Account</button>
                          </div>
                          <div className="form-group">

                          <p class="text">This site is protected by CAPTION and the Google<a>Privacy Policy</a>and<a>Terms of Service</a></p>
                          </div>
                        </form>
                 </div>
            </div>
    </div>
    </>

  )
} 

