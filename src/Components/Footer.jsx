import React , {useEffect}  from 'react'


function Footer() {
  
  return (
    <>
    <footer class="pr-footer d-flex flex-column justify-content-between" id="contact-Us">
    <div class="container text-center">
     {/* <div class="text-center">
        <h4 class="mb-4">Contact us</h4>
      </div> */}
      
      <div class="row">
        <div class="col-xl-3 col-md-3 col-sm-12 text-left">
          <h4 class="mt-2" >Follow Us</h4>
          <div class="social1   mrb-30" >

            <i class="fa-brands fa-facebook-f "></i>
            <i ></i>
            <i class="fa-brands fa-twitter mx-1"></i>
            <i class="fa-brands fa-linkedin mx-1"></i>



          </div>
          <a href="tel:+917942551757">Phone: +91-9971885920</a>
          <a href="mailto:prindustry@gmail.com">Mail: parasrubber25@gmail.com</a>

         
        
        </div>
        <div class="col-xl-3 col-md-3 col-sm-12 text-left">
          <div>
            <h4>Office</h4>
             <p> PR Industries  <br/>
              Plot No: F-9 Faridabad Industrial Town(F.I.T) ,<br/> 
              Sector-57 Faridabad, <br/>
            Haryana- 121004, <br/>India </p>

          

          </div>
        </div>
        <div class="col-xl-3 col-md-3 col-sm-12 text-left">
          <div>
            <h4>Quick Links</h4>
            <div class="imp-links">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Rubber & Plastic Componey</a>
              <a href="">Bio Sage</a>
              <a href="">Fable Technology</a>
            </div>

          </div>
        </div>
        <div class="col-xl-3 col-md-3 col-sm-12 text-left">
          <div>
            <h4>Get Direction</h4>
            <div class="google-map my-2">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.41080115337!2d77.28782957919832!3d28.31616723610054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb3f0ac10009%3A0x6bfd300b6705d73!2sP.R%20Industires!5e0!3m2!1sen!2sin!4v1708598544459!5m2!1sen!2sin"
                width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </div>
    
    
    </div>
    <div class="lb-footer text-center ">
      <div class="container">
        <p class="mb-1">Copyright@2024 PR Industries - All Right Reserved</p>
      </div>
    
    </div>

  </footer>
    </>
  )
}

export default Footer