import React from "react";
import "../assets/testimonials.css";
// import "../assets/style.css";

const Testimonials: React.FC = () => {
  return (
    <>
      {/* HOME-P */}
      <div id="home-p" className="home-p pages-head5 text-center">
        <div className="container"></div>
      </div>

      {/* TESTIMONIALS-P1 */}
      <div className="container">
        <div className="row title-bar">
          <div className="col-md-12">
            <h1 className="wow fadeInUp">Our Client Reviews</h1>
            <div className="heading-border"></div>
            <p className="wow fadeInUp" data-wow-delay="0.4s">
              We are a bunch of people who embody the united spirit of our Team
              Adventure.
            </p>
          </div>
        </div>
      </div>

      <div className="overlay-testimonials-p1"></div>
      <section id="testimonials-p1" className="bg-parallax testimonials-p1-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4 bg-gradiant testimonials-p1-pos">
              <div className="testimonials-p1-cont">
                <div
                  id="customers-testimonials"
                  className="text-center owl-carousel owl-theme"
                >
                  <div className="testimonial">
                    <img src="images/client/avatar-17.jpg" alt="testimonial" className="img-fluid rounded-circle"/>
                    <blockquote>
                        <p>It's indeed a Solutions centre, ELBS ERP and POS Systems are the best applications which help in Business progress, such a nice experience by having them.</p>
                    </blockquote>
                    <div className="testimonial-author">
                        <p>
                            <strong>BOD</strong>
                            <span>Board of Directors</span>
                        </p>
                    </div>
                </div>
                  {/* {[
                    {
                      img: "/images/client/avatar-17.jpg",
                      text: "It's indeed a Solutions centre, ELBS ERP and POS Systems are the best applications which help in Business progress, such a nice experience by having them.",
                      name: "BOD",
                      title: "Board of Directors",
                    },
                    {
                      img: "/images/client/avatar-2.jpg",
                      text: "I found Lyra Zone perfect in Solutions and Services. I not only get the Solutions, I got Peace of Mind. Thanks Lyra Zone.",
                      name: "Faisal Zahoor",
                      title: "Director - ZyMal Textile",
                    },
                    {
                      img: "/images/client/avatar-3.jpg",
                      text: "Lyra Zone provided great Services to settle our Accounts for the Financial Year 2020. Warm Regards Lyra Zone.",
                      name: "Wong",
                      title: "Director - Libta Coffee",
                    },
                  ].map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                      <img
                        src={testimonial.img}
                        alt="testimonial"
                        className="img-fluid rounded-circle"
                      />
                      <blockquote>
                        <p>{testimonial.text}</p>
                      </blockquote>
                      <div className="testimonial-author">
                        <p>
                          <strong>{testimonial.name}</strong>
                          <span>{testimonial.title}</span>
                        </p>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS-P2 */}
      <section id="client" className="client testimonials-p2">
        <div className="container">
          <div className="row">
            {[
              {
                img: "/images/client/avatar-17.jpg",
                name: "BOD",
                title: "Board of Directors",
                text: "It's indeed a Solutions centre, ELBS ERP and POS Systems are the best applications which help in Business progress, such a nice experience by having them.",
                link: "https://www.giant.com.my/giant-mini/",
                company: "Giant Mini",
              },
              {
                img: "/images/client/avatar-15.jpg",
                name: "Tanvir",
                title: "CEO - MUAZ Textile",
                text: "We bought ELBS ERP and POS application. After having training from Mr. Majid, my staff is very comfortable and the application is very user-friendly. I will recommend must try it.👍",
                link: "https://www.facebook.com/muazwholesale/",
                company: "MUAZ Wholesale Emporium",
              },
              {
                img: "/images/client/avatar-10.jpg",
                name: "Raza",
                title: "Director - Thai Pak Inter Co. Ltd. Thailand",
                text: "Lyra Zone developed our website which is a very helpful present ourselves in the Market. Thank you so much Lyra Zone.",
                link: "https://thaipakco.wixsite.com/tpicl",
                company: "Thai Pak Inter Co. Ltd.",
              },
              {
                img: "/images/client/avatar-6.jpg",
                name: "Kavish",
                title: "Director - Bright Max Trading",
                text: "The Lyra Zone Solutions - are indeed have Solutions, it helps in Business progress, and increase our show up rate whenever required.",
                link: "https://lazada.com.my/shop/bright-max-trading",
                company: "Bright Max Trading",
              },
            ].map((client, index) => (
              <div className="col-md-6 col-sm-12" key={index}>
                <div className="client-cont">
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={client.img} className="img-fluid" alt="" />
                  </a>
                  <h5>{client.name}</h5>
                  <h6>{client.title}</h6>
                  <i className="fa fa-quote-left"></i>
                  <p>{client.text}</p>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-o-right"></i> Learn More{" "}
                    {client.company}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
