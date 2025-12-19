import React from "react";

// import "../assets/css/vendor/bootstrap.min.css"
// import "../assets/css/vendor/animation.css"
// import "../assets/css/vendor/animation.min.css"
// import "../assets/css/vendor/icomoon.css"
// import "../assets/css/vendor/jqueru-ui-min.css"
// import "../assets/css/vendor/lightbox.css"
// import "../assets/css/vendor/lightbox.min.css"
// import "../assets/css/vendor/magnifypopup.css"
// import "../assets/css/vendor/magnifypopup.min.css"
// import "../assets/css/vendor/odometer.css"
// import "../assets/css/vendor/odometer.min.css"
// import "../assets/css/vendor/remixicon.css"
// import "../assets/css/vendor/slick.css"
// import "../assets/css/vendor/swiper-bundle.min.css"
// import "../assets/css/vendor/tipped.min.css"
// import "../assets/css/app.css"

const Header = () => {
  return (
    <div className="sticky-header dark-mode">

      {/* <div id="edublink-preloader">
        <div className="loading-spinner">
          <div className="preloader-spin-1"></div>
          <div className="preloader-spin-2"></div>
        </div>
        <div className="preloader-close-btn-wraper">
          <span className="btn btn-primary preloader-close-btn">
            Cancel Preloader
          </span>
        </div>
      </div> */}

      <div id="main-wrapper" className="main-wrapper">
        <header className="edu-header header-style-2">

          <div id="edu-sticky-placeholder"></div>

          <div className="header-mainmenu">
            <div className="container">
              <div className="header-navbar">

                <div className="header-brand">
                  <div className="logo">
                    <a href="/">
                      <img
                        className="logo-light"
                        src="/src/assets/images/logo/logo-dark-2.png"
                        alt="Corporate Logo"
                      />
                      <img
                        className="logo-dark"
                        src="/src/assets/images/logo/logo-light-2.png"
                        alt="Corporate Logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="header-mainnav">
                  <nav className="mainmenu-nav">
                    <ul className="mainmenu">
                      <li className="has-droupdown"><a href="/">Home</a></li>
                      <li className="has-droupdown"><a href="/about-three">About us</a></li>
                      <li className="has-droupdown"><a href="/courcess-main">Courses</a></li>
                      <li className="has-droupdown"><a href="/product">Products</a></li>
                      <li className="has-droupdown"><a href="/shop">Shop</a></li>
                      <li className="has-droupdown"><a href="/contact-us">Contact us</a></li>
                    </ul>
                  </nav>
                </div>

                <div className="header-right">
                  <ul className="header-action">
                    <li className="icon search-icon">
                      <a href="#" className="search-trigger">
                        <i className="icon-2"></i>
                      </a>
                    </li>

                    <li className="icon cart-icon">
                      <a href="/cart" className="cart-icon">
                        <i className="icon-3"></i>
                        <span className="count">0</span>
                      </a>
                    </li>

                    <li className="mobile-menu-bar d-block d-xl-none">
                      <button className="hamberger-button">
                        <i className="icon-54"></i>
                      </button>
                    </li>

                    <li className="header-btn">
                      <a href="/login" className="edu-btn btn-medium btn-gradient">Login</a>
                      <a href="/signup" className="edu-btn btn-medium btn-gradient">Signup</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="popup-mobile-menu">
            <div className="inner">
              <div className="header-top">
                <div className="logo">
                  <a href="/">
                    <img
                      className="logo-light"
                      src="/assets/images/logo/logo-dark.png"
                      alt="Corporate Logo"
                    />
                    <img
                      className="logo-dark"
                      src="/assets/images/logo/logo-white.png"
                      alt="Corporate Logo"
                    />
                  </a>
                </div>

                <div className="close-menu">
                  <button className="close-button">
                    <i className="icon-73"></i>
                  </button>
                </div>
              </div>

              <ul className="mainmenu">
                <li className="has-droupdown"><a href="/">Home</a></li>
                <li className="has-droupdown"><a href="/courcess-main">Courses</a></li>
                <li className="has-droupdown"><a href="/product">Products</a></li>
                <li className="has-droupdown"><a href="/about-three">About us</a></li>
                <li className="has-droupdown"><a href="/shop">Shop</a></li>
                <li className="has-droupdown"><a href="/contact-us">Contact us</a></li>
              </ul>
            </div>
          </div>

          <div className="edu-search-popup">
            <div className="content-wrap">
              <div className="site-logo">
                <img
                  className="logo-light"
                  src="/assets/images/logo/logo-dark.png"
                  alt="Corporate Logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/logo/logo-white.png"
                  alt="Corporate Logo"
                />
              </div>

              <div className="close-button">
                <button className="close-trigger">
                  <i className="icon-73"></i>
                </button>
              </div>

              <div className="inner">
                <form className="search-form">
                  <input
                    type="text"
                    className="edublink-search-popup-field"
                    placeholder="Search Here..."
                  />
                  <button className="submit-button">
                    <i className="icon-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </header>
      </div>

    </div>
  );
};

export default Header;

