import React from "react";

const Footer = () => {
    return (
        <footer className="edu-footer footer-dark bg-image footer-style-3">

            {/* FOOTER TOP */}
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">

                        {/* ABOUT */}
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img
                                            className="logo-light"
                                            src="/assets/images/logo/logo-light-2.png"
                                            alt="Corporate Logo"
                                        />
                                    </a>
                                </div>

                                <p className="description">
                                    MindBrain Innovations Pvt. Ltd. is a forward-thinking technology
                                    company headquartered in Bhubaneswar, Odisha, India that
                                    specializes in building intelligent and connected solutions
                                    through emerging technologies, with a strong emphasis on the
                                    Internet of Things (IoT).
                                </p>

                                <div className="widget-information">
                                    <ul className="information-list">
                                        <li>
                                            <span>Add:</span>
                                            Chandaka Industrial Estate, Patia, Bhubaneswar – 751024,
                                            Odisha, India 🇮🇳
                                        </li>
                                        <li>
                                            <span>Call:</span>
                                            <a href="tel:+919178587486">+91 9178587486</a>
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="mailto:careers@mindbrain.co.in">
                                                careers@mindbrain.co.in
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ONLINE PLATFORM */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="edu-footer-widget explore-widget">
                                <h4 className="widget-title">Online Platform</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/courses">Courses</a></li>
                                        <li><a href="/instructors">Instructor</a></li>
                                        <li><a href="/events">Events</a></li>
                                        <li><a href="/instructor-profile">Instructor Profile</a></li>
                                        <li><a href="/purchase-guide">Purchase Guide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="col-lg-2 col-sm-6">
                            <div className="edu-footer-widget quick-link-widget">
                                <h4 className="widget-title">Links</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        <li><a href="/contact-us">Contact Us</a></li>
                                        <li><a href="/gallery">Gallery</a></li>
                                        <li><a href="/blog">News & Articles</a></li>
                                        <li><a href="/faq">FAQ's</a></li>
                                        <li><a href="/login">Sign In / Registration</a></li>
                                        <li><a href="/coming-soon">Coming Soon</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CONTACTS */}
                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <p className="description">
                                        Enter your email address to register to our newsletter
                                        subscription
                                    </p>

                                    <div className="input-group footer-subscription-form">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your email"
                                        />
                                        <button
                                            className="edu-btn btn-secondary btn-medium"
                                            type="button"
                                        >
                                            Subscribe <i className="icon-4"></i>
                                        </button>
                                    </div>

                                    <ul className="social-share icon-transparent">
                                        <li>
                                            <a href="#" className="color-fb">
                                                <i className="icon-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/mindbrain/"
                                                className="color-linkd"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <i className="icon-linkedin2"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="color-ig">
                                                <i className="icon-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="color-twitter">
                                                <i className="icon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="color-yt">
                                                <i className="icon-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>
                                    © 2024{" "}
                                    <a href="https://mindbrain.co.in" target="_blank" rel="noreferrer">
                                        MindBrain Innovations
                                    </a>
                                    . All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
