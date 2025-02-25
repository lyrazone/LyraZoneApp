import React from "react";
import "../assets/style.css";
import "../assets/careers.css";
import Git from "./Git";
import LatestNews from "./LatestNews";
<link
  href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i"
  rel="stylesheet"
></link>;

const Career: React.FC = () => {
  return (
    <>
      {/* Career-P1 Section */}
      <section id="about" className="career-p1 about">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">Come work with us</h1>
              <div className="heading-border"></div>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Our team is driven by a shared spirit of collaboration and
                adventure.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="career-p1-himg">
                <img
                  src="images/image-4.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="career-p1-desc">
                <h4>We Make from the Best</h4>
                <div className="heading-border-light"></div>
                <p style={{ textAlign: "justify" }}>
                  We are a team that embodies the united spirit of collaboration
                  and adventure at LyraZone. While you focus on pursuing the
                  opportunities that will shape your career, LyraZone ensures
                  you have the ideal environment to thrive.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Unlike many ICT service providers who rely on third-party
                  tools, LyraZone prioritizes dedicated software and hardware
                  solutions. This approach allows us to maintain full control
                  and independence, ensuring our solutions remain powerful,
                  reliable, and free from external dependencies. Our commitment
                  to independence empowers us to deliver more secure and
                  customizable services to our clients.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-arrow-circle-o-right"></i> Enthiusiast
                    in Mission
                  </li>
                  <li>
                    <i className="fa fa-arrow-circle-o-right"></i> Great Career
                    Options
                  </li>
                  <li>
                    <i className="fa fa-arrow-circle-o-right"></i> Full
                    flexiblity of life
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career-P2 Section */}
      <div className="overlay-career-p2"></div>
      <section id="thought" className="thought-bg career-p2-bg">
        <div className="container">
          <div id="row" className="row title-bar-career-p2">
            <div className="col-md-4 ">
              <h1>100%</h1>
            </div>
            <div className="col-md-8 ">
              <p
                className="wow fadeInUp "
                data-wow-delay="0.4s"
                style={{ textAlign: "justify" }}
              >
                LyraZone will deliver value to all the stakeholders and will
                attain excellence and leadership through such delivery of value.
                We will strive to support the stakeholders in all activities
                related to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career-P3 Section */}
      <div className="overlay-career-p3"></div>
      <section id="career-p3">
        <div className="container-fluid">
          <div className="row career-p3-title">
            <div className="col-md-12">
              <h3 className="text-center">Our Business Process</h3>
            </div>
          </div>
          <div className="row">
            {[
              { icon: "fa-superpowers", title: "Plan" },
              { icon: "fa-snowflake-o", title: "Seamless" },
              { icon: "fa-send-o", title: "Care" },
              { icon: "fa-sun-o", title: "Transit" },
              { icon: "fa-crosshairs", title: "Vacation" },
              { icon: "fa-gift", title: "Enjoy" },
              { icon: "fa-plane", title: "Celebrate" },
              { icon: "fa-life-buoy", title: "Contrary" },
            ].map((item, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="career-p3-cont text-center">
                  <i className={`fa ${item.icon}`}></i>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Git />
      <LatestNews />
    </>
  );
};

export default Career;
