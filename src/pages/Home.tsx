import React from "react";
import { Link } from "react-router-dom";
import Git from "./Git";
import LatestNews from "./LatestNews";
import "../assets/style.css";
import "../assets/bootstrap/bootstrap.min.css";

const Home: React.FC = () => {
  return (
    <>
      {/* HOME */}
      <section id="home">
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/* Carousel items */}
          <div className="carousel-inner">
            <div className="carousel-item active slides">
              <div className="overlay"></div>
              <div className="slide-1"></div>
              <div className="hero ">
                <hgroup className="wow fadeInUp">
                  <h1>
                    We HAVE{" "}
                    <span>
                      <a
                        href=""
                        className="typewrite"
                        data-period="2000"
                        data-type='[ " Solution", " Services"]'
                      >
                        <span className="wrap"></span>
                      </a>
                    </span>
                  </h1>
                  <h3>
                    The next big idea is waiting for its next big changer.
                  </h3>
                </hgroup>
                <Link
                  to="/contact"
                  className="btn btn-general btn-silver wow fadeInUp"
                  role="button"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">We are committed to helping</h1>
              <div className="heading-border"></div>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Lyra Zone will deliver value to all the stakeholders and will
                attain excellence and leadership through such delivery of value.
              </p>
              <div className="title-but">
                <Link
                  to="/careers"
                  className="btn btn-general btn-silver"
                  role="button"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* About right side withBG parallax */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 bg-atlantis"
              style={{ width: "90%" }}
            >
              <div
                className="about-content-box wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-snowflake-o"></i>
                <h5>Leadership Platform</h5>
                <p className="desc">
                  It is a long established fact that a seeker will be distracted
                  by the provider if the choice of seeker is wrong. But we will
                  never disappoint you.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 bg-silver"
              style={{ width: "90%" }}
            >
              <div
                className="about-content-box wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-circle-o-notch"></i>
                <h5>Corporate World Platform</h5>
                <p className="desc">
                  We are fully equipped to provide all those Services which
                  falls under our Services.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 bg-black"
              style={{ width: "90%" }}
            >
              <div
                className="about-content-box wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <i className="fa fa-hourglass-o"></i>
                <h5>End to End Testing Platform</h5>
                <p className="desc">
                  Our goal is to complete the job(s) we take and deliver it
                  after End-to-End Testing and full satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OFFERS */}
      <section id="comp-offer">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2>What We Offer</h2>
              <div className="heading-border-light"></div>
              <Link
                to="/services"
                className="btn btn-general btn-silver"
                role="button"
              >
                See Current Offers
              </Link>
              <Link
                to="/contact"
                className="btn btn-general btn-white"
                role="button"
              >
                Contact Us Today
              </Link>
            </div>
            <div
              className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="desc-comp-offer-cont">
                <div className="thumbnail-blogs">
                  <div className="caption">
                    <Link to="/software">
                      <i className="fa fa-chain"></i>
                    </Link>
                  </div>
                  <img
                    src="/images/news/news-11.jpg"
                    className="img-fluid"
                    alt="Software"
                  />
                </div>
                <h3>Software</h3>
                <p className="desc">
                  We have been providing Accounting and Point of Sales solutions
                  for the last seven years.
                </p>
                <Link to="/software">
                  <i className="fa fa-arrow-circle-o-right"></i> Learn More
                </Link>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="desc-comp-offer-cont">
                <div className="thumbnail-blogs">
                  <div className="caption">
                    <Link to="/hardware">
                      <i className="fa fa-chain"></i>
                    </Link>
                  </div>
                  <img
                    src="/images/news/news-13.jpg"
                    className="img-fluid"
                    alt="Hardware"
                  />
                </div>
                <h3>Hardware</h3>
                <p className="desc">
                  Our collaborated partners never disappoint us. Their products
                  are always of high quality.
                </p>
                <Link to="/hardware">
                  <i className="fa fa-arrow-circle-o-right"></i> Learn More
                </Link>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="desc-comp-offer-cont">
                <div className="thumbnail-blogs">
                  <div className="caption">
                    <i className="fa fa-chain"></i>
                  </div>
                  <img
                    src="images/news/news-14.jpg"
                    className="img-fluid"
                    alt="..."
                  ></img>
                </div>
                <h3>Web & App Development</h3>
                <p className="desc">
                  Just let us know, whats in your mind, we will make it true for
                  your convenience and better future of your business
                  management.{" "}
                </p>
                <Link to="/">
                  <i className="fa fa-arrow-circle-o-right"></i> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT WE DO */}
      <section className="what-we-do bg-gradiant">
        <div className="container-fluid">
          <div className="row">
            {/* Left Title Section */}
            <div className="col-md-3">
              <h3>What we Do</h3>
              <div className="heading-border-light"></div>
              <p className="desc">
                We make partners, not clients, for strong and long-lasting
                relationships.
              </p>
            </div>

            {/* Right Services Section */}
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="what-we-desc">
                    <i className="fa fa-briefcase"></i>
                    <h6>ERP Application</h6>
                    <p className="desc">
                      Our accounting suites help you manage your business.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="what-we-desc">
                    <i className="fa fa-shopping-bag"></i>
                    <h6>eCommerce Stores</h6>
                    <p className="desc">
                      We develop and run our own eCommerce Stores with a wide
                      range of products.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="what-we-desc">
                    <i className="fa fa-building-o"></i>
                    <h6>Point of Sales</h6>
                    <p className="desc">
                      Our POS System manages your retail business with online
                      mobile reporting.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="what-we-desc">
                    <i className="fa fa-bed"></i>
                    <h6>Hotel Management</h6>
                    <p className="desc">
                      Our Hotel Management System will provide you business
                      activities at your fingertips.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="what-we-desc">
                    <i className="fa fa-hourglass-2"></i>
                    <h6>Web & App Concepts</h6>
                    <p className="desc">
                      Tell us your idea, and we'll bring it to life on your
                      gadget.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="what-we-desc">
                    <i className="fa fa-cutlery"></i>
                    <h6>POS Restaurant</h6>
                    <p className="desc">
                      Point of Sales Restaurant will manage your restaurant's
                      tables, sales, and customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Success Story */}
      <section id="story">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">Our Success Transformation Story</h1>
              <div className="heading-border"></div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="story-himg">
                <img
                  src="/images/image-4.jpg"
                  className="img-fluid"
                  alt="Success Story"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="story-desc">
                <h3>How to grow world with Us</h3>
                <div className="heading-border-light"></div>
                <p style={{ textAlign: "justify" }}>
                  Everyone defines success differently – as much as there are
                  people, there are different opinions. Number one in our
                  priority list is the success of our clients, alumni, and their
                  employers. We work hard in the name of the success of our
                  alumni – being among the best and holding a high positive
                  rate. Keep continuing with us; there are so many stories
                  during our journey of success.
                </p>
                <p style={{ textAlign: "justify" }}>
                  You can find some thoughts on success from our clients and
                  alumni here – every story is unique, but this is what success
                  is. Everybody sees it differently. Many of them have
                  experienced it and then share with us.
                </p>
                <p
                  className="text-right"
                  style={{ fontStyle: "italic", fontWeight: 700 }}
                >
                  <Link to="#">LyraZone</Link>
                </p>
                <div className="title-but">
                  <Link
                    to="/services"
                    className="btn btn-general btn-silver"
                    role="button"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Success Stories */}
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="story-descb">
                <img
                  src="/images/news/news-10.jpg"
                  className="img-fluid"
                  alt="Virtual Training"
                />
                <h6>Virtual Training Systems</h6>
                <p>
                  LyraZone offers our alumni to be a part of us virtually if
                  they are unable to approach us in person. We are committed to
                  delivering valuable knowledge, not just marketing ourselves.
                </p>
                <Link to="#">
                  <i className="fa fa-arrow-circle-o-right"></i> Read More
                </Link>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="story-descb">
                <img
                  src="/images/news/news-2.jpg"
                  className="img-fluid"
                  alt="Design Planning"
                />
                <h6>Design Planning</h6>
                <p>
                  Our application reports are designed to provide factual and
                  visual insights for better business planning.
                </p>
                <Link to="#">
                  <i className="fa fa-arrow-circle-o-right"></i> Read More
                </Link>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="story-descb">
                <img
                  src="/images/news/news-8.jpg"
                  className="img-fluid"
                  alt="Remote Support"
                />
                <h6>Remote Support</h6>
                <p>
                  LyraZone provides remote support during working hours for
                  emergencies. We understand that technology depends on human
                  expertise.
                </p>
                <Link to="#">
                  <i className="fa fa-arrow-circle-o-right"></i> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Thoughts */}
      <>
        {/* Background Overlay */}
        <div className="overlay-thought"></div>

        <section id="thought" className="bg-parallax thought-bg">
          <div className="container">
            <div
              id="thought-desc"
              className="row title-bar title-bar-thought owl-carousel owl-theme"
            >
              <div className="col-md-12">
                <div className="heading-border bg-white"></div>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  LyraZone will deliver value to all the stakeholders and will
                  attain excellence and leadership through such delivery of
                  value. We will strive to support the stakeholders in all
                  activities related to us. LyraZone provides great things.
                </p>
                <h6>John Doe</h6>
              </div>

              <div className="col-md-12 thought-desc">
                <div className="heading-border bg-white"></div>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Ensuring quality in LyraZone is an obsession, and the
                  high-quality standards set by us are achieved through a
                  rigorous quality assurance process. Quality assurance is
                  performed by an independent team of trained experts for each
                  project.
                </p>
                <h6>Tom John</h6>
              </div>
            </div>
          </div>
        </section>
      </>
      <section id="service-h">
        <div className="container-fluid">
          <div className="row">
            {/* Left Video Section */}
            <div className="col-md-6">
              <div className="service-himg">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oVYXPYeUJ4Q"
                  title="YouTube video playe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right Services Description Section */}
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-h-desc">
                <h3>We are Providing Great Services</h3>
                <div className="heading-border-light"></div>
                <p>
                  LyraZone offers the full spectrum of services to help our
                  clients work better. Everything from creating standards of
                  excellence to training your people to work in more effective
                  ways.
                </p>

                {/* Tab Section */}
                <div className="service-h-tab">
                  <nav className="nav nav-tabs" id="myTab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-expanded="true"
                    >
                      Software Training
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                    >
                      Accounting Support
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="my-profile-tab"
                      data-toggle="tab"
                      href="#my-profile"
                      role="tab"
                    >
                      Management Tools
                    </a>
                  </nav>

                  {/* Tab Content */}
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <p>
                        Our team is highly passionate about software deployment
                        and training until trainees fully understand the system.
                        Most clients newly adopting computerization need time to
                        adjust, so we remain patient and ensure they gain
                        maximum value.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <p>
                        During the provision of Accounting Software, we've
                        observed that some operators lack commerce education.
                        This results in unbalanced accounts and improper
                        charting. Don't worry! We provide support to ensure
                        error-free Accounting Software.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="my-profile"
                      role="tabpanel"
                      aria-labelledby="my-profile-tab"
                    >
                      <p>
                        The market is filled with various ERP Software options.
                        We collaborate with some of the best providers and refer
                        clients based on their business nature and requirements.
                        We trust our partners and have never had a complaint.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Tab Section */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client */}
      <section id="client" className="client">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">Our Clients Say</h1>
              <div className="heading-border"></div>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                We are committed to helping you maintain your brand value.
              </p>
            </div>
          </div>
          {/* Client Cards */}
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="client-cont wow fadeInUp" data-wow-delay="0.1s">
                <img
                  src="/images/client/avatar-6.jpg"
                  className="img-fluid"
                  alt="Client 1"
                />
                <h5>Kavish</h5>
                <h6>
                  Director
                  <br />
                  Bright Max Trading Sdn. Bhd.
                </h6>
                <i className="fa fa-quote-left"></i>
                <p>
                  The Lyra Zone Solutions truly have solutions that help in
                  business progress and increase our show-up rate whenever
                  required.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="client-cont wow fadeInUp" data-wow-delay="0.3s">
                <img
                  src="/images/client/avatar-2.jpg"
                  className="img-fluid"
                  alt="Client 2"
                />
                <h5>Faisal Zahoor</h5>
                <h6>
                  Director
                  <br />
                  ZyMal Textile Sdn. Bhd.
                </h6>
                <i className="fa fa-quote-left"></i>
                <p>
                  I found Lyra Zone perfect in solutions and services. Not only
                  did I get the solutions, but I also got peace of mind. Thanks,
                  Lyra Zone.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="client-cont wow fadeInUp" data-wow-delay="0.5s">
                <img
                  src="/images/client/avatar-1.jpg"
                  className="img-fluid"
                  alt="Client 3"
                />
                <h5>Kumar</h5>
                <h6>
                  General Manager
                  <br />
                  Premier "K" Removal & Services
                </h6>
                <i className="fa fa-quote-left"></i>
                <p>
                  Lyra Zone saved us! Their services are awesome. Now our
                  accounts are healthy & well-managed. Great job, Lyra Zone.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="client-cont wow fadeInUp" data-wow-delay="0.3s">
                <img
                  src="/images/client/avatar-3.jpg"
                  className="img-fluid"
                  alt="Client 4"
                />
                <h5>Wong</h5>
                <h6>
                  Director
                  <br />
                  Libta Coffee
                </h6>
                <i className="fa fa-quote-left"></i>
                <p>
                  Lyra Zone provided excellent services to settle our accounts
                  for the financial year 2020. Warm regards, Lyra Zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Git />
      <LatestNews />
    </>
  );
};

export default Home;
