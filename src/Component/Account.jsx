import React from 'react'
export default function Contact(props) {
  return (
    < >
    <div className='account'>
     <hr></hr>
      <h2>Welcome!Let's create your profile</h2>
      <p>Let other get to know you better! You can do these later</p>
      <h5>Add an avatar</h5>
          <div className='profile'>
          
              <div className='ProfileImg'>
              <i class="fa fa-camera" aria-hidden="true"></i>
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
      <div>
      <button className='btn-pimary Next'>Next</button>
      </div>
     
    </div>
    </>
  )
}