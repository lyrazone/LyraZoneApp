import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Header.css"; // Move your navbar styles to a separate CSS file
// import "../assets/bootstrap/bootstrap.min.css";
// import "../assets/font-awesome-4.7.0/css/font-awesome.min.css";
// import "../assets/animate/animate.min.css";
// import "../assets/owl-carousel/owl.carousel.min.css";
// import "../assets/owl-carousel/owl.theme.default.min.css";
import "../assets/style.css";

<link
  href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i"
  rel="stylesheet"
></link>;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [checkToken, setCheckToken] = useState("");
  const navigate = useNavigate();

  const removeToken = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate('/');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");
    setCheckToken(storedToken || "null");
    console.log(localStorage.getItem("token") || "null");
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* <!-- Top Navbar --> */}
      <div className="top-menubar">
        <div className="topmenu">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <ul className="list-inline top-contacts">
                  <li>
                    <i className="fa fa-envelope"></i> Email:{" "}
                    <a href="mailto:support@lyrazone.com.my">
                      support@lyrazone.com.my
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> Hotline: (+60) 14 993 6302
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <ul className="list-inline top-data">
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC4HuaQMMFnFcLRB3IirK-Sg"
                      target="_blank"
                    >
                      <i className="fa top-social fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61553204526797&mibextid=kFxxJD"
                      target="_blank"
                    >
                      <i className="fa top-social fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/lyra-zone-solutions/posts/?feedView=all"
                      target="_blank"
                    >
                      <i className="fa top-social fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    {checkToken !== "null" ? (
                    <>  
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle smooth-scroll"
                          href="#"
                          id="navbarDropdownAbout"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src="images/user-icon.png" alt="User Icon" style={{ width: "30px", height: "25px" }} />
                        </a>
                        <div
                          className="dropdown-menu dropdown-cust"
                          aria-labelledby="navbarDropdownAbout"
                        >
                          <Link className="dropdown-item" to="/adminprofile">
                            User Profile
                          </Link>
                          <Link className="dropdown-item" to="">
                            Your Invoices
                          </Link>
                          <Link className="dropdown-item" to="">
                            Available Services
                          </Link>
                          <a className="dropdown-item"
                            onClick={() => removeToken()}
                          >
                            Logout
                          </a>
                        </div>
                      </li>
                    </>
                    ) : (
                      <a href="/signin" className="log-top">
                        <img src="images/user-icon.png" alt="User Icon" style={{ width: "30px", height: "25px" }} />
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Navbar --> */}
      {/* <nav
        className={`navbar navbar-expand-lg navbar-light ${
          isScrolled ? "scrolled" : ""
        }`}
        id="mainNav"
        data-toggle="affix"
      > */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="mainNav"
        data-toggle="affix"
      >
        <div className="container">
          <Link className="navbar-brand smooth-scroll" to="/">
            <img src="/images/logo-s.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse show" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link smooth-scroll" to="/">
                  Home
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle smooth-scroll"
                  href="#"
                  id="navbarDropdownAbout"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div
                  className="dropdown-menu dropdown-cust"
                  aria-labelledby="navbarDropdownAbout"
                >
                  <Link className="dropdown-item" to="/about">
                    About Us
                  </Link>
                  <Link className="dropdown-item" to="/careers">
                    Career Opportunity
                  </Link>
                  <Link className="dropdown-item" to="/team">
                    Meet Our Team
                  </Link>
                  <Link className="dropdown-item" to="/testimonials">
                    Testimonials
                  </Link>
                </div>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle smooth-scroll"
                  href="#"
                  id="navbarDropdownServices"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services &amp; Solutions
                </a>
                <div
                  className="dropdown-menu dropdown-cust"
                  aria-labelledby="navbarDropdownServices"
                >
                  <Link className="dropdown-item" to="/services">
                    Services
                  </Link>
                  <Link className="dropdown-item" to="/software">
                    Software
                  </Link>
                  <Link className="dropdown-item" to="/hardware">
                    Hardware
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Web &amp; App Development
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link smooth-scroll" to="/testimonials">
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link smooth-scroll" to="#">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link smooth-scroll" to="/contact">
                  Contact Us
                </Link>
              </li>

              {/* Search Bar */}
              <li>
                <i className="search fa fa-search search-btn"></i>
                <div className="search-open">
                  <div className="input-group animated fadeInUp">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-addon" id="basic-addon2">
                      Go
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
