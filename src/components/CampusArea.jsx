import React, { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

// ✅ IMPORT IMAGES (IMPORTANT)
import campusImg from "../assets/images/others/campus-01.webp";
import shape21 from "../assets/images/about/shape-21.png";
import shape13 from "../assets/images/about/shape-13.png";
import shape25 from "../assets/images/about/shape-25.png";

const CampusArea = () => {

    useEffect(() => {
        sal({ once: true });
    }, []);

    return (
        <div className="edu-campus-area gap-lg-top-equal">
            <div className="container edublink-animated-shape">
                <div className="row g-5">

                    {/* LEFT IMAGE SECTION */}
                    <div
                        className="col-xl-7"
                        data-sal="slide-right"
                        data-sal-delay="50"
                        data-sal-duration="800"
                    >
                        <div className="campus-image-gallery">
                            <div className="campus-thumbnail">
                                <div className="thumbnail">
                                    <img src={campusImg} alt="Campus" />
                                </div>
                            </div>

                            <ul className="shape-group">
                                <li className="shape-1">
                                    <span></span>
                                </li>
                                <li className="shape-2">
                                    <img src={shape21} alt="Shape" />
                                </li>
                                <li className="shape-3">
                                    <img src={shape13} alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT CONTENT SECTION */}
                    <div
                        className="col-xl-5"
                        data-sal="slide-left"
                        data-sal-delay="50"
                        data-sal-duration="800"
                    >
                        <div className="campus-content">
                            <div className="inner">

                                <div className="section-title section-left">
                                    <h2 className="title">Project Life</h2>
                                    <span className="shape-line">
                                        <i className="icon-19"></i>
                                    </span>
                                </div>

                                <div className="features-list">

                                    <div className="features-box color-secondary-style">
                                        <div className="icon">
                                            <i className="icon-37"></i>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Project Duration</h5>
                                            <p>
                                                Nostrud exercitation laboris nisi aliquip commodo
                                                perspiciatis omnis iste natus.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="features-box color-primary-style">
                                        <div className="icon">
                                            <i className="icon-38"></i>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Arts & Clubs</h5>
                                            <p>
                                                Omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="features-box color-extra05-style">
                                        <div className="icon">
                                            <i className="icon-39"></i>
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Sports & Fitness</h5>
                                            <p>
                                                Tempor incididunt ut labore et dolore magna aliqua enim
                                                minim veniam quis.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <ul className="shape-group">
                                <li className="shape-4">
                                    <span></span>
                                </li>
                                <li className="shape-5">
                                    <span></span>
                                </li>
                                <li className="shape-6">
                                    <img src={shape25} alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CampusArea;
