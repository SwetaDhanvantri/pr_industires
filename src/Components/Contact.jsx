import React, {useEffect} from "react";
import "./assets/style/Contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Contact() {
  useEffect(()=>{
    Aos.init({duration:2000,
      once: true,});
   },[]);
  return (
    <>
     <div className="about-us text-center">
        <div className="about-intro ">
          <div className="overlay d-flex align-items-center justify-content-center">
            <h3 data-aos="zoom-in">Contact Us</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mtb">
          <div className="col-xl-6 col-12 text-center">
            <div className="container">
              <div className="contact-icon">
                <img src="/assets/img/contact/alarm.png" alt="" height="60px" width="60px" data-aos="zoom-in" />
              </div>
              <h3 data-aos="zoom-in">Bussiness Hours</h3>
              <p data-aos="zoom-in">We are open 6 days as week from 9am to 6pm, Sunday closed</p>
            </div>
          </div>
         
          <div className="col-xl-6 col-12 text-center">
          <div className="container">
              <div className="contact-icon">
                <img src="/assets/img/contact/map.png" alt="" height="60px" width="60px" data-aos="zoom-in" />
              </div>
              <h3 data-aos="zoom-in">PR Industries Address</h3>
              <p data-aos="zoom-in">Plot No.F9 Fit (Faridabad Industrial Town), Sector-57, Faridabad, Haryana, 121004, India</p>
            </div>
          </div>
           
          <div className="col-xl-6 col-12 text-center">
          <div className="container">
              <div className="contact-icon">
                <img src="/assets/img/contact/phone-call.png" alt="" height="60px" width="60px" data-aos="zoom-in" />
              </div>
              <h3 data-aos="zoom-in">Let's Talk</h3>
              <p data-aos="zoom-in">Phone Number: +91 7942551757</p>
            </div>
          </div>
           
          <div className="col-xl-6 col-12 text-center">
          <div className="container">
              <div className="contact-icon">
                <img src="/assets/img/contact/mail.png" alt="" height="60px" width="60px" data-aos="zoom-in" />
              </div>
              <h3 data-aos="zoom-in">Mail Us</h3>
              <p data-aos="zoom-in">Mail Address: prindustries@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <section className="Contact-page">
    //   <div className="container-contact100">
    //     <div className="wrap-contact100">
    //       <form className="contact100-form validate-form">
    //         <span className="contact100-form-title">Send Us A Message</span>
    //         <label className="label-input100" for="first-name">
    //           Tell us your name *
    //         </label>
    //         <div
    //           className="wrap-input100 rs1-wrap-input100 validate-input"
    //           data-validate="Type first name"
    //         >
    //           <input
    //             id="first-name"
    //             className="input100"
    //             type="text"
    //             name="first-name"
    //             placeholder="First name"
    //             fdprocessedid="5zqppi"
    //           />
    //           <span className="focus-input100"></span>
    //         </div>
    //         <div
    //           className="wrap-input100 rs2-wrap-input100 validate-input"
    //           data-validate="Type last name"
    //         >
    //           <input
    //             className="input100"
    //             type="text"
    //             name="last-name"
    //             placeholder="Last name"
    //             fdprocessedid="l773n"
    //           />
    //           <span className="focus-input100"></span>
    //         </div>
    //         <label className="label-input100" for="email">
    //           Enter your email *
    //         </label>
    //         <div
    //           className="wrap-input100 validate-input"
    //           data-validate="Valid email is required: ex@abc.xyz"
    //         >
    //           <input
    //             id="email"
    //             className="input100"
    //             type="text"
    //             name="email"
    //             placeholder="Eg. example@email.com"
    //             fdprocessedid="yw527"
    //           />
    //           <span className="focus-input100"></span>
    //         </div>
    //         <label className="label-input100" for="phone">
    //           Enter phone number
    //         </label>
    //         <div className="wrap-input100">
    //           <input
    //             id="phone"
    //             className="input100"
    //             type="text"
    //             name="phone"
    //             placeholder="Eg. +1 800 000000"
    //             fdprocessedid="hooe1"
    //           />
    //           <span className="focus-input100"></span>
    //         </div>
    //         <label className="label-input100" for="message">
    //           Message *
    //         </label>
    //         <div
    //           className="wrap-input100 validate-input"
    //           data-validate="Message is required"
    //         >
    //           <textarea
    //             id="message"
    //             className="input100"
    //             name="message"
    //             placeholder="Write us a message"
    //           ></textarea>
    //           <span className="focus-input100"></span>
    //         </div>
    //         <div className="container-contact100-form-btn">
    //           <button className="contact100-form-btn" fdprocessedid="1bm68m">
    //             Send Message
    //           </button>
    //         </div>
    //       </form>
    //       <div className="contact100-more ">
    //         <div className="container text-white text-center">
    //           <h4>
    //             Contact US
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Contact;
