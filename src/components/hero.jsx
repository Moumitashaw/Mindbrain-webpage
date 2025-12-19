import React, { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroBanner = () => {
  useEffect(() => {
    sal({ once: true });
  }, []);

  return (
    <div className="hero-banner hero-style-3 bg-image">

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".slide-next",
          prevEl: ".slide-prev",
        }}
        className="university-activator"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{
              backgroundImage:
                "url(/assets/images/hero/bg-image-17.jpg)",
            }}
          >
            <div className="thumbnail-bg-content">
              <div className="container edublink-animated-shape">
                <div className="row">
                  <div className="col-7">
                    <div className="banner-content">
                      <span
                        className="subtitle"
                        data-sal="slide-up"
                        data-sal-duration="1000"
                      >
                        Welcome to EduBlink
                      </span>

                      <h1
                        className="title"
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-duration="1000"
                      >
                        Innovating with Smart IoT Solutions
                      </h1>

                      <p
                        data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-duration="1000"
                      >
                        Empowering learners and industries with hands-on IoT
                        training and automation.
                      </p>

                      <div
                        className="banner-btn"
                        data-sal="slide-up"
                        data-sal-delay="400"
                        data-sal-duration="1000"
                      >
                        <a href="#" className="edu-btn btn-secondary">
                          Find courses <i className="icon-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{
              backgroundImage:
                "url(/assets/images/hero/bg-image-26.jpg)",
            }}
          >
            <div className="thumbnail-bg-content">
              <div className="container edublink-animated-shape">
                <div className="row">
                  <div className="col-7">
                    <div className="banner-content">
                      <span className="subtitle">Welcome to EduBlink</span>
                      <h1 className="title">
                        Innovating with Smart IoT Solutions
                      </h1>
                      <p>
                        Empowering learners and industries with hands-on IoT
                        training and automation.
                      </p>
                      <div className="banner-btn">
                        <a href="#" className="edu-btn btn-secondary">
                          Find courses <i className="icon-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{
              backgroundImage:
                "url(/assets/images/hero/bg-image-28.jpg)",
            }}
          >
            <div className="thumbnail-bg-content">
              <div className="container edublink-animated-shape">
                <div className="row">
                  <div className="col-7">
                    <div className="banner-content">
                      <span className="subtitle">Welcome to EduBlink</span>
                      <h1 className="title">
                        Innovating with Smart IoT Solutions
                      </h1>
                      <p>
                        Empowering learners and industries with hands-on IoT
                        training and automation.
                      </p>
                      <div className="banner-btn">
                        <a href="#" className="edu-btn btn-secondary">
                          Find courses <i className="icon-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* CONTROLS */}
        <div className="hero-slider-bg-controls">
          <div className="swiper-slide-controls slide-prev">
            <i className="icon-west"></i>
          </div>
          <div className="swiper-slide-controls slide-next">
            <i className="icon-east"></i>
          </div>
        </div>
      </Swiper>

      {/* SHAPES */}
      <ul className="shape-group">
        <li className="shape-1" data-sal="fade" data-sal-delay="1000">
          <img
            src="/assets/images/others/shape-10.png"
            alt="Shape"
          />
        </li>
        <li className="shape-2" data-sal="fade" data-sal-delay="1000">
          <img
            src="/assets/images/others/shape-11.png"
            alt="Shape"
          />
        </li>
        <li className="shape-3">
          <img
            src="/assets/images/others/shape-25.png"
            alt="Shape"
          />
        </li>
      </ul>
    </div>
  );
};

export default HeroBanner;
