import React from 'react'
import homeImage from './women.jpg';
import Dibbble1 from './D1.png';
export default function AccounrCreate(props) {
  return (
    < >
    <div className='account'>
      <hr></hr>
      <h2>Welcome!Let's create your profile</h2>
      <p>Let other get to know you better! You can do these later</p>
      <h5>Add an avatar</h5>
          <div className='profile'>
              
              <div className='ProfileImgWomen'>
              <img className="women" src={homeImage} alt="Home" />
              </div>
            
          <div className='chooseImg'>
            <button>Choose image</button>
            <div className='option'>
            <select>
              <option>Or choose one of our defaults</option>
              <option></option>
              <option></option>
            </select>
            </div>
          </div>
      </div>
      <h5>Add your location</h5>
      <input type='text' placeholder='Enter your location' className='Location'></input>
      <div className='submit'>
      <button className='btn-pimary Press'>Next</button>
      <p>or Press RETURN</p>
      </div>
     
    </div>
    </>
  )
}