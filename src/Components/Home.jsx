import React, {useEffect} from "react";
import { Link } from "react-router-dom";
// import Company from "./Company";
import BgVideo from '../Components/assets/bgVideo.mp4';
// import BgVideo from '../Components/assets/videos/bgVideo.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home() {
 useEffect(()=>{
  Aos.init({duration:2000,
    once: true,});
 },[]);
  return (
    <>
    
    <div className="home" id="home">
    <video autoPlay muted loop >
      <source src={BgVideo} type="video/mp4" />
    </video>
    <div className="overlay"></div>
    <div className="home-content">
      <h1 data-aos="fade-up">PR INDUSTRIES</h1>
      <p data-aos="fade-up"> Exporter and Manufacturer</p>
      <button data-aos="fade-up">Our Features <i className="fa-solid fa-arrow-right-long"></i></button>
    </div>
  </div>
  {/* About scetion */}
  <section className="company " id="company">
    <div className="container">

      <div className="rd-about d-lg-flex d-xl-flex  align-items-sm-center align-items-md-center">
        <div className="container d-flex flex-column  ">
          <div className="about-title">
            <h3 data-aos="fade-right">What We Do?</h3>
          </div>
          <h2 data-aos="fade-right">We have become the best option of our clients! </h2>
          <h5 className="my-3" data-aos="fade-right">Experience of <span className="orange">33+ </span> Years</h5>

          <p className="" data-aos="fade-right">Established in the year 1991 we “P. R. Industries” We are into manufacturing of Rubber
            and
            Plastic components.</p>
            <div className="view-more d-flex justify-content-start" >
            <Link to="./Company "data-aos="fade-right"><button className="">View More <i className="fa-solid fa-arrow-right-long"></i></button> </Link>
            </div>

        </div>
        <div className="company-pic d-flex align-items-center justify-content-center">

          <img src="./assets/img/team.jpg" data-aos="zoom-in" alt=""/>


        </div>
      </div>

    </div>



  </section>
  

 {/* Why us */}
  <section className="why-us " >
    <div className="container">

      <div className=" ">
        <div className=" text-center d-flex flex-column align-items-center">
          <h4 data-aos="fade-up">Why Choose us</h4>
          <h2 data-aos="fade-up">Facts for which we are the preferred choice of our clients:</h2>
        </div>

        <div className="">

          <div className="row text-center">
            <div className="col-4">
              <div className="container py-3">
                <div className="why-img">
                  <img src="./assets/img/fast-delivery.png"  alt=""/>
                </div>

                <h5 >Timely delivery</h5>
              </div>

            </div>
            <div className="col-4">
              <div className="container  py-3">
                <div className="why-img">
                  <img src="./assets/img/manufacturing.png"  alt=""/>
                </div>
                <h5 > State-of-art manufacturing unit</h5>
              </div>

            </div>
            <div className="col-4">
              <div className="container  py-3">
                <div className="why-img">
                  <img src="./assets/img/policy.png"  alt=""/>
                </div>
                <h5 > Fair business policy</h5>
              </div>

            </div>
            <div className="col-4">
              <div className="container  py-3">
                <div className="why-img">
                  <img src="./assets/img/features.png"  alt=""/>
                </div>
                <h5 >
                  Qualitative range of products</h5>
              </div>

            </div>
            <div className="col-4">
              <div className="container  py-3">
                <div className="why-img">
                  <img src="./assets/img/worldwide.png"  alt=""/>
                </div>
                <h5 >
                  Wide distribution network</h5>
              </div>

            </div>
            <div className="col-4">
              <div className="container  py-3">
                <div className="why-img">
                  <img src="./assets/img/price-tag.png"  alt=""/>
                </div>
                <h5 >
                  Affordable price structure</h5>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

  </section>

  {/* Our Products */}
<div className="container">
  
  <div className="our-products text-center ">
    <h4 data-aos="fade-up">Our Products</h4>
    <h5 data-aos="fade-up">Here are some or our main Plastic & Rubber components</h5>
    <div className="row">
      
      <div className="col-xl-4">
        <div className="p1">
          <div className="title mb-4">
            <h4>
            Cooling Fan 1 HP Black
            </h4>
          </div>
          <div className="image">
            <img src="/assets/img/IMGNONBG/cooling_fan_1_hp_black-removebg-preview.png" alt="Cooling Fan" />
          </div>
          <div className="mx-4 pb-3 pt-4">
          <Link to='/PlasticProducts'><button className="btn w-100 btn-now">See Now <i className="fa-solid fa-arrow-right-long"></i></button></Link> 
          </div>
        </div>
      </div>
      <div className="col-xl-4">
      <div className="p2">
          <div className="title mb-4">
            <h4 className="">
          GDF 1 HP
            </h4>
          </div>
          <div className="image">
            <img src="/assets/img/IMGNONBG/GDF_1_HP-removebg-preview.png" alt="GDF 1HP" />
          </div>
          <div className="mx-4 pb-3 pt-4">
          <Link to='/RubberProducts'>   <button className="btn w-100 btn-now">See Now <i className="fa-solid fa-arrow-right-long"></i></button></Link>
          </div>
        
        </div>
      </div>
      <div className="col-xl-4">
      <div className="p1">
          <div className="title mb-4">
            <h4>
           Handle Perfect Type
            </h4>
          </div>
          <div className="image">
            <img src="/assets/img/IMGNONBG/Handle_perfect-removebg-preview.png" alt="Handle perfect type" />
          </div>
          <div className="mx-4 pb-3 pt-4">
          <Link to='/PlasticProducts'><button className="btn w-100 btn-now">See Now <i className="fa-solid fa-arrow-right-long"></i></button></Link>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
  </>
  );
}

export default Home;
