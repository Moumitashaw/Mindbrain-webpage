import React, { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

const Events = () => {

    useEffect(() => {
        sal({ once: true });
    }, []);

    return (
        <div className="edu-event-area event-area-1 gap-large-text">
            <div className="container edublink-animated-shape">

                {/* SECTION TITLE */}
                <div
                    className="section-title section-center"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <span className="pre-title">Events & News</span>
                    <h2 className="title">Popular Events & News</h2>
                    <span className="shape-line">
                        <i className="icon-19"></i>
                    </span>
                </div>

                {/* EVENTS GRID */}
                <div className="row g-5">

                    {/* EVENT 1 */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-duration="800"
                    >
                        <div className="edu-event event-style-1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src="/assets/images/event/event-01.jpg" alt="Event" />
                                    </a>
                                    <div className="event-time">
                                        <span><i className="icon-33"></i>08:00AM - 10:00PM</span>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="event-date">
                                        <span className="day">30</span>
                                        <span className="month">SEP</span>
                                    </div>
                                    <h5 className="title">Learn English in Ease</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectur elit sed eiusmod ex
                                        tempor incididunt labore dolore magna.
                                    </p>
                                    <ul className="event-meta">
                                        <li><i className="icon-40"></i>Newyork City, USA</li>
                                    </ul>
                                    <div className="read-more-btn">
                                        <a className="edu-btn btn-small btn-secondary" href="#">
                                            Learn More <i className="icon-4"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EVENT 2 */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-duration="800"
                    >
                        <div className="edu-event event-style-1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src="/assets/images/event/event-02.jpg" alt="Event" />
                                    </a>
                                    <div className="event-time">
                                        <span><i className="icon-33"></i>04:00PM - 07:00PM</span>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="event-date">
                                        <span className="day">25</span>
                                        <span className="month">DEC</span>
                                    </div>
                                    <h5 className="title">Annual Workshop</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectur elit sed eiusmod ex
                                        tempor incididunt labore dolore magna.
                                    </p>
                                    <ul className="event-meta">
                                        <li><i className="icon-40"></i>Washington D.C, USA</li>
                                    </ul>
                                    <div className="read-more-btn">
                                        <a className="edu-btn btn-small btn-secondary" href="#">
                                            Learn More <i className="icon-4"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EVENT 3 */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="800"
                    >
                        <div className="edu-event event-style-1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src="/assets/images/event/event-03.jpg" alt="Event" />
                                    </a>
                                    <div className="event-time">
                                        <span><i className="icon-33"></i>10:00AM - 11:00AM</span>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="event-date">
                                        <span className="day">15</span>
                                        <span className="month">NOV</span>
                                    </div>
                                    <h5 className="title">Design Think & Innovation</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectur elit sed eiusmod ex
                                        tempor incididunt labore dolore magna.
                                    </p>
                                    <ul className="event-meta">
                                        <li><i className="icon-40"></i>Newyork City, USA</li>
                                    </ul>
                                    <div className="read-more-btn">
                                        <a className="edu-btn btn-small btn-secondary" href="#">
                                            Learn More <i className="icon-4"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* VIEW ALL */}
                <div
                    className="event-view-all-btn"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="1200"
                >
                    <h6 className="view-text">
                        The Latest Events from EduBlink.
                        <a href="#" className="btn-transparent">
                            View All <i className="icon-4"></i>
                        </a>
                    </h6>
                </div>

                {/* SHAPES */}
                <ul className="shape-group">
                    <li
                        className="shape-1"
                        data-sal="fade"
                        data-sal-delay="500"
                        data-sal-duration="200"
                    >
                        <img
                            className="rotateit"
                            src="/assets/images/about/shape-13.png"
                            alt="Shape"
                        />
                    </li>
                    <li
                        className="shape-2"
                        data-sal="fade"
                        data-sal-delay="500"
                        data-sal-duration="200"
                    >
                        <span></span>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Events;
