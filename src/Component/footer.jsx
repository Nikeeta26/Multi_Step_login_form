import React from 'react'
import homeImage from './women.jpg';
import Dibbble2 from './D2.png';
import Dibbble1 from './D1.png';
export default function footer(props) {
  return (
    < >
     <footer className='footer'>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">  <img className="ImportDibbble" src={Dibbble2} alt="Home" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Inspiration </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Find Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Learn Design</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Go Pro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Hire Designers</a>
        </li>
      </ul>
    </div>
    <form class="d-flex FooterSearch">
      <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
      <i class="fa fa-envelope-open" aria-hidden="true"></i>
      
      <div className='footerImg'>
      <img className="Import" src={homeImage} alt="Home" />
      </div>
      <button class="btn btn-outline-submit" type="submit">Upload</button>
    </form>
  </div>
</nav> 
    <div className='footemain'>
         <h2>Please verify your email</h2>
         <div className='icon-container '>
         <i className="fa fa-envelope message text-secondary " ></i>
         </div>
         
         <p  className="text-secondary " href="#" tabindex="-1" aria-disabled="true">Please verify your email address.We've sent a confirmation email to:</p>
          <a className='text-dark'>account@refero.design</a>
          <p className="text-secondary ">Click the confirmation lick in that email to begin using Dribbble</p>
          <p className="text-secondary ">Didn't receive the email?Check your Span fo;der,it may have been Caught by a fiter.if you still don't see it,you can <a className="text-danger "> resend the confirmation email</a></p>
          <p className="text-secondary ">Wrong email address?<a className="text-danger">Change it.</a></p>
    </div>
    <div className='footeLink'>
      <div className='f1'>
        <img className="ImportDibbble2" src={Dibbble1} alt="Home" />
        <p className='text-secondary'>Dribbble is the world's leading </p>
        <p className='text-secondary'>community for creatives to share  grow </p>
        <p className='text-secondary'>and get hire</p>
        <div className='footer_icon'>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-dribbble" aria-hidden="true"></i>
        </div>
      </div>
      <div className='footuC'>
        <p className='text-dark'>For designer</p>
        <p className='text-secondary'>Go Pro</p>
        <p className='text-secondary'>Explore design work</p>
        <p className='text-secondary'>Design blog</p>
        <p className='text-secondary'>Overtime podcast</p>
        <p className='text-secondary'>Playlist</p>
        <p className='text-secondary'>weekly Warm-Up</p>
        <p className='text-secondary'>Refer aFriend</p>
        <p className='text-secondary'>Code of conduct</p>
      </div>
      <div className='footuC'>
        <p className='text-dark'> 
          Hire designers
        </p>
        <p className='text-secondary'>Pst a job opening</p>
        <p className='text-secondary'>Post a freelance project</p>
        <p className='text-secondary'>Search for designers</p>
        <p className=''>Brand</p>
        <p className='text-secondary'>Advertise with us</p>
      </div>
      <div>
        <p className='text-dark'>
          Company
        </p>
        <p className='text-secondary'>About </p>
        <p className='text-secondary'>Careers</p>
        <p className='text-secondary'>Support</p>
        <p className='text-secondary'>Media kit</p>
        <p className='text-secondary'>Testimonials</p>
        <p className='text-secondary'>API</p>
        <p className='text-secondary'>Terms of policy</p>
        <p className='text-secondary'>Cookie policy</p>
      </div>
      <div>
        <p className='text-dark'>
          Directories
        </p>
        <p className='text-secondary'> DEsign jobs</p>
        <p className='text-secondary'>Designers for hire</p>
        <p className='text-secondary'>Freelance designers for hirep</p>
        <p className='text-secondary'>Tags</p>
        <p className='text-secondary'>Places</p>
        <p className=''>Design assets</p>
        <p className='text-secondary'>Dribbble Marketplace</p>
        <p className='text-secondary'>Creative Market</p>
        <p className='text-secondary'>Fontspring</p>
        <p className='text-secondary'>Font policy</p>
        </div>
      <div>
        <p className='text-dark'>
          Design Resources
        </p>
        <p className='text-secondary'>Freelancing</p>
        <p className='text-secondary'>Design Hiring</p>
        <p className='text-secondary'>Design Portfolio</p>
        <p className='text-secondary'>Design Education</p>
        <p className='text-secondary'>Create Process</p>
        <p className='text-secondary'>Trends</p>
      </div>
    </div>
    <footer class="container">
  
   <p>2020-2021 icoder, Inc. <a href="#">Privacy</a>.<a href="#">Terns</a></p>
   <p class="float-right"><a href="#">Back to top</a></p>
</footer>
</footer>
    </>  
)
}