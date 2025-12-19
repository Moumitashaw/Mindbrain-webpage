import React from "react";

const UniversityCTA = () => {
    return (
        <div
            className="university-cta-wrapper edu-cta-banner-area bg-image"
            style={{
                backgroundImage: "url(/assets/images/bg/bg-14.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div
                                className="section-title section-center"
                                data-sal="slide-up"
                                data-sal-delay="150"
                                data-sal-duration="800"
                            >
                                <h2 className="title">
                                    Get Your Quality Skills{" "}
                                    <span className="color-primary">Certificate</span> Through
                                    EduBlink
                                </h2>

                                <a
                                    href="/contact-us"
                                    className="edu-btn btn-secondary"
                                >
                                    Get started now <i className="icon-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* SHAPES */}
                    <ul className="shape-group">
                        <li className="shape-01">
                            <img
                                src="/assets/images/cta/shape-10.png"
                                alt="shape"
                            />
                        </li>
                        <li className="shape-02">
                            <img
                                src="/assets/images/cta/shape-09.png"
                                alt="shape"
                            />
                        </li>
                        <li className="shape-03">
                            <img
                                src="/assets/images/cta/shape-08.png"
                                alt="shape"
                            />
                        </li>
                        <li className="shape-04">
                            <img
                                src="/assets/images/about/shape-13.png"
                                alt="shape"
                            />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UniversityCTA;
