import React from "react";
import "../assets/style.css";
import "../assets/services.css";
import LatestNews from "./LatestNews";
import ContactSection from "./ContactSection";
import WhatWeDo from "./WhatWeDo";

const Services: React.FC = () => {
  const services = [
    {
      title: "Software",
      icon: "fa-paint-brush",
      description:
        "We have been providing Accounting and Point of Sales solutions last seven years with full deployment and implementation services.",
    },
    {
      title: "Hardware",
      icon: "fa-laptop",
      description:
        "Our collaborated partners have never disappointed us. Their products are always classy and there is 0% complaints about them.",
    },
    {
      title: "Web & App Development",
      icon: "fa-table",
      description:
        "Just let us know what's in your mind, we will make it true for your convenience and better future of your business management.",
    },
    {
      title: "Accounting Support",
      icon: "fa-exclamation-triangle",
      description:
        "During the deployment of our Accounting App, we observed that our clients have been suffering from Accounting Problems.",
      className: "right-bord",
    },
  ];

  const financialData = [
    {
      title: "Excellent Strategies For",
      description:
        "Businessbox will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us. Businessbox provides great things. Everyone defines success differently – as much as there are people, there are different opinions. Number one in our priority list is the success of our students, alumni, and their employers.",
      bgClass: "financial-p3-bg",
      reverse: false,
    },
    {
      title: "Transfer Financial Services",
      description:
        "Businessbox will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us. Businessbox provides great things. Everyone defines success differently – as much as there are people, there are different opinions. Number one in our priority list is the success of our students, alumni, and their employers.",
      bgClass: "financial-p2-bg",
      reverse: true,
    },
  ];

  return (
    <>
      {/* ====================================================
                       HOME-P
====================================================== */}

      <div id="home-p" className="home-p pages-head2 text-center">
        <div className="container">
          <h1 className="wow fadeInUp" data-wow-delay="0.1s">
            Lyra Zone is fully equipped with ICT tools
          </h1>
          <p>Our Services</p>
        </div>
      </div>

      {/* ====================================================
                      BUSINESS-GROWTH-P1
        ====================================================== */}

      <section id="business-growth-p1" className="business-growth-p1 bg-gray">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp">We committed to helping</h1>
              <div className="heading-border"></div>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                We are a leading zone of Information & Communication Technology
                (ICT). We have in-house and collaborated services to facilitate
                our clients like One-Window-Operation. We have developed
                Accounting and Point of Sales Solutions with real-time
                connectivity and reporting. We have experts to develop
                responsive and eCommerce websites.
              </p>
            </div>
          </div>
          <div
            className="row wow animated fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`col-md-3 col-sm-6 service-padding ${
                  service.className || ""
                }`}
              >
                <div className="service-item">
                  <div className="service-item-icon">
                    <i className={`fa ${service.icon} fa-3x`}></i>
                  </div>
                  <div className="service-item-title">
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-item-desc">
                    <p>{service.description}</p>
                    <div className="content-title-underline-light"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
                      FINANCIAL-P1
====================================================== */}

      {financialData.map((item, index) => (
        <section
          key={index}
          id="financial-p1"
          className={`bg-parallax ${item.bgClass}`}
        >
          <div className="overlay-financial-p1"></div>
          <div className="container-fluid">
            <div className="row">
              {item.reverse ? (
                <>
                  <div className="col-md-6 financial-p1-emp-img"></div>
                  <div className="col-md-6 financial-p1-pos financial-p1-emp-desc-d">
                    <FinancialContent
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 financial-p1-pos">
                    <FinancialContent
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                  <div className="col-md-6 financial-p1-emp-img"></div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      <WhatWeDo />

      {/* ====================================================
                        FINANCIAL-P6
    ====================================================== */}

      <section id="financial-p6" className="financial-p6">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="financial-p6-img">
                <img
                  src="src/assets/img/image-3.jpg"
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  alt="Businessbox"
                />
                <img src="" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="financial-p6-cont">
                <h2 className="wow fadeInUp">Creative Idea Businessbox</h2>
                <div className="heading-border-light"></div>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <button className="btn btn-general btn-white" role="button">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <LatestNews />
    </>
  );
};

const FinancialContent: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="financial-p1-cont">
    <a href="#">
      {" "}
      <b>Richtech Technology</b>
    </a>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="btn btn-general btn-white" role="button">
      Contact Us
    </button>
  </div>
);

export default Services;
