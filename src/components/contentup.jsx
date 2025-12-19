import React from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <div className="counterup-area-1 gap-lg-bottom-equal">
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-3 col-sm-6">
            <div className="edu-counterup counterup-style-1">
              <h2 className="counter-item count-number primary-color">
                <CountUp end={29.3} decimals={1} duration={2} />K
              </h2>
              <h6 className="title">STUDENT ENROLLED</h6>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="edu-counterup counterup-style-1">
              <h2 className="counter-item count-number secondary-color">
                <CountUp end={32.4} decimals={1} duration={2} />K
              </h2>
              <h6 className="title">CLASS COMPLETED</h6>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="edu-counterup counterup-style-1">
              <h2 className="counter-item count-number extra02-color">
                <CountUp end={100} duration={2} />%
              </h2>
              <h6 className="title">SATISFACTION RATE</h6>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="edu-counterup counterup-style-1">
              <h2 className="counter-item count-number extra05-color">
                <CountUp end={354} duration={2} />+
              </h2>
              <h6 className="title">TOP INSTRUCTORS</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CounterSection;
