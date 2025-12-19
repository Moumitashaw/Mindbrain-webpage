import React from "react";



const Features = () => {
  return (
    <div className="features-area-3">
      <div className="container">
        <div className="features-grid-wrap">

          <div className="features-box features-style-3 color-primary-style edublink-svg-animate">
            <div className="icon">
              <img
                className="svgInject"
                src="/src/assets/images/animated-svg-icons/scholarship-facility.svg"
                alt="animated icon"
              />
            </div>
            <div className="content">
              <h4 className="title">Experienced Mentors</h4>
              <p>Skilled mentors helping students build innovating IoT solutions.</p>
            </div>
          </div>

          <div className="features-box features-style-3 color-secondary-style edublink-svg-animate">
            <div className="icon">
              <img
                className="svgInject"
                src="/src/assets/images/animated-svg-icons/skilled-lecturers.svg"
                alt="animated icon"
              />
            </div>
            <div className="content">
              <h4 className="title">Training Professionals</h4>
              <p>Professional trainers delivering quality learning.</p>
            </div>
          </div>

          <div className="features-box features-style-3 color-extra02-style edublink-svg-animate">
            <div className="icon">
              <img
                className="svgInject"
                src="/src/assets/images/animated-svg-icons/book-library.svg"
                alt="animated icon"
              />
            </div>
            <div className="content">
              <h4 className="title">Docs &amp; Source Code</h4>
              <p>Well-structured documentation and source code.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
