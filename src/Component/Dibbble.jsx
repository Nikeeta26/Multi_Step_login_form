import React from 'react'
import home1 from './Dibble1.png';
import home2 from './Dibble4.png';
import home3 from './Dibble5.png';
import Dibbble1 from './D1.png';
export default function Dibbble(props)  {
    return (
      < >
      <hr></hr>
      <div className='main1'>
      <div className='Icons'>
      <div className='Icon1'><img className="ImportDibbble3" src={Dibbble1} alt="Home" /></div>
      <div className='Icon2'>
      <i class="fas fa-arrow-left"></i>
        </div>
      </div>
      <div className='ContainerClass1'>
      <div className='Heading'>
                <h3 >What brings you to Dribbble</h3>
                <p>select the that best describe you.Don't worry.you can explore other options later</p>
     </div>
      <div className='flexImg'>
        <div className='flexdiv'>
          <div>
            <img className='flexImg1'  src={home1} alt="Home"></img>
            </div>
            <h6>I'm a designer looking to share my work</h6>
            <div></div>
        </div>
        <div className='flexdiv'>
        <div>
            <img className='flexImg1'  src={home2} alt="Home"></img>
            </div>
            <h6>I'm a looking to hire designer</h6>
            <div></div>
        </div>
        <div className='flexdiv'>
        <div>
            <img className='flexImg1'  src={home2} alt="Home"></img>
            </div>
            <h6>I'm a looking fordesign inspiration</h6>
            <div></div>
        </div>
       
      </div>
      <button className='btnClass'>finish</button>
     </div>
     </div>
      </>
    )
}
