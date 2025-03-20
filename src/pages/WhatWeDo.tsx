import React from "react";
import "../assets/style.css";

const WhatWeDo: React.FC = () => {
  return (
      <section className="what-we-do bg-gradiant financial-p5">
        <div className="container">
          <div className="row title-bar">
            <div className="col-md-12">
              <h1 className="wow fadeInUp cl-white">Global Business Services</h1>
              <div className="heading-border bg-white"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {services.map((service, index) => (
                  <div key={index} className="col-md-4 col-sm-6">
                    <div className="what-we-desc wow fadeInUp" data-wow-delay="0.1s">
                      <i className={`fa ${service.icon}`}></i>
                      <h6>{service.title}</h6>
                      <p className="desc">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

const services = [
  {
    title: "Professional Growth",
    icon: "fa-bar-chart",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: "Research & Development",
    icon: "fa-bullseye",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: "Valuable Services",
    icon: "fa-star-o",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];

export default WhatWeDo;
