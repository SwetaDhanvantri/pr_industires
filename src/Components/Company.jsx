import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Company() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <div className="about-us text-center">
        <div className="about-intro ">
          <div className="overlay d-flex align-items-center justify-content-center">
            <h3 data-aos="zoom-in">About Us</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="company " id="company">
          <div className="container">
            <div className="rd-about d-lg-flex d-xl-flex  align-items-sm-center align-items-md-center">
              <div className="container d-flex flex-column  ">
                <div className="about-title">
                  <h3 data-aos="fade-right">What We Do?</h3>
                </div>
                <h2 data-aos="fade-right">
                  We have become the best option of our clients!{" "}
                </h2>
                <h5 className="my-3" data-aos="fade-right">
                  Experience of <span className="orange">33+ </span> Years
                </h5>

                <p className="" data-aos="fade-right">
                  Established in the year 1991 we “P. R. Industries” We are into
                  manufacturing of Rubber and Plastic components. In rubber we
                  have rubber gaskets, O rings with different colour, size,
                  hardness and material. In plastic we have the capacity to till
                  400gm.Under the guidance of our mentor “Mr.Bhuvnesh. ” we have
                  become the best option of our clients. Our mentor has years of
                  understanding of this Industry..
                </p>
                <div className="view-more d-flex justify-content-start"></div>
              </div>
              <div className="company-pic d-flex align-items-center justify-content-center">
                <img src="./assets/img/team.jpg" data-aos="zoom-in" class="img-responsive" alt="" />
              </div>
            </div>
          </div>
        </section>

        <div className="skill d-xl-flex  ">
          <div className="skill-img">
            <img src="/assets/img/services-5.jpg" alt="Skill Image" class="img-responsive" />
          </div>
          <div className="skill-bars">
            <h4>Our Skills</h4>
            <h5>We have a great experience in manufacturing and exporting!</h5>
            <p>
              We have many customers that got to know and trust us as a solid
              partner. Join the 50,000+ happy{" "}
              <span className="orange">PR Industries </span> customers.
            </p>
            <div className="progress-box">
              <div className="meta d-flex justify-content-between">
                <span className="item">Performance</span>
                <span className="item-value">99%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-bar1"></div>
              </div>
            </div>

            <div className="progress-box">
              <div className="meta d-flex justify-content-between">
                <span className="item">Promotion</span>
                <span className="item-value">60%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-bar2"></div>
              </div>
            </div>
            <div className="progress-box">
              <div className="meta d-flex justify-content-between">
                <span className="item">Average Improvements</span>
                <span className="item-value">80%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-bar3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Services */}
        <section>
          <div className="company-services text-center">
            <h4>Our Services</h4>
            <h5>
              We provide high quality <br />
              services
            </h5>
            <div className="container">
              <div className="row">
                <div className="col-xl-4  col-sm-12 col-12">
                  <div className="cs">
                    <div className="cs-img">
                      <img src="/assets/img/blog-1.jpg" alt="" class="img-responsive"/>
                    </div>
                    <h4>Quality assured products</h4>
                    <p>
                      As a manufacturer, supplier and exporter, we have always
                      sought to meet the specific demands of clients with our
                      quality-assured product line.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4  col-sm-12 col-12">
                  <div className="cs">
                    <div className="cs-img">
                      <img src="/assets/img/blog-recent-5.jpg" alt="" />
                    </div>
                    <h4>extensive experience</h4>
                    <p>
                      P.R Industries in the marketplace has grown greatly since
                      our incorporation in the year of 1991. Because of our
                      extensive experience in the market, we have earned the
                      trust of numerous clients over the decades.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="cs">
                    <div className="cs-img">
                      <img src="/assets/img/services-5.jpg" class="img-responsive" alt="" />
                    </div>
                    <h4>ethical manner</h4>
                    <p>
                      Another reason for our continuous growth is the ethical
                      manner in which we deal with our clients. Our
                      comprehensive product line is always guaranteed to meet or
                      exceed the highest quality specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team   */}
        <section>
          <div className="our-team">
            <div className="row">
            <div className="col-xl-6 col-12">
                <div className="team-img">
                  <img src="/assets/img/myteam.png" class="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-12 team-detail ">
               
                  <h4>Our Team</h4>
                  <h5>We bring a wealth of skills and experience from a wide range of backgrounds.</h5>
                  <h3><span className="orange"> PR Industires</span>  leadership</h3>
                  <p>
                   
                    The expansion of our company has included a wide number of
                    stakeholders, but our team has always been a vital
                    contributor to our incredible success. As a consequence of
                    the unending dedication and enthusiasm of our team, we have
                    built a well-known market position. In addition, our team
                    mates have always focused on the following characteristics:
                    They ensure that all client expectations are well understood
                    and addressed to the best of our abilities.
                  </p>
              
              </div>
             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Company;
