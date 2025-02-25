import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css"; // Import footer styles
<link
  href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i"
  rel="stylesheet"
></link>;

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      {/* <!-- Footer Section --> */}
      <div id="footer-s1" className="footer-s1">
        <div className="footer">
          <div className="container">
            <div className="row">
              {/* About Us */}
              <div className="col-md-3 col-sm-6">
                <div>
                  <img
                    src="/images/logo-w.png"
                    alt="Lyra Zone"
                    className="img-fluid"
                  />
                </div>
                <ul className="list-unstyled comp-desc-f">
                  <li>
                    <p>
                      Lyra Zone is a corporate business platform. Our Tech &
                      Services are available internationally. Our solutions will
                      make your business better - catch up with our great ideas.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="col-md-3 col-sm-6">
                <div className="heading-footer">
                  <h2>Useful Links</h2>
                </div>
                <ul className="list-unstyled link-list">
                  <li>
                    <Link to="/about">About us</Link>{" "}
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/project">Project</Link>{" "}
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/careers">Career</Link>{" "}
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>{" "}
                    <i className="fa fa-angle-right"></i>
                  </li>
                </ul>
              </div>

              {/* Recent Activities */}
              <div className="col-md-3 col-sm-6">
                <div className="heading-footer">
                  <h2>Recent Activities</h2>
                </div>
                <ul className="list-unstyled thumb-list">
                  <li>
                    <div className="overflow-h">
                      <a
                        href="http://elbs.com.my"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Our Joint Venture Partner
                      </a>
                      <small>15 March, 2018</small>
                    </div>
                  </li>
                  <li>
                    <div className="overflow-h">
                      <a
                        href="http://fict.lyrazone.com.my"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Launching of FICT
                      </a>
                      <small>21 December, 2024</small>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Get In Touch */}
              <div className="col-md-3 col-sm-6">
                <div className="heading-footer">
                  <h2>Get In Touch</h2>
                </div>
                <address className="address-details-f">
                  Suite 4.06, 4th Floor,
                  <br />
                  Menara KH, Jalan Sultan Ismail,
                  <br />
                  50250 Kuala Lumpur, Malaysia.
                  <br />
                  Phone: +60 3 2691 7067
                  <br />
                  Email:{" "}
                  <a href="mailto:support@lyrazone.com.my">
                    support@lyrazone.com.my
                  </a>
                </address>
                <ul className="list-inline social-icon-f top-data">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="footer-copyrights">
                <p>
                  Copyright &copy; 2025 All Rights Reserved by Lyra Zone Sdn.
                  Bhd. <Link to="/privacy-policy">Privacy Policy</Link>{" "}
                  <Link to="/terms">Terms of Services</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        id="back-to-top"
        className="btn btn-sm btn-silver btn-back-to-top smooth-scrolls"
        title="home"
        style={{ borderRadius: "50%" }}
      >
        <i
          className="fa fa-angle-up"
          style={{ padding: "8px", fontSize: "25px" }}
        ></i>
      </a>
    </footer>
  );
};

export default Footer;
