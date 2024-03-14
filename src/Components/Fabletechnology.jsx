import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/style/Fabletech.css";

function Fabletechnology() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  
  return (
    <div>
      <section className="fable-head">
        <h1 data-aos="fade-up">
          Loved by 40K+ happy <br />
          customers with our theme
        </h1>
        <h3 data-aos="fade-up">
          We are <span className="orange">Fable Technologies </span>.
        </h3>
        <p data-aos="fade-up">
          We will help you build your site at the desired time with minimal
          effort. Numerous users recommend our theme
        </p>
      </section>
      <div className="py-4">
        <div className="container fabletech">
          <div className="d-flex justify-content-center sec-1">
            <div className=" d-flex flex-column justify-content-center  flex-wrap">
              <h1 data-aos="fade-right">
                UI/UX <br />
                Design By <br />
                <span className="orange">Fable Technologies</span>
              </h1>

              <div className="line">
                <span></span>
              </div>
              <p data-aos="fade-right">
                It will help you build your site at the desired time with
                minimal effort. Numerous users recommend our theme.
              </p>

              <button className="learn-btn" data-aos="fade-right">
                Learn More <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </div>
            <div className="">
              <img
                src="/assets/img/Fabletach/headerMain.png"
                alt="Header"
                height="600px"
                data-aos="zoom-in"
              />
            </div>
          </div>

          <div className="fun text-center">
            <h4 data-aos="fade-up">FEATURES</h4>
            <h5 data-aos="fade-up">
              Create your own unique website and app design and have fun doing
              it!
            </h5>
            <div className="container">
              <div className="row text-center py-5">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                  <div>
                    <img
                      src="/assets/img/Fabletach/ux-design (2).png"
                      alt="Coding"
                      height="100px"
                    />
                  </div>
                  <h3>Growth trends 2023</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    natus esse eius labore reiciendis quis qui veniam et, odio
                    vitae.
                  </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                  <div>
                    <img
                      src="/assets/img/Fabletach/ux-design.png"
                      alt="Coding"
                      height="100px"
                    />
                  </div>
                  <h3> Mission statement</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    natus esse eius labore reiciendis quis qui veniam et, odio
                    vitae.
                  </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                  <div>
                    <img
                      src="/assets/img/Fabletach/coding.png"
                      alt="Coding"
                      height="100px"
                    />
                  </div>
                  <h3>Professional solid build</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    natus esse eius labore reiciendis quis qui veniam et, odio
                    vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fable-about d-flex justify-content-evenly align-items ">
            <div>
              <img
                src="/assets/img/Fabletach/services-2.jpg"
                alt=""
                height="480px"
                data-aos="zoom-in"
              />
            </div>
            <div className="p-40">
              <h4 data-aos="fade-left">What we do</h4>
              <h5 data-aos="fade-left">
                Are you looking for a solid theme for your website and app?
              </h5>
              <p data-aos="fade-left">
                <span className="orange"> Fable Technologies</span> is a very
                powerful theme which suits both users with no programming
                background as well as professional web designers.
              </p>

              <Link to="/Contact">
                {" "}
                <button className="Contact-us" data-aos="fade-left">
                  Contact us<i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fabletechnology;