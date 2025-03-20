import React from "react";
import LatestNews from "./LatestNews";
import "../assets/style.css";
import "../assets/services.css";
import ContactSection from "./ContactSection";
import WhatWeDo from "./WhatWeDo";

const Software: React.FC = () => {
  const offers = [
    {
      title: "ELBS ERP\nEnterprise Resource Planning",
      description:
        "We have been providing Accounting and Point of Sales solutions for the last seven years with full deployment and implementation services.",
      image: "src/assets/img/saas/elbs-erp.jpg",
      alt: "ELBS ERP",
      videoLink: "https://www.youtube.com/watch?v=LUAwtx_6yAk&t=9s",
      delay: "0.4s",
    },
    {
      title: "ELBS POS\nPoint of Sales",
      description:
        "Our collaborated partners have never disappointed us. Their products are always classy, and we maintain a 0% complaint rate.",
      image: "src/assets/img/saas/elbs-pos.jpg",
      alt: "Hardware",
      videoLink: "https://www.youtube.com/watch?v=-RJ5QzNCoZY",
      delay: "0.6s",
    },
    {
      title: "QR ORDERING\nTable QR Ordering",
      description:
        "Let us know your ideas! We bring them to life to improve your business management and convenience.",
      image: "src/assets/img/saas/qr-ordering-app.jpg",
      alt: "Web & App Development",
      videoLink: "https://qrapp.lyrazone.com.my/",
      delay: "0.8s",
    },
    {
      title: "LYRA FICT",
      description:
        "We provide expert consultancy services to optimize your business operations with the latest technology solutions.",
      image: "src/assets/img/news/news-14.jpg",
      alt: "IT Consultancy",
      videoLink: "https://lyrazone.com.my/fict/",
      delay: "1s",
    },
  ];

  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    textAlign: "center",
    height: "40px",
    lineHeight: "40px",
    padding: "0 15px",
  };

  return (
    <>
      {/* ====================================================
                        HOME-P
 ====================================================== */}
      <div id="home-p" className="home-p pages-head6 text-center">
        <div className="container">
          {/* <h1 className="wow fadeInUp" data-wow-delay="0.1s">Lyra Zone is fully equiped with ICT Tools</h1> 
        <p>SOFTWARE SOLUTIONS</p>  */}
        </div>
        {/* /end container */}
      </div>

      <section id="comp-offer" className="container-fluid">
        <div className="row">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`col-md-3 col-sm-6 desc-comp-offer wow fadeInUp`}
              data-wow-delay={offer.delay}
            >
              <div className="desc-comp-offer-cont">
                <div className="thumbnail-blogs">
                  <div className="caption">
                    <a
                      href={offer.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-chain"></i>
                    </a>
                  </div>
                  <img
                    src={offer.image}
                    className="img-fluid"
                    alt={offer.alt}
                  />
                </div>
                <h3>{offer.title}</h3>
                <p className="desc">{offer.description}</p>
                <a
                  href={offer.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-arrow-circle-o-right"></i> Watch Video
                </a>
                <a
                  href="#GitForm"
                  className="btn btn-general btn-silver wow fadeInUp"
                  role="button"
                  style={buttonStyle}
                >
                  &nbsp;&nbsp;&nbsp;Book a Demo&nbsp;&nbsp;&nbsp;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <WhatWeDo />
      <ContactSection />
      <LatestNews />
    </>
  );
};

export default Software;
