import React, { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images
import logo1 from "../assets/images/testimonial/logo-01.png";
import logo2 from "../assets/images/testimonial/logo-02.png";
import logo3 from "../assets/images/testimonial/logo-03.png";

import user1 from "../assets/images/testimonial/testimonial-01.png";
import user2 from "../assets/images/testimonial/testimonial-02.png";
import user3 from "../assets/images/testimonial/testimonial-03.png";
import user4 from "../assets/images/testimonial/testimonial-04.png";

import shape25 from "../assets/images/about/shape-25.png";
import shape30 from "../assets/images/about/shape-30.png";
import mapShape from "../assets/images/others/map-shape-3.png";
import darkMapShape from "../assets/images/others/dark-map-2-shape-3.png";

const testimonials = [
    {
        name: "Ray Sanchez",
        role: "Student",
        logo: logo1,
        image: user1,
    },
    {
        name: "Thomas Lopez",
        role: "Designer",
        logo: logo2,
        image: user2,
    },
    {
        name: "Amber Page",
        role: "Developer",
        logo: logo3,
        image: user3,
    },
    {
        name: "Robert Tapp",
        role: "Content Creator",
        logo: logo2,
        image: user4,
    },
];

const Testimonial = () => {
    useEffect(() => {
        sal({ once: true });
    }, []);

    return (
        <div className="testimonial-area-2 section-gap-large">
            <div className="container edublink-animated-shape">

                {/* SECTION TITLE */}
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div
                            className="section-title section-center"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <span className="pre-title">Testimonials</span>
                            <h2 className="title">
                                What Our Students <br /> Have To Say
                            </h2>
                            <span className="shape-line">
                                <i className="icon-19"></i>
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                                tempor incididunt labore dolore magna aliqua enim minim.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SWIPER */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    className="testimonial-activation"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-slide">
                                <div className="content">
                                    <div className="logo">
                                        <img src={item.logo} alt="Logo" />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor amet consectur elit adicing elit sed do
                                        eiusmod tempor incididunt enim ad minim veniam quis.
                                    </p>

                                    <div className="rating-icon">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="icon-23"></i>
                                        ))}
                                    </div>
                                </div>

                                <div className="author-info">
                                    <div className="thumb">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="info">
                                        <h5 className="title">{item.name}</h5>
                                        <span className="subtitle">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* SHAPES */}
                <ul className="shape-group">
                    <li className="shape-1" data-sal="fade">
                        <img src={shape30} alt="Shape" />
                    </li>
                    <li className="shape-2" data-sal="fade">
                        <img src={shape25} alt="Shape" />
                    </li>
                </ul>
            </div>

            <ul className="shape-group">
                <li className="shape-3" data-sal="fade">
                    <img className="d-block-shape-light" src={mapShape} alt="Shape" />
                    <img className="d-none-shape-dark" src={darkMapShape} alt="Shape" />
                </li>
            </ul>
        </div>
    );
};

export default Testimonial;
