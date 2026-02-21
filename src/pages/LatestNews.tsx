import React from "react";
// import "../assets/style.css";

const LatestNews: React.FC = () => {
  return (
    <section id="comp-offer">
      <div className="container-fluid">
        <div className="row">
          {/* Left Section - Title & Button */}
          <div
            className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2>Latest News</h2>
            <div className="heading-border-light"></div>
            <button className="btn btn-general btn-silver" role="button">
              See More
            </button>
          </div>

          {/* News Item 1 */}
          <div
            className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain"></i>
                </div>
                <img
                  src="/images/news/news-1.jpg"
                  className="img-fluid"
                  alt="Pricing Strategies"
                />
              </div>
              <h3>Pricing Strategies</h3>
              <p className="desc">
                Our prices are 50% lower than current market prices. This helps
                build trust with clients, and then we deliver our best.
              </p>
              <a href="#">
                <i className="fa fa-arrow-circle-o-right"></i> Learn More
              </a>
            </div>
          </div>

          {/* News Item 2 */}
          <div
            className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain"></i>
                </div>
                <img
                  src="/images/news/news-9.jpg"
                  className="img-fluid"
                  alt="Management Tools"
                />
              </div>
              <h3>Management Tools</h3>
              <p className="desc">
                Businesses thrive on effective management with quality and pace.
                Our management tools facilitate both.
              </p>
              <a href="#">
                <i className="fa fa-arrow-circle-o-right"></i> Learn More
              </a>
            </div>
          </div>

          {/* News Item 3 */}
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
                  src="/images/news/news-12.jpeg"
                  className="img-fluid"
                  alt="Research & Development"
                />
              </div>
              <h3>Research & Development</h3>
              <p className="desc">
                R&D is our backbone. We test, use, and provide new technologies,
                which is why Lyra Zone has solutions.
              </p>
              <a href="#">
                <i className="fa fa-arrow-circle-o-right"></i> Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
