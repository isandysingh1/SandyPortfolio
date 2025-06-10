import React from "react";

const Home = () => {
  return (
    <section id="hero" className="padding-medium">
      <div className="container-fluid padding-side text-white">
        <div className="d-none d-lg-block position-absolute bottom-0 end-0">
          {/* <img src="images/banner-img.png" alt="banner" className="img-fluid" /> */}
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center d-lg-none" data-aos="fade-up" data-aos-duration="1400">
            <img src="images/banner-img.png" alt="mobile-banner" className="img-fluid" />
          </div>
          <div className="col-lg-6 ms-lg-5">
            <h1
              className="banner-size fw-medium display-1 my-4"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              Hi, I'm Sandy Singh<span className="text-primary"> Web Developer & Cybersecurity Enthusiast </span>
            </h1>
            <p className="fs-5" data-aos="fade-up" data-aos-duration="1600">
              I build fast, secure, and user-friendly web experiences. Let’s work together to bring your ideas to life.
            </p>
            <a
              href="/portfolio"
              className="btn rounded-pill button text-white mt-4 position-relative pe-5"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <span> Explore My Work </span>
              <div className="position-absolute top-50 end-0 translate-middle-y me-3">
                <svg className="arrow-right text-white p-1" width="28" height="28">
                    
                  <use xlinkHref="#arrow-right"></use>
                /* </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
