import React, { useState } from "react";

import "../assets/css/vendor/bootstrap.min.css"
import "../assets/css/vendor/animation.css"
import "../assets/css/vendor/animation.min.css"
import "../assets/css/vendor/icomoon.css"
import "../assets/css/vendor/jqueru-ui-min.css"
import "../assets/css/vendor/lightbox.css"
import "../assets/css/vendor/lightbox.min.css"
import "../assets/css/vendor/magnifypopup.css"
import "../assets/css/vendor/magnifypopup.min.css"
import "../assets/css/vendor/odometer.css"
import "../assets/css/vendor/odometer.min.css"
import "../assets/css/vendor/remixicon.css"
import "../assets/css/vendor/slick.css"
import "../assets/css/vendor/swiper-bundle.min.css"
import "../assets/css/vendor/tipped.min.css"
import "../assets/css/app.css"

import robotImg from "/src/img/robot_resized.jpg";
import remoteImg from "/src/img/remote_resized.jpg";
import shape13 from "/src/assets/images/about/shape-13.png";
import shape39 from "/src/assets/images/about/shape-39.png";
import shape07 from "/src/assets/images/about/shape-07.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="edu-about-area about-style-3">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title section-left">
                <span className="pre-title">About Us</span>
                <h2 className="title">
                  We Provide Best <span className="color-primary">IOT</span>{" "}
                  Services For You
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
              </div>

              {/* TABS */}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "projects" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("projects")}
                  >
                    About Projects
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "mission" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("mission")}
                  >
                    Our Mission
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "vision" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("vision")}
                  >
                    Our Vision
                  </button>
                </li>
              </ul>

              {/* TAB CONTENT */}
              <div className="tab-content">

                {activeTab === "projects" && (
                  <div className="tab-pane show active">
                    <p>
                      We design innovative IoT projects that combine smart
                      sensors, automation, and real-time data to solve
                      real-world problems.
                    </p>
                    <ul className="features-list">
                      <li>Smart Home Automation Systems</li>
                      <li>Sensor-Based Environment Monitoring</li>
                      <li>Industrial IoT & Machine Tracking Models</li>
                      <li>Cloud-Connected Real-Time Data Dashboards</li>
                    </ul>
                  </div>
                )}

                {activeTab === "mission" && (
                  <div className="tab-pane show active">
                    <p>
                      Our mission is to create smart, efficient, and
                      user-friendly IoT solutions that make automation simple
                      and accessible.
                    </p>
                    <ul className="features-list">
                      <li>Real-Time Device Monitoring</li>
                      <li>Smart Automation & Control</li>
                      <li>Energy-Efficient IoT Solutions</li>
                      <li>Seamless Wireless Connectivity</li>
                    </ul>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div className="tab-pane show active">
                    <p>
                      Our vision is to shape a fully connected world where
                      devices communicate intelligently.
                    </p>
                    <ul className="features-list">
                      <li>Cloud-Integrated IoT Dashboard</li>
                      <li>Secure Data Logging & Alerts</li>
                      <li>AI/ML-Driven Smart Insights</li>
                      <li>Scalable Multi-Device Ecosystem</li>
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <img className="main-img-1" src={robotImg} alt="IoT Robot" />
              <img className="main-img-2" src={remoteImg} alt="Remote IoT" />

              <ul className="shape-group">
                <li className="shape-1 scene">
                  <img src={shape13} alt="Shape" />
                </li>
                <li className="shape-2 scene">
                  <img src={shape39} alt="Shape" />
                </li>
                <li className="shape-3 scene">
                  <img src={shape07} alt="Shape" />
                </li>
                <li className="shape-4">
                  <span></span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* OUTER SHAPES */}
      <ul className="shape-group">
        <li className="shape-5">
          <img className="rotateit" src={shape13} alt="Shape" />
        </li>
        <li className="shape-6">
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default About;
